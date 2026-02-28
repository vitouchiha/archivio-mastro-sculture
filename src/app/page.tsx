'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const heroImages = [
  '/images/HP01B.jpg',
  '/images/HP02B.jpg',
  '/images/HP03B.jpg',
  '/images/HP04B.jpg',
  '/images/disegnai_collage.jpg',
]

const sections = [
  {
    href: '/esperienze-giovanili-1964-1977',
    year: '1964 – 1977',
    title: 'Esperienze Giovanili',
  },
  {
    href: '/astrazioni-simboliche-1978-1985',
    year: '1978 – 1985',
    title: 'Astrazioni Simboliche',
  },
  {
    href: '/geometrie-elementari-1986-1997',
    year: '1986 – 1997',
    title: 'Geometrie Elementari',
  },
  {
    href: '/figurazioni-racconti-1998-2004-parte-prima',
    year: '1998 – 2004',
    title: 'Figurazioni Racconti I',
  },
  {
    href: '/figurazioni-racconti-1998-2004-parte-seconda',
    year: '1998 – 2004',
    title: 'Figurazioni Racconti II',
  },
  {
    href: '/1989-2003-disegni-collage',
    year: '1989 – 2003',
    title: 'Disegni Collage',
  },
  {
    href: '/gallery',
    year: '1964 – 2024',
    title: 'Altre Opere',
  },
]

const textLinks = [
  { href: '/presentazione', label: 'Presentazione' },
  { href: '/biografia', label: 'Biografia' },
  { href: '/contact', label: 'Contatti' },
]

export default function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-text">
          <blockquote>
            TUTTO SUBITO E OGNI COSA A SUO TEMPO.
            <br /><br />
            Ai greci bisogna dire grazie per averci insegnato a guardare in alto,
            guardando in basso e intorno.
            <br /><br />
            Bisogna dire grazie per averci detto che la bellezza dell&apos;anima si può
            esprimere attraverso la bellezza dei corpi, portando il dentro fuori e il
            fuori dentro l&apos;umanità.
            <br /><br />
            Bisogna dire grazie per averci dato un&apos;estetica delle arti figurative
            per &ldquo;rifarci gli occhi&rdquo; di tanto in tanto.
            <span className="author">— Oronzo Mastro</span>
          </blockquote>
        </div>

        <div className="hero-slider" style={{ minHeight: 500 }}>
          {heroImages.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt={`Archivio Mastro Sculture – immagine ${i + 1}`}
              className={i === current ? 'active' : ''}
            />
          ))}
          <div className="slider-dots">
            {heroImages.map((_, i) => (
              <button
                key={i}
                className={`slider-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section links */}
      <section className="section-links">
        <h2>Le Collezioni</h2>
        <div className="section-grid">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="section-card">
              <p className="year">{s.year}</p>
              <p className="title">{s.title}</p>
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          {textLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#888',
                textDecoration: 'none',
                padding: '0.6rem 1.2rem',
                border: '1px solid #ddd',
                transition: 'all 0.2s',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Book promo */}
      <section className="book-promo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/libro_300px.jpg" alt="Libro Mastro Sculture" />
        <div className="text">
          <span className="novitta">Novità</span>
          <span className="book-title">Mastro Sculture</span>
          <span className="subtitle" style={{ marginBottom: '0.8rem', display: 'block' }}>
            Pensieri Disegni Opere Plastiche
          </span>
          <p className="desc">
            Un <strong>saggio</strong> e una <strong>monografia</strong> in un unico volume.
            <br /><br />
            Una riflessione, una guida nella lettura di un&apos;opera d&apos;arte.
            <br />
            Un racconto di un viaggio nel linguaggio delle immagini e della figurazione.
          </p>
        </div>
      </section>
    </>
  )
}
