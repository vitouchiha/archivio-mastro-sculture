'use client'
import Link from 'next/link'
import { useState } from 'react'

const opereLinksPrima = [
  { label: '1964-1977 Esperienze Giovanili', href: '/esperienze-giovanili-1964-1977' },
  { label: '1978-1985 Astrazioni Simboliche', href: '/astrazioni-simboliche-1978-1985' },
  { label: '1986-1997 Geometrie Elementari', href: '/geometrie-elementari-1986-1997' },
]
const figurazioniLinks = [
  { label: 'PARTE PRIMA', href: '/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'PARTE SECONDA', href: '/figurazioni-racconti-1998-2004-parte-seconda' },
]
const opereLinksSeconda = [
  { label: '1989-2003 Disegni Collage', href: '/1989-2003-disegni-collage' },
]
const allMobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'Presentazione', href: '/presentazione' },
  { label: 'Biografia', href: '/biografia' },
  { label: '1964-1977 Esperienze Giovanili', href: '/esperienze-giovanili-1964-1977' },
  { label: '1978-1985 Astrazioni Simboliche', href: '/astrazioni-simboliche-1978-1985' },
  { label: '1986-1997 Geometrie Elementari', href: '/geometrie-elementari-1986-1997' },
  { label: '1998-2004 Figurazioni Racconti I', href: '/figurazioni-racconti-1998-2004-parte-prima' },
  { label: '1998-2004 Figurazioni Racconti II', href: '/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: '1989-2003 Disegni Collage', href: '/1989-2003-disegni-collage' },
  { label: 'Photo Gallery', href: '/gallery' },
  { label: 'Dispense', href: '/dispense' },
  { label: 'Contatti', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [figOpen, setFigOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="header-slot-left">
            <Link href="/" className="logo" onClick={() => setMobileOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="Archivio Mastro Sculture" />
            </Link>
          </div>
          <div className="header-slot-center desktop-nav">
            <nav className="nv-nav">
              <Link href="/">Home</Link>
              <Link href="/presentazione">Presentazione</Link>
              <Link href="/biografia">Biografia</Link>
              <div
                className="nav-dropdown"
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => { setDropOpen(false); setFigOpen(false) }}
              >
                <span className="nav-dropdown-trigger">Opere &#x25be;</span>
                {dropOpen && (
                  <div className="nav-dropdown-menu">
                    {opereLinksPrima.map((l) => (
                      <Link key={l.href} href={l.href} onClick={() => setDropOpen(false)}>{l.label}</Link>
                    ))}
                    <div
                      className="nav-subdropdown"
                      onMouseEnter={() => setFigOpen(true)}
                      onMouseLeave={() => setFigOpen(false)}
                    >
                      <span className="nav-subdropdown-trigger">1998-2004 FIGURAZIONI RACCONTI &#x25b8;</span>
                      {figOpen && (
                        <div className="nav-subdropdown-menu">
                          {figurazioniLinks.map((l) => (
                            <Link key={l.href} href={l.href} onClick={() => { setDropOpen(false); setFigOpen(false) }}>{l.label}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                    {opereLinksSeconda.map((l) => (
                      <Link key={l.href} href={l.href} onClick={() => setDropOpen(false)}>{l.label}</Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/gallery">Photo Gallery</Link>
              <Link href="/dispense">Dispense</Link>
              <Link href="/contact">Contatti</Link>
            </nav>
          </div>
          <div className="header-slot-right">
            <div className="nav-flags desktop-nav">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://www.archiviomastrosculture.it"><img src="/images/bandiera_italia.jpg" alt="Italiano" width={25} height={21} /></a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://www.archiviomastrosculture.eu"><img src="/images/bandiera_uk.jpg" alt="English" width={26} height={20} /></a>
            </div>
            <button
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span style={mobileOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
              <span style={mobileOpen ? { opacity: 0 } : {}} />
              <span style={mobileOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
            </button>
          </div>
        </div>
      </header>
      {mobileOpen && (
        <nav className="mobile-nav">
          {allMobileLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8em', fontWeight: 700, letterSpacing: 0, textTransform: 'uppercase', color: '#14171c', textDecoration: 'none' }}
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