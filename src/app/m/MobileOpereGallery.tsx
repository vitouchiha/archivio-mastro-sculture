'use client'
import { useState } from 'react'
import Link from 'next/link'

export interface OpereCaption {
  title: string
  year?: string
  material?: string
  dimensions?: string
  code?: string
  description?: string
}

interface MobileOpereGalleryProps {
  title: string
  subtitle?: string
  bannerSrc?: string
  heroBannerImages?: string[]
  sectionDescription?: string
  images: string[]
  captions?: (OpereCaption | null)[]
  subImages?: Record<number, string[]>
  sectionLinks?: { label: string; href: string }[]
}

export default function MobileOpereGallery({ title, subtitle, bannerSrc, heroBannerImages, sectionDescription, images, captions, subImages, sectionLinks }: MobileOpereGalleryProps) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [subLightbox, setSubLightbox] = useState<string | null>(null)

  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length)
  const next = () => setCurrent(c => (c + 1) % images.length)
  const lbPrev = () => setLightbox(c => c !== null ? (c - 1 + images.length) % images.length : 0)
  const lbNext = () => setLightbox(c => c !== null ? (c + 1) % images.length : 0)

  const caption = captions?.[current]
  const lbCaption = lightbox !== null ? captions?.[lightbox] : null

  // Split "Section Name 1978–1985" into ["Section Name", "1978–1985"]
  const yearMatch = title.match(/\d{4}[\u2013\-]\d{4}/)
  const yearLabel = yearMatch ? yearMatch[0] : null
  const sectionName = title.replace(/\s*\d{4}[\u2013\-]\d{4}.*$/, '').trim()

  // sub-images for current artwork (1-based index)
  const currentSubImages = subImages?.[current + 1] ?? []

  return (
    <div className="m-gallery-bg">
      {heroBannerImages ? (
        <div className="m-pg-banner-grid">
          {heroBannerImages.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="" />
          ))}
        </div>
      ) : bannerSrc ? (
        <div className="m-section-banner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bannerSrc} alt={title} />
          <div className="m-banner-meta">
            {yearLabel && <span className="m-banner-year">{yearLabel}</span>}
            <h1 className="m-banner-title">{sectionName}</h1>
          </div>
        </div>
      ) : (
        <div className="m-gallery-header">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}

      {sectionDescription && (
        <p className="m-section-desc">{sectionDescription}</p>
      )}

      {/* Viewer */}
      <div className="m-viewer">
        {/* Image + side arrows */}
        <div className="m-viewer-img-wrap">
          <button className="m-viewer-btn prev" onClick={prev}>‹</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[current]}
            alt={caption?.title ?? `Opera ${current + 1}`}
            className="m-viewer-img"
            onClick={() => setLightbox(current)}
          />
          <button className="m-viewer-btn next" onClick={next}>›</button>
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
                {caption.description && (
                  <div className="m-viewer-caption-desc" dangerouslySetInnerHTML={{ __html: caption.description }} />
                )}
              </>
            ) : (
              <p className="m-viewer-caption-meta">{current + 1} / {images.length}</p>
            )}
          </div>
          {caption?.code && (
            <span className="m-viewer-caption-code">{caption.code}</span>
          )}
        </div>

        {/* Sub-images (detail photos) */}
        {currentSubImages.length > 0 && (
          <div className="m-sub-images">
            <div className="m-sub-images-label">Dettagli</div>
            {currentSubImages.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt={`Dettaglio ${i + 1}`}
                className="m-sub-img"
                loading="lazy"
                onClick={() => setSubLightbox(src)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="m-thumb-grid">
        {images.map((src, i) => (
          <div
            key={i}
            className={`m-thumb${i === current ? ' active' : ''}`}
            onClick={() => { setCurrent(i); setLightbox(i) }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={captions?.[i]?.title ?? `Opera ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Sub-image lightbox */}
      {subLightbox && (
        <div className="m-lightbox" onClick={() => setSubLightbox(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={subLightbox} alt="Dettaglio" onClick={e => e.stopPropagation()} />
          <button className="m-lightbox-close" onClick={() => setSubLightbox(null)}>✕</button>
        </div>
      )}

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

      {/* Main image lightbox */}
      {lightbox !== null && (
        <div className="m-lightbox" onClick={() => setLightbox(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[lightbox]} alt={lbCaption?.title ?? `Opera ${lightbox + 1}`} onClick={e => e.stopPropagation()} />
          <button className="m-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="m-lightbox-nav" onClick={e => e.stopPropagation()}>
            <button onClick={lbPrev}>‹</button>
            <button onClick={lbNext}>›</button>
          </div>
          <div className="m-lightbox-caption">
            {lbCaption ? (
              <>
                <strong style={{ display: 'block', fontSize: '0.85rem', marginBottom: 4 }}>{lbCaption.title}</strong>
                {[lbCaption.year, lbCaption.material, lbCaption.dimensions].filter(Boolean).join(' — ')}
                {lbCaption.code && <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.6, marginTop: 2 }}>{lbCaption.code}</span>}
                {lbCaption.description && <div style={{ display: 'block', fontSize: '0.8rem', marginTop: 12, lineHeight: 1.5, textAlign: 'left', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: lbCaption.description }} />}
              </>
            ) : (
              `${lightbox + 1} / ${images.length}`
            )}
          </div>
        </div>
      )}
    </div>
  )
}
