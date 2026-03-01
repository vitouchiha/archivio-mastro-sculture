'use client'
import { useState } from 'react'

// Gallery images
const images = Array.from({ length: 24 }, (_, i) =>
  `/images/gallery/PG${String(i + 1).padStart(2, '0')}.jpg`
)

export default function MobileGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox(c => c !== null ? (c - 1 + images.length) % images.length : 0)
  const next = () => setLightbox(c => c !== null ? (c + 1) % images.length : 0)

  return (
    <>
      <div className="m-gallery-header">
        <h1>Photo Gallery</h1>
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
          <div className="m-lightbox-caption">{lightbox + 1} / {images.length}</div>
        </div>
      )}
    </>
  )
}
