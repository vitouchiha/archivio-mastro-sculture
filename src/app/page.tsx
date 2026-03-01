import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full bg-[#777777]">
      {/* ── 1. HERO ── */}
      <section className="w-full">
        <div className="w-full h-8 md:h-16 bg-[#777777]" /> {/* spacer below header */}
        <div className="w-full">
          <img src="/images/Home10.png" alt="Hero" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* ── 2. & 3. TESTO E CITAZIONE ── */}
      <section className="w-full bg-[#777777] pt-12 pb-16 px-4 flex justify-center">
        <div className="max-w-4xl w-full text-white font-sans flex flex-col md:flex-row gap-8">
           <div className="flex-1">
              <h2 className="text-lg md:text-[22px] font-bold mb-10 uppercase tracking-wide leading-tight">
                Tutto subito e ogni cosa a suo tempo.
              </h2>
              
              <div className="space-y-6 text-[17px] italic font-light leading-relaxed text-gray-100">
                <p>Ai greci bisogna dire grazie per averci insegnato a guardare in alto, guardando in basso e intorno.</p>
                <p>Bisogna dire grazie per averci detto che la bellezza dell'anima si può esprimere attraverso la bellezza dei corpi, portando il dentro fuori e il fuori dentro l'umanità.</p>
                <p>Bisogna dire grazie per averci dato un'estetica delle arti figurative per "rifarci gli occhi" di tanto in tanto.</p>
              </div>
              
              <div className="mt-10 text-right text-lg font-light text-gray-100">
                <p>Oronzo Mastro</p>
              </div>
           </div>
        </div>
      </section>

      {/* ── 4. STRISCIA IMMAGINI (Sfondo bordeaux) ── */}
      <section className="w-full bg-[#6C0001] py-8">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-5 gap-3 md:gap-8">
          {[
            '/images/HP01B.jpg',
            '/images/HP02B.jpg',
            '/images/HP03B.jpg',
            '/images/HP04B.jpg',
            '/images/disegnai_collage.jpg'
          ].map((src, i) => (
            <div key={i} className="w-full aspect-square border-[6px] md:border-[10px] border-[#ebebe9] bg-[#ebebe9]">
              <img src={src} alt={"Opera ${i+1}`"} className="w-full h-full object-cover grayscale" />
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. LINK TESTUALI GALLERIA (Sfondo grigio) ── */}
      <section className="w-full bg-[#777777] pt-8 pb-12">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-5 gap-3 md:gap-8 text-white uppercase text-[9px] sm:text-xs md:text-sm font-medium tracking-wider">
          <div className="text-left">
            <Link href="/esperienze-giovanili-1964-1977" className="hover:text-[#a07427] transition-colors leading-relaxed block">
              ESPERIENZE<br/>GIOVANILI<br/>1964-1977
            </Link>
          </div>
          <div className="text-left">
            <Link href="/astrazioni-simboliche-1978-1985" className="hover:text-[#a07427] transition-colors leading-relaxed block">
              ASTRAZIONI<br/>SIMBOLICHE<br/>1978-1985
            </Link>
          </div>
          <div className="text-left">
            <Link href="/geometrie-elementari-1986-1997" className="hover:text-[#a07427] transition-colors leading-relaxed block">
              GEOMETRIE<br/>ELEMENTARI<br/>1986-1997
            </Link>
          </div>
          <div className="text-left">
            <Link href="/figurazioni-racconti-1998-2004-parte-prima" className="hover:text-[#a07427] transition-colors leading-relaxed block">
              FIGURAZIONI<br/>RACCONTI<br/>1998-2004
            </Link>
          </div>
          <div className="text-left">
            <Link href="/1989-2003-disegni-collage" className="hover:text-[#a07427] transition-colors leading-relaxed block">
              DISEGNI<br/>COLLAGE<br/>1989-2003
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. SEZIONE LIBRO / CARD ── */}
      <section className="w-full bg-[#777777] pb-24 flex justify-center px-4">
        <div className="flex flex-col md:flex-row w-full max-w-[800px] bg-[#EBEBE9] shadow-sm">
          <div className="w-full md:w-[35%] flex-shrink-0 bg-[#EBEBE9] p-0 md:p-0">
            <img src="/images/libro_300px.jpg" alt="Libro Mastro Sculture" className="w-full h-full min-h-[300px] object-cover" />
          </div>
          <div className="w-full md:w-[65%] p-8 md:p-12 flex flex-col justify-center text-gray-900 bg-[#EBEBE9]">
            <h3 className="text-[#6C0001] font-semibold text-lg mb-4">NOVITA&apos;</h3>
            <h2 className="text-2xl md:text-[28px] font-bold tracking-tight uppercase mb-1">MASTRO SCULTURE</h2>
            <p className="text-sm md:text-base mb-8 uppercase">PENSIERI DISEGNI OPERE PLASTICHE</p>
            
            <div className="space-y-4 text-sm md:text-base">
              <p>Un SAGGIO e una MONOGRAFIA in un unico volume.</p>
              <p>Una riflessione, una guida nella lettura di un&apos;opera d&apos;arte.</p>
              <p>Un racconto di un viaggio nel linguaggio delle immagini e della figurazione.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. SCROLL TO TOP E SPAZIO PRE-FOOTER ── */}
      <section className="w-full bg-[#EBEBE9] py-2 flex justify-end px-8 md:px-16">
        <a href="#top" className="bg-[#6C0001] p-2 hover:bg-opacity-90 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </section>
    </div>
  )
}
