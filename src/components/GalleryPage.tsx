'use client'
import { useState } from 'react'
import Link from 'next/link'
import Lightbox from './Lightbox'

export interface FeaturedArtwork {
  src: string
  title: string
  year: string
  material: string
  dimensions: string
  code: string
}

export interface NavLink {
  label: string
  href: string
}

interface GalleryPageProps {
  yearRange: string
  title: string
  description: string
  images: string[]
  featured?: FeaturedArtwork
  navLinks: NavLink[]
  currentHref: string
}

export default function GalleryPage({
  yearRange,
  title,
  description,
  images,
  featured,
  navLinks,
  currentHref,
}: GalleryPageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const handleOpen = (i: number) => setLightboxIndex(i)
  const handleClose = () => setLightboxIndex(null)
  const handlePrev = () =>
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length))
  const handleNext = () =>
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))

  return (
    <>
      <div className="gallery-header">
        <p className="year-range">{yearRange}</p>
        <h1>{title}</h1>
        <p className="description">{description}</p>
      </div>

      <div className="gallery-grid">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`${title} – opera ${i + 1}`}
            loading="lazy"
            onClick={() => handleOpen(i)}
          />
        ))}
      </div>

      {featured && (
        <div className="featured-artwork">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featured.src} alt={featured.title} />
          <div className="info">
            <p className="artwork-title">{featured.title}, {featured.year}</p>
            <div className="artwork-meta">
              <p>{featured.material}</p>
              <p>{featured.dimensions}</p>
            </div>
            <p className="artwork-code">codice: {featured.code}</p>
          </div>
        </div>
      )}

      <div className="bottom-nav">
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={l.href === currentHref ? 'active' : ''}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <a href="#content" className="back-to-top">
        ↑ torna su
      </a>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  )
}
