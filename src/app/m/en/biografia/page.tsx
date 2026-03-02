import Link from 'next/link'

export default function MobileBiografiaEN() {
  return (
    <div className="m-bio-page">
      {/* ---- Banner: dark red bg + portrait strip ---- */}
      <div className="m-pres-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/immagini-bio-insieme.jpg"
          alt="Biography — Oronzo Mastro"
          className="m-pres-hero-img"
        />
      </div>

      {/* ---- Section title bar ---- */}
      <div className="m-pres-title-bar">
        <h1 className="m-pres-title">BIOGRAPHY</h1>
      </div>

      {/* ---- Body text ---- */}
      <div className="m-bio-body">
        <p><strong>A teacher by profession, a sculptor by vocation</strong>, Oronzo Mastro was born on 30 December 1949 in Grottaglie (TA), a Puglian town renowned for its artistic and craft ceramics. His father Cosimo, a master ceramicist, took him to work in the workshop from his primary school years.</p>

        <p>From 1961 to 1967 he attended the State Institute of Art for Ceramics &ldquo;V. Calò&rdquo; in Grottaglie, winning first prize in sculpture in 1964. In 1967 he enrolled at the Academy of Fine Arts in Florence, graduating in sculpture in 1971.</p>

        <p>Between 1972 and 1974 he created various works, including a model with which in 1977 he won the National Competition of the Superintendency for Environmental and Artistic Heritage of Basilicata. The bronze work <em>Primo monolite</em> is on display in the gardens of the Regional Treasury Office in Matera.</p>

        <p>In 1974 he participated in the Rome Quadriennale (1975 edition) with a triptych entitled <em>Ritratti del Potere</em> (Portraits of Power), cited among the most significant works of the exhibition.</p>

        <p>Having moved to Genoa in 1977, he taught Figure and Modelled Ornament at the &ldquo;P. Klee&rdquo; Art Lyceum. During this decade he created symbolic-figurative sculptures in bronze and polyester, designed for large outdoor spaces.</p>

        <p>In 1986 he settled in <strong>Bologna</strong> and began teaching at the State Institute of Art &ldquo;A. Venturi&rdquo; in Modena. He resumed sculpture, creating geometric, essential models to be enlarged in travertine, and began designing small brass works.</p>

        <p>In the 1990s and 2000s he completed the large cycle of cold-worked brass sculptures — <em>figurations, stories</em> — light, linear works, almost drawings suspended in the air. In parallel he continued his drawings and paper collages.</p>

        <p>His entire archive of plastic works, sculptures and drawings is now preserved and documented in this digital archive.</p>

        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Link href="/m/en/presentazione" style={{ color: '#e8c97a', fontWeight: 700, fontSize: '0.85rem' }}>
            → Read the Artist&apos;s Presentation
          </Link>
        </div>
      </div>
    </div>
  )
}
