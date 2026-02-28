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
  { label: 'Altre Opere 1964–2024', href: '/gallery' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <Link href="/" className="logo" onClick={() => setMobileOpen(false)}>
          Archivio Mastro Sculture
        </Link>

        {/* ---- DESKTOP NAV ---- */}
        <nav className="desktop-nav" style={{ display: 'flex' }}>
          <Link href="/presentazione">Presentazione</Link>
          <Link href="/biografia">Biografia</Link>

          {/* Sculture dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <span className="nav-dropdown-trigger">
              Sculture &amp; Disegni ▾
            </span>
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

          <Link href="/dispense">Dispense</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contatti</Link>
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
        <nav className="mobile-nav" style={{ paddingBottom: '1.5rem' }}>
          {[
            { label: 'Presentazione', href: '/presentazione' },
            { label: 'Biografia', href: '/biografia' },
            ...galleryLinks,
            { label: 'Dispense', href: '/dispense' },
            { label: 'News', href: '/news' },
            { label: 'Contatti', href: '/contact' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#333',
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
