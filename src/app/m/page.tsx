import Link from 'next/link'

const sections = [
  { label: 'Esperienze Giovanili\n1964–1977', href: '/m/esperienze-giovanili-1964-1977', img: '/images/EGX01.jpg' },
  { label: 'Astrazioni Simboliche\n1978–1985', href: '/m/astrazioni-simboliche-1978-1985', img: '/images/01ASX.jpg' },
  { label: 'Geometrie Elementari\n1986–1997', href: '/m/geometrie-elementari-1986-1997', img: '/images/GEX01.jpg' },
  { label: 'Figurazioni Racconti\n1998–2004 I', href: '/m/figurazioni-racconti-1998-2004-parte-prima', img: '/images/FRX01.jpg' },
  { label: 'Figurazioni Racconti\n1998–2004 II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda', img: '/images/FX01.jpg' },
  { label: 'Disegni Collage\n1989–2003', href: '/m/1989-2003-disegni-collage', img: '/images/DCX01.jpg' },
]

const stripSections = [
  { label: 'Esperienze Giovanili\n1964–1977', href: '/m/esperienze-giovanili-1964-1977', img: '/images/HP01B.jpg' },
  { label: 'Astrazioni Simboliche\n1978–1985', href: '/m/astrazioni-simboliche-1978-1985', img: '/images/HP02B.jpg' },
  { label: 'Geometrie Elementari\n1986–1997', href: '/m/geometrie-elementari-1986-1997', img: '/images/HP03B.jpg' },
  { label: 'Figurazioni Racconti\n1998–2004', href: '/m/figurazioni-racconti-1998-2004-parte-prima', img: '/images/HP04B.jpg' },
  { label: 'Disegni Collage\n1989–2003', href: '/m/1989-2003-disegni-collage', img: '/images/disegnai_collage.jpg' },
]

export default function MobileHome() {
  return (
    <>
      {/* Hero */}
      <div className="m-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Home10.png" alt="Archivio Mastro Sculture" loading="eager" />
        <div className="m-hero-text">
          <h1 className="m-hero-title">Archivio Mastro Sculture</h1>
          <p className="m-hero-subtitle">Sculture, Plastiche &amp; Disegni &mdash; Bologna</p>
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

      {/* Dark red artwork strip */}
      <div className="m-strip">
        <div className="m-strip-scroll">
          {stripSections.map(s => (
            <Link key={s.href} href={s.href} className="m-strip-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.label.replace('\n', ' ')} loading="lazy" className="m-strip-img" />
              <div className="m-strip-label">{s.label.split('\n').map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* NOVITÀ section */}
      <div className="m-novita">
        <Link href="/m/dispense" className="m-novita-link">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/libro_300px.jpg" alt="Mastro Sculture libro" loading="lazy" className="m-novita-cover" />
          <div className="m-novita-text">
            <div className="m-novita-badge">NOVIT&Agrave;</div>
            <div className="m-novita-title">MASTRO SCULTURE</div>
            <div className="m-novita-subtitle">PENSIERI DISEGNI OPERE PLASTICHE</div>
            <p className="m-novita-desc">Un SAGGIO e una MONOGRAFIA in un unico volume. Una riflessione, una guida nella lettura di un&rsquo;opera d&rsquo;arte.</p>
          </div>
        </Link>
      </div>

      {/* Quote section */}
      <div className="m-quote-section">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/riquadroHP_4.jpg" alt="" role="presentation" loading="lazy" className="m-quote-bg" />
        <div className="m-quote-overlay">
          <h2 className="m-quote-heading">TUTTO SUBITO E OGNI COSA A SUO TEMPO.</h2>
          <p className="m-quote-p">Ai greci bisogna dire grazie per averci insegnato a guardare in alto, guardando in basso e intorno.</p>
          <p className="m-quote-p">Bisogna dire grazie per averci detto che la bellezza dell&rsquo;anima si può esprimere attraverso la bellezza dei corpi, portando il dentro fuori e il fuori dentro l&rsquo;umanità.</p>
          <p className="m-quote-p">Bisogna dire grazie per averci dato un&rsquo;estetica delle arti figurative per &ldquo;rifarci gli occhi&rdquo; di tanto in tanto.</p>
          <p className="m-quote-author">— Oronzo Mastro</p>
        </div>
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
          { label: 'Photo Gallery', href: '/m/gallery', bg: '#14171c' },
          { label: 'Presenze 2024', href: '/m/presenze-galleristiche-mostre-2024', bg: '#6c0001' },
          { label: 'Dispense', href: '/m/dispense', bg: '#a07427' },
          { label: 'News', href: '/m/news', bg: '#6c0001' },
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

