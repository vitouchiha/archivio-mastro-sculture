'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItemsIT = [
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

const navItemsEN = [
  { section: 'Menu' },
  { label: 'Home', href: '/m/en' },
  { label: 'Presentation', href: '/m/en/presentazione' },
  { label: 'Biography', href: '/en/biografia' },
  { label: 'News', href: '/m/news' },
  { section: 'Works' },
  { label: '1964–1977 Early Years', href: '/m/esperienze-giovanili-1964-1977' },
  { label: '1978–1985 Symbolic Abstractions', href: '/m/astrazioni-simboliche-1978-1985' },
  { label: '1986–1997 Elementary Geometries', href: '/m/geometrie-elementari-1986-1997' },
  { label: '1998–2004 Figurations I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: '1998–2004 Figurations II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: '1989–2003 Drawings Collage', href: '/m/1989-2003-disegni-collage' },
  { label: '2024 Gallery Exhibitions', href: '/m/presenze-galleristiche-mostre-2024' },
  { section: 'More' },
  { label: 'Photo Gallery', href: '/m/en/gallery' },
  { label: 'Readings', href: '/m/dispense' },
  { label: 'Contact', href: '/m/en/contact' },
]

export default function MobileHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isEN = pathname.startsWith('/m/en')
  const navItems = isEN ? navItemsEN : navItemsIT
  const homeHref = isEN ? '/m/en' : '/m'

  return (
    <>
      <header className="m-header">
        <Link href={homeHref} className="m-logo" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/cropped-logo3.png" alt="Archivio Mastro Sculture" />
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
              <a href={isEN ? '/m' : 'https://www.archiviomastrosculture.it'}><img src="/images/bandiera_italia.jpg" alt="ITA" /></a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="/m/en"><img src="/images/bandiera_uk.jpg" alt="ENG" /></a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
