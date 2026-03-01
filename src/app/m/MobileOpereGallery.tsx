'use client'
import { useState } from 'react'
import Link from 'next/link'

export interface OpereCaption {
  title: string
  year?: string
  material?: string
  dimensions?: string
  code?: string
}

interface MobileOpereGalleryProps {
  title: string
  subtitle?: string
  images: string[]
  captions?: (OpereCaption | null)[]
  sectionLinks?: { label: string; href: string }[]
}

export default function MobileOpereGallery({ title, subtitle, images, captions, sectionLinks }: MobileOpereGalleryProps) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length)
  const next = () => setCurrent(c => (c + 1) % images.length)
  const lbPrev = () => setLightbox(c => c !== null ? (c - 1 + images.length) % images.length : 0)
  const lbNext = () => setLightbox(c => c !== null ? (c + 1) % images.length : 0)

  const caption = captions?.[current]
  const lbCaption = lightbox !== null ? captions?.[lightbox] : null

  return (
    <>
      <div className="m-gallery-header">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {/* Viewer */}
      <div className="m-viewer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[current]}
          alt={caption?.title ?? `Opera ${current + 1}`}
          className="m-viewer-img"
          onClick={() => setLightbox(current)}
        />
        <div className="m-viewer-nav">
          <button className="m-viewer-btn" onClick={prev}>&#8249;</button>
          <div className="m-viewer-info">
            {caption ? (
              <>
                <strong>{caption.title}</strong>
                <small>{[caption.year, caption.material, caption.dimensions].filter(Boolean).join(' — ')}</small>
                {caption.code && <small style={{ color: '#999' }}>{caption.code}</small>}
              </>
            ) : (
              <small>{current + 1} / {images.length}</small>
            )}
          </div>
          <button className="m-viewer-btn" onClick={next}>&#8250;</button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="m-thumb-grid">
        {images.map((src, i) => (
          <div
            key={i}
            className={`m-thumb${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={captions?.[i]?.title ?? `Opera ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Nav to other sections */}
      {sectionLinks && (
        <div style={{ padding: '0 16px 32px' }}>
          <div className="m-section-title">Altre sezioni</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {sectionLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  background: '#fff',
                  borderRadius: 4,
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderLeft: '3px solid #a07427',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="m-lightbox" onClick={() => setLightbox(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[lightbox]} alt={lbCaption?.title ?? `Opera ${lightbox + 1}`} onClick={e => e.stopPropagation()} />
          <button className="m-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="m-lightbox-nav" onClick={e => e.stopPropagation()}>
            <button onClick={lbPrev}>&#8249;</button>
            <button onClick={lbNext}>&#8250;</button>
          </div>
          <div className="m-lightbox-caption">
            {lbCaption ? (
              <>
                <strong style={{ display: 'block', fontSize: '0.85rem', marginBottom: 4 }}>{lbCaption.title}</strong>
                {[lbCaption.year, lbCaption.material, lbCaption.dimensions].filter(Boolean).join(' — ')}
                {lbCaption.code && <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.6, marginTop: 2 }}>{lbCaption.code}</span>}
              </>
            ) : (
              `${lightbox + 1} / ${images.length}`
            )}
          </div>
        </div>
      )}
    </>
  )
}
