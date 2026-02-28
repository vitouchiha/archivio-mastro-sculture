'use client'
import Link from 'next/link'
import { useState } from 'react'

const galleryLinks = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/esperienze-giovanili-1964-1977' },
  { label: 'Astrazioni Simboliche 1978–1985', href: '/astrazioni-simboliche-1978-1985' },
  { label: 'Geometrie Elementari 1986–1997', href: '/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti 1998–2004 I', href: '/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti 1998–2004 II', href: '/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/1989-2003-disegni-collage' },
  { label: 'Presenze Galleristiche 2024', href: '/presenze-galleristiche-mostre-2024' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        {/* ---- LOGO IMAGE ---- */}
        <Link href="/" className="logo" onClick={() => setMobileOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="Archivio Mastro Sculture" />
        </Link>

        {/* ---- DESKTOP NAV ---- */}
        <nav className="desktop-nav" style={{ display: 'flex' }}>
          <Link href="/">Home</Link>
          <Link href="/presentazione">Presentazione</Link>
          <Link href="/biografia">Biografia</Link>

          {/* Opere dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <span className="nav-dropdown-trigger">Opere ▾</span>
            {dropOpen && (
              <div className="nav-dropdown-menu">
                {galleryLinks.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setDropOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/gallery">Photo Gallery</Link>
          <Link href="/dispense">Dispense</Link>
          <Link href="/contact">Contatti</Link>

          {/* Language flags */}
          <span className="nav-flag" title="Italiano">🇮🇹</span>
          <span className="nav-flag" title="English">🇬🇧</span>
        </nav>

        {/* ---- HAMBURGER ---- */}
        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span style={mobileOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
          <span style={mobileOpen ? { opacity: 0 } : {}} />
          <span style={mobileOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
        </button>
      </header>

      {/* ---- MOBILE NAV ---- */}
      {mobileOpen && (
        <nav className="mobile-nav">
          {[
            { label: 'Home', href: '/' },
            { label: 'Presentazione', href: '/presentazione' },
            { label: 'Biografia', href: '/biografia' },
            ...galleryLinks,
            { label: 'Photo Gallery', href: '/gallery' },
            { label: 'Dispense', href: '/dispense' },
            { label: 'Contatti', href: '/contact' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.8em',
                fontWeight: 700,
                letterSpacing: 0,
                textTransform: 'uppercase',
                color: '#14171c',
                textDecoration: 'none',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  )
}
