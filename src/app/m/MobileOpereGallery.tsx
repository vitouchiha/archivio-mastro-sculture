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
        {/* Image + side arrows */}
        <div className="m-viewer-img-wrap">
          <button className="m-viewer-btn prev" onClick={prev}>&#8249;</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[current]}
            alt={caption?.title ?? `Opera ${current + 1}`}
            className="m-viewer-img"
            onClick={() => setLightbox(current)}
          />
          <button className="m-viewer-btn next" onClick={next}>&#8250;</button>
        </div>

        {/* Caption bar */}
        <div className="m-viewer-caption">
          <div className="m-viewer-caption-left">
            {caption ? (
              <>
                <p className="m-viewer-caption-title">
                  <em>{caption.title}</em>
                  {caption.year ? `, ${caption.year}` : ''}
                </p>
                <p className="m-viewer-caption-meta">
                  {[caption.material, caption.dimensions].filter(Boolean).join(' / ')}
                </p>
              </>
            ) : (
              <p className="m-viewer-caption-meta">{current + 1} / {images.length}</p>
            )}
          </div>
          {caption?.code && (
            <span className="m-viewer-caption-code">{caption.code}</span>
          )}
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
                  borderLeft: '3px solid #6c0001',
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
