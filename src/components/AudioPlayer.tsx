'use client'

import { useEffect, useRef, useState } from 'react'

const TARGET_VOL = 0.38
const STORAGE_KEY = 'ams_audio_visited'

function fadeIn(audio: HTMLAudioElement) {
  audio.muted = false
  let v = 0
  const id = setInterval(() => {
    v = Math.min(v + 0.03, TARGET_VOL)
    audio.volume = v
    if (v >= TARGET_VOL) clearInterval(id)
  }, 80)
}

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [btnVisible, setBtnVisible] = useState(false)
  // banner shown on touch devices when audio hasn't started yet
  const [showBanner, setShowBanner] = useState(false)
  const startedRef = useRef(false)
  // track if audio was playing before going to background
  const wasPlayingRef = useRef(false)

  useEffect(() => {
    const audio = new Audio('/music/ambient.mp3')
    audio.loop = true
    audio.preload = 'auto'
    audioRef.current = audio

    // Pause when screen locks / app goes to background; resume on return
    const onVisibilityChange = () => {
      if (document.hidden) {
        wasPlayingRef.current = !audio.paused
        if (!audio.paused) {
          audio.pause()
          setPlaying(false)
        }
      } else {
        if (wasPlayingRef.current) {
          audio.play().then(() => setPlaying(true)).catch(() => {})
        }
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    const hasVisited = !!localStorage.getItem(STORAGE_KEY)
    const isTouch = navigator.maxTouchPoints > 0

    function startAudio(muted = true) {
      if (startedRef.current) return
      startedRef.current = true
      audio.muted = muted
      audio.volume = muted ? 0 : TARGET_VOL
      audio.play().then(() => {
        if (muted) fadeIn(audio)
        setPlaying(true)
        setBtnVisible(true)
        setShowBanner(false)
        localStorage.setItem(STORAGE_KEY, '1')
      }).catch(() => {
        startedRef.current = false
      })
    }

    if (isTouch) {
      // Touch/mobile: show tap-to-start banner after short delay
      const t = setTimeout(() => {
        if (!startedRef.current) setShowBanner(true)
        setBtnVisible(true)
      }, 800)

      // On any touch/click anywhere on the page, start audio
      const onInteract = () => {
        setShowBanner(false)
        startAudio(false)
      }
      document.addEventListener('touchstart', onInteract, { once: true })
      document.addEventListener('click', onInteract, { once: true })

      return () => {
        clearTimeout(t)
        document.removeEventListener('touchstart', onInteract)
        document.removeEventListener('click', onInteract)
        document.removeEventListener('visibilitychange', onVisibilityChange)
        audio.pause(); audio.src = ''
      }
    } else {
      // Desktop: aggressive autoplay
      setBtnVisible(true)
      const t = setTimeout(() => {
        if (hasVisited) {
          audio.muted = false
          audio.volume = TARGET_VOL
          audio.play()
            .then(() => { startedRef.current = true; setPlaying(true) })
            .catch(() => startAudio(true))
        } else {
          startAudio(true)
        }
      }, 500)

      const onInteract = () => {
        if (startedRef.current) return
        startAudio(false)
      }
      document.addEventListener('click', onInteract, { once: true })
      document.addEventListener('keydown', onInteract, { once: true })

      return () => {
        clearTimeout(t)
        document.removeEventListener('click', onInteract)
        document.removeEventListener('keydown', onInteract)
        document.removeEventListener('visibilitychange', onVisibilityChange)
        audio.pause(); audio.src = ''
      }
    }
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.muted = false
      audio.volume = TARGET_VOL
      audio.play().then(() => {
        setPlaying(true)
        startedRef.current = true
        setShowBanner(false)
        localStorage.setItem(STORAGE_KEY, '1')
      }).catch(() => {})
    }
  }

  return (
    <>
      <style>{`
        /* ---- floating button ---- */
        .ap-btn {
          position: fixed;
          bottom: 22px;
          right: 18px;
          z-index: 9999;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: rgba(30, 20, 10, 0.72);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          box-shadow: 0 2px 14px rgba(0,0,0,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.5s ease, transform 0.2s ease, background 0.2s ease;
          opacity: 0;
          pointer-events: none;
        }
        .ap-btn.ap-visible {
          opacity: 1;
          pointer-events: auto;
        }
        .ap-btn:hover, .ap-btn:active {
          background: rgba(30, 20, 10, 0.92);
          transform: scale(1.08);
        }
        .ap-btn svg {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
        }
        /* ---- animated bars (playing state) ---- */
        .ap-bars {
          display: flex;
          align-items: flex-end;
          gap: 2.5px;
          height: 16px;
        }
        .ap-bars span {
          display: block;
          width: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.88);
          animation: ap-bounce 0.9s ease-in-out infinite alternate;
        }
        .ap-bars span:nth-child(1) { height: 7px;  animation-delay: 0s; }
        .ap-bars span:nth-child(2) { height: 14px; animation-delay: 0.15s; }
        .ap-bars span:nth-child(3) { height: 10px; animation-delay: 0.30s; }
        .ap-bars span:nth-child(4) { height: 5px;  animation-delay: 0.10s; }
        @keyframes ap-bounce {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1); }
        }
        /* ---- tap-to-start banner (mobile only) ---- */
        .ap-banner {
          position: fixed;
          bottom: 80px;
          right: 12px;
          z-index: 9998;
          background: rgba(30, 20, 10, 0.82);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: rgba(255,255,255,0.92);
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          padding: 9px 14px 9px 12px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          gap: 7px;
          box-shadow: 0 3px 16px rgba(0,0,0,0.3);
          cursor: pointer;
          animation: ap-pulse 2.4s ease-in-out infinite;
          white-space: nowrap;
          border: none;
          font-family: inherit;
        }
        .ap-banner-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #e8c080;
          animation: ap-dot 2.4s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes ap-pulse {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.03); }
        }
        @keyframes ap-dot {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
      `}</style>

      {/* Tap-to-start banner for mobile / Brave */}
      {showBanner && (
        <button
          className="ap-banner"
          onClick={toggle}
          aria-label="Tocca per avviare la musica"
        >
          <span className="ap-banner-dot" />
          ♪ Tocca per la musica
        </button>
      )}

      {/* Floating play/pause button */}
      <button
        className={`ap-btn${btnVisible ? ' ap-visible' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pausa musica' : 'Avvia musica'}
        title={playing ? 'Pausa musica' : 'Avvia musica'}
      >
        {playing ? (
          <span className="ap-bars">
            <span />
            <span />
            <span />
            <span />
          </span>
        ) : (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              stroke="rgba(255,255,255,0.88)" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        )}
      </button>
    </>
  )
}
