'use client'
import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { section: 'Menu' },
  { label: 'Home', href: '/m' },
  { label: 'Presentazione', href: '/m/presentazione' },
  { label: 'Biografia', href: '/m/biografia' },
  { label: 'News', href: '/m/news' },
  { section: 'Opere' },
  { label: '1964–1977 Esperienze Giovanili', href: '/m/esperienze-giovanili-1964-1977' },
  { label: '1978–1985 Astrazioni Simboliche', href: '/m/astrazioni-simboliche-1978-1985' },
  { label: '1986–1997 Geometrie Elementari', href: '/m/geometrie-elementari-1986-1997' },
  { label: '1998–2004 Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: '1998–2004 Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: '1989–2003 Disegni Collage', href: '/m/1989-2003-disegni-collage' },
  { label: 'Presenze Galleristiche 2024', href: '/m/presenze-galleristiche-mostre-2024' },
  { section: 'Altro' },
  { label: 'Photo Gallery', href: '/m/gallery' },
  { label: 'Dispense', href: '/m/dispense' },
  { label: 'Contatti', href: '/m/contact' },
]

export default function MobileHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="m-header">
        <Link href="/m" className="m-logo" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="Archivio Mastro Sculture" />
        </Link>
        <button
          className={`m-hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {open && (
        <div className="m-nav-drawer" onClick={() => setOpen(false)}>
          <nav className="m-nav-panel" onClick={e => e.stopPropagation()}>
            <button className="m-nav-close" onClick={() => setOpen(false)}>✕</button>
            {navItems.map((item, i) =>
              'section' in item ? (
                <div key={i} className="m-nav-section">{item.section}</div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="m-nav-link"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="m-lang-bar">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://www.archiviomastrosculture.it"><img src="/images/bandiera_italia.jpg" alt="ITA" /></a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://www.archiviomastrosculture.eu"><img src="/images/bandiera_uk.jpg" alt="EN" /></a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
