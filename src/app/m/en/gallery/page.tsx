'use client'
import { useState } from 'react'
import { pgFeatured } from '@/data/galleries'
import { extendedDescriptions } from '@/data/extended_descriptions'

const images = Array.from({ length: 24 }, (_, i) =>
  `/images/PG${String(i + 1).padStart(2, '0')}X.jpg`
)

const HERO_IMGS = ['/images/PG01X.jpg', '/images/PG09X.jpg', '/images/PG17X.jpg']

export default function MobileGalleryEN() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox(c => c !== null ? (c - 1 + images.length) % images.length : 0)
  const next = () => setLightbox(c => c !== null ? (c + 1) % images.length : 0)

  const lbDesc = lightbox !== null ? extendedDescriptions.pg[lightbox + 1]?.description : null

  return (
    <div className="m-gallery-bg">
      <div className="m-pg-banner-grid">
        {HERO_IMGS.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt={`Gallery hero ${i + 1}`} />
        ))}
      </div>
      <div className="m-banner-meta">
        <span className="m-banner-year">1964-2014-2024</span>
        <h1 className="m-banner-title">OTHER WORKS, OTHER THINGS</h1>
      </div>
      <p className="m-section-desc">
        In this photo collection, in addition to new works in the archive, there will be space for other
        professional and workshop experiences, such as photography, ceramics, design and other project activities.
      </p>
      <div className="m-photo-grid">
        {images.map((src, i) => (
          <div key={i} className="m-photo-item" onClick={() => setLightbox(i)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Photo ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
      {lightbox !== null && (
        <div className="m-lightbox" onClick={() => setLightbox(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[lightbox]} alt={`Photo ${lightbox + 1}`} onClick={e => e.stopPropagation()} />
          <button className="m-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="m-lightbox-nav" onClick={e => e.stopPropagation()}>
            <button onClick={prev}>‹</button>
            <button onClick={next}>›</button>
          </div>
          <div className="m-lightbox-caption">
            <strong>{pgFeatured.title}</strong><br />
            {pgFeatured.year}{pgFeatured.material ? ` — ${pgFeatured.material}` : ''}
            <span style={{ display: 'block', marginTop: 4, opacity: 0.6 }}>{lightbox + 1} / {images.length}</span>
            {lbDesc && <div style={{ display: 'block', fontSize: '0.8rem', marginTop: 12, lineHeight: 1.5, textAlign: 'left', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: lbDesc }} />}
          </div>
        </div>
      )}
    </div>
  )
}
