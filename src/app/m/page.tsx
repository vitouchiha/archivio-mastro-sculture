import Link from 'next/link'

const sections = [
  { label: 'Esperienze Giovanili\n1964–1977', href: '/m/esperienze-giovanili-1964-1977', img: '/images/2023/01/EGX01.jpg' },
  { label: 'Astrazioni Simboliche\n1978–1985', href: '/m/astrazioni-simboliche-1978-1985', img: '/images/2023/04/01ASXa.jpg' },
  { label: 'Geometrie Elementari\n1986–1997', href: '/m/geometrie-elementari-1986-1997', img: '/images/2023/04/GEX01.jpg' },
  { label: 'Figurazioni Racconti\n1998–2004 I', href: '/m/figurazioni-racconti-1998-2004-parte-prima', img: '/images/2023/04/FRX01a.jpg' },
  { label: 'Figurazioni Racconti\n1998–2004 II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda', img: '/images/2023/05/FX01a.jpg' },
  { label: 'Disegni Collage\n1989–2003', href: '/m/1989-2003-disegni-collage', img: '/images/2023/05/DCX01.jpg' },
]

export default function MobileHome() {
  return (
    <>
      {/* Hero */}
      <div className="m-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/cropped-logo3.png" alt="Archivio Mastro Sculture" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className="m-hero-text">
          <h1 className="m-hero-title">Archivio Mastro Sculture</h1>
          <p className="m-hero-subtitle">Sculture, Plastiche & Disegni — Bologna</p>
        </div>
      </div>

      {/* Info links */}
      <div style={{ display: 'flex', gap: 2, padding: '12px 16px 0' }}>
        {[
          { label: 'Presentazione', href: '/m/presentazione' },
          { label: 'Biografia', href: '/m/biografia' },
          { label: 'Contatti', href: '/m/contact' },
        ].map(l => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              flex: 1,
              display: 'block',
              background: '#14171c',
              color: '#fff',
              textAlign: 'center',
              padding: '10px 4px',
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderRadius: 4,
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Opere sections */}
      <div className="m-section-title">Opere</div>
      <div className="m-card-grid">
        {sections.map(s => (
          <Link key={s.href} href={s.href} className="m-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.img} alt={s.label} loading="lazy" />
            <div className="m-card-label">{s.label.replace('\n', '\n')}</div>
          </Link>
        ))}
      </div>

      {/* Quick links */}
      <div className="m-section-title">Altro</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, padding: '0 2px 24px' }}>
        {[
          { label: 'Photo Gallery', href: '/m/gallery', bg: '#3a4a6b' },
          { label: 'Presenze 2024', href: '/m/presenze-galleristiche-mostre-2024', bg: '#5a3a1a' },
          { label: 'Dispense', href: '/m/dispense', bg: '#2a5a3a' },
          { label: 'News', href: '/m/news', bg: '#5a2a2a' },
        ].map(l => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px 8px',
              background: l.bg,
              color: '#fff',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textAlign: 'center',
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  )
}
