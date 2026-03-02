'use client'

import { useEffect, useRef, useState } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const audio = new Audio('/music/ambient.mp3')
    audio.loop = true
    audio.volume = 0.35
    audioRef.current = audio

    // show the button after a short delay so it doesn't appear instantly
    const t = setTimeout(() => setVisible(true), 1200)
    return () => {
      clearTimeout(t)
      audio.pause()
      audio.src = ''
    }
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <style>{`
        .ap-btn {
          position: fixed;
          bottom: 22px;
          right: 22px;
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
        .ap-btn:hover {
          background: rgba(30, 20, 10, 0.88);
          transform: scale(1.08);
        }
        .ap-btn svg {
          width: 22px;
          height: 22px;
          fill: rgba(255,255,255,0.88);
          flex-shrink: 0;
        }
        /* animated bars shown when playing */
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
        .ap-tooltip {
          position: absolute;
          right: 54px;
          bottom: 50%;
          transform: translateY(50%);
          background: rgba(30,20,10,0.82);
          color: rgba(255,255,255,0.9);
          font-size: 0.72rem;
          letter-spacing: 0.03em;
          white-space: nowrap;
          padding: 4px 9px;
          border-radius: 4px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .ap-btn:hover .ap-tooltip {
          opacity: 1;
        }
      `}</style>
      <button
        className={`ap-btn${visible ? ' ap-visible' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pausa musica' : 'Avvia musica'}
        title={playing ? 'Pausa musica' : 'Avvia musica'}
      >
        <span className="ap-tooltip">{playing ? 'Pausa' : 'Musica'}</span>
        {playing ? (
          <span className="ap-bars">
            <span />
            <span />
            <span />
            <span />
          </span>
        ) : (
          /* music note SVG */
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="rgba(255,255,255,0.88)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        )}
      </button>
    </>
  )
}
