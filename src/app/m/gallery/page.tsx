'use client'
import { useState } from 'react'
import { pgFeatured } from '@/data/galleries'

// HQ X-series images (root /images/)
const images = Array.from({ length: 24 }, (_, i) =>
  `/images/PG${String(i + 1).padStart(2, '0')}X.jpg`
)

import { extendedDescriptions } from '@/data/extended_descriptions'

export default function MobileGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox(c => c !== null ? (c - 1 + images.length) % images.length : 0)
  const next = () => setLightbox(c => c !== null ? (c + 1) % images.length : 0)

  // Map descriptions based on photo index (0-indexed array vs 1-indexed extracted)
  const lbDesc = lightbox !== null ? extendedDescriptions.pg[lightbox + 1]?.description : null;

  return (
    <>
      <div className="m-gallery-header">
        <h1>Photo Gallery</h1>
        <p style={{ fontSize: '0.8rem', color: '#888', marginTop: 4 }}>
          {pgFeatured.title} &mdash; {pgFeatured.year}
        </p>
      </div>

      <div className="m-photo-grid">
        {images.map((src, i) => (
          <div key={i} className="m-photo-item" onClick={() => setLightbox(i)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Foto ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div className="m-lightbox" onClick={() => setLightbox(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[lightbox]} alt={`Foto ${lightbox + 1}`} onClick={e => e.stopPropagation()} />
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
    </>
  )
}