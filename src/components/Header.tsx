'use client'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Esperienze Giovanili 1964-1977', href: '/esperienze-giovanili-1964-1977' },
  { label: 'Astrazioni Simboliche 1978-1985', href: '/astrazioni-simboliche-1978-1985' },
  { label: 'Geometrie Elementari 1986-1997', href: '/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti 1998-2004 I', href: '/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti 1998-2004 II', href: '/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989-2003', href: '/1989-2003-disegni-collage' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <Link href="/" className="logo">
        Archivio Mastro Sculture
      </Link>

      {/* desktop nav */}
      <nav className="desktop-nav" style={{ display: 'flex' }}>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>

      {/* hamburger */}
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span style={open ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
        <span style={open ? { opacity: 0 } : {}} />
        <span style={open ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
      </button>

      {/* mobile nav */}
      {open && (
        <nav className="mobile-nav">
          {navLinks.map((l) => (
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
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
