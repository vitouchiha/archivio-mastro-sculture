import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* ── 1. HERO: full-width static image, contain, min-height 700px ── */}
      <section className="hero-section" />

      {/* ── 2. "TUTTO SUBITO E OGNI COSA A SUO TEMPO." ── */}
      <section className="tutto-section">
        <div className="tutto-inner">
          <div className="tutto-spacer-left" />
          <div className="tutto-text-col">
            <p>Tutto subito e ogni cosa a suo tempo.</p>
          </div>
          <div className="tutto-spacer-mid" />
          <div className="tutto-right-col" />
        </div>
      </section>

      {/* ── 3. QUOTE ── */}
      <section className="quote-section">
        <div className="quote-inner">
          <div className="quote-spacer" />
          <div className="quote-text-col">
            <blockquote>
              Tutto subito e ogni cosa a suo tempo.<br /><br />
              Ai greci bisogna dire grazie per averci insegnato a guardare in alto,
              guardando in basso e intorno.<br /><br />
              Bisogna dire grazie per averci detto che la bellezza dell&apos;anima si può
              esprimere attraverso la bellezza dei corpi, portando il dentro fuori e il
              fuori dentro l&apos;umanità.<br /><br />
              Bisogna dire grazie per averci dato un&apos;estetica delle arti figurative
              per &ldquo;rifarci gli occhi&rdquo; di tanto in tanto.
            </blockquote>
            <span className="quote-author">Oronzo Mastro</span>
          </div>
          <div className="quote-spacer" />
        </div>
      </section>

      {/* ── 4. IMAGE STRIP (burgundy background) ── */}
      <section className="image-strip">
        <div className="image-strip-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/HP01B.jpg" alt="Opere di Mastro Sculture" />
        </div>
        <div className="image-strip-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/HP02B.jpg" alt="Opere di Mastro Sculture" />
        </div>
        <div className="image-strip-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/HP03B.jpg" alt="Opere di Mastro Sculture" />
        </div>
        <div className="image-strip-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/HP04B.jpg" alt="Opere di Mastro Sculture" />
        </div>
        <div className="image-strip-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/disegnai_collage.jpg" alt="Disegni Collage" />
        </div>
      </section>

      {/* ── 5. GALLERY TEXT LINKS ── */}
      <section className="gallery-links-section">
        <div className="gallery-links-inner">
          <div className="gallery-link-col">
            <Link href="/esperienze-giovanili-1964-1977">
              Esperienze Giovanili 1964-1977
            </Link>
          </div>
          <div className="gallery-link-col">
            <Link href="/astrazioni-simboliche-1978-1985">
              Astrazioni Simboliche 1978-1985
            </Link>
          </div>
          <div className="gallery-link-col">
            <Link href="/geometrie-elementari-1986-1997">
              Geometrie Elementari 1986-1997
            </Link>
          </div>
          <div className="gallery-link-col">
            <Link href="/figurazioni-racconti-1998-2004-parte-prima">
              Figurazioni Racconti 1998-2004
            </Link>
          </div>
          <div className="gallery-link-col">
            <Link href="/1989-2003-disegni-collage">
              Disegni Collage 1989-2003
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. BOOK / FEATURED SECTION ── */}
      <section className="book-section">
        <div className="book-inner">
          <div className="book-spacer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/libro_300px.jpg" alt="Libro Mastro Sculture" />
          </div>
          <div className="book-text-col">
            <span className="novitta">NOVITÀ</span>
            <span className="book-title">MASTRO SCULTURE</span>
            <span className="book-subtitle">PENSIERI DISEGNI OPERE PLASTICHE</span>
            <p className="book-desc">
              Un <strong>SAGGIO</strong> e una <strong>MONOGRAFIA</strong> in un unico volume.<br /><br />
              Una riflessione, una guida nella lettura di un&apos;opera d&apos;arte.<br />
              Un racconto di un viaggio nel linguaggio delle immagini e della figurazione.
            </p>
          </div>
          <div style={{ width: '50%' }} />
        </div>
      </section>
    </>
  )
}
