export default function MobileBiografia() {
  return (
    <div className="m-bio-page">
      {/* ---- Banner ---- */}
      <div className="m-pres-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/immagini-bio-insieme.jpg"
          alt="Biografia — Oronzo Mastro"
          className="m-pres-hero-img"
        />
      </div>

      {/* ---- Section title bar ---- */}
      <div className="m-pres-title-bar">
        <h1 className="m-pres-title">BIOGRAFIA</h1>
      </div>

      {/* ---- Timeline ---- */}
      <div className="m-bio-body">
        <div className="m-bio-timeline">

          <div className="m-bio-row">
            <span className="m-bio-year">1949</span>
            <span className="m-bio-desc">il 30 dicembre nasce a Grottaglie ORONZO MASTRO.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1967</span>
            <span className="m-bio-desc">si diploma Maestro d&apos;Arte per la Ceramica, presso l&apos;Istituto Statale d&apos;Arte di Grottaglie.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1971</span>
            <span className="m-bio-desc">si diploma in Scultura, presso l&apos;Accademia di Belle Arti di Firenze.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1974</span>
            <span className="m-bio-desc">insegna Discipline Plastiche ed Educazione Visiva presso l&apos;Istituto Statale d&apos;Arte di Giarre, nel &apos;75 al Liceo Artistico di Catania, nel &apos;77 al Liceo Artistico di Genova, nel &apos;86 all&apos;Istituto d&apos;Arte di Modena e nel &apos;96 al Liceo Artistico di Bologna.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1974</span>
            <span className="m-bio-desc">vince il Concorso Nazionale per la realizzazione di un&apos;Opera Pubblica, indetto dalla Provincia di Milano.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1975</span>
            <span className="m-bio-desc">partecipa alla Quadriennale di Roma, aperta ai giovani artisti e alle nuove tendenze delle arti figurative.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1977</span>
            <span className="m-bio-desc">vince il Concorso per la realizzazione di un&apos;Opera Pubblica, indetto dalla Soprintendenza per i beni Ambientali e Artistici della Basilicata.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1979</span>
            <span className="m-bio-desc">inizia una ricerca plastica sui grandi temi della &ldquo;figurazione simbolica&rdquo; in scultura, realizzando modelli in bronzo o in pietra, da ingrandire e collocare in spazi all&apos;aperto.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1986</span>
            <span className="m-bio-desc">in continuità con la ricerca degli anni precedenti, realizza un ciclo di opere &ldquo;astratto-geometriche&rdquo; da ingrandire in travertino e collocare in spazi all&apos;aperto.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1998</span>
            <span className="m-bio-desc">avvia un ciclo di opere &ldquo;simbolico-figurative&rdquo; e &ldquo;astratto-geometriche&rdquo;, in ottone lavorato a freddo, che sono la summa di una ricerca estetica, nel solco della tradizione e innovazione del linguaggio plastico.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">2004</span>
            <span className="m-bio-desc">scrive un &ldquo;Saggio monografico&rdquo; sui saperi dell&apos;arte e sull&apos;arte della scultura. Finito di scrivere nel 2014, è pubblicato da Claudio Grenzi Editore nel 2023.</span>
          </div>

        </div>
      </div>
    </div>
  )
}
