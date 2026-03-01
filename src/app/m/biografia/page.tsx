import Link from 'next/link'

export default function MobileBiografia() {
  return (
    <div className="m-text-page">
      <h1>Biografia</h1>

      <p><strong>Di professione insegnante, scultore per vocazione</strong>, Oronzo Mastro nasce il 30 dicembre 1949 a Grottaglie (TA), centro pugliese rinomato per la produzione di ceramiche artistiche e artigianali. Il padre Cosimo, maestro ceramista, lo porta con sé in bottega fin dagli anni delle elementari.</p>

      <p>Dal 1961 al 1967 frequenta l&apos;Istituto Statale d&apos;Arte per la Ceramica &ldquo;V. Calò&rdquo; di Grottaglie, vincendo nel 1964 il primo premio di scultura. Nel 1967 si iscrive all&apos;Accademia di Belle Arti di Firenze, conseguendo il diploma di scultura nel 1971.</p>

      <p>Tra il &apos;72 e il &apos;74 realizza varie opere tra cui un modello con cui nel 1977 vince il Concorso Nazionale della Sovraintendenza per i Beni Ambientali ed Artistici della Basilicata. L&apos;opera in bronzo <em>Primo monolite</em> è esposta nei giardini del palazzo degli Uffici Regionali del Tesoro di Matera.</p>

      <p>Nel 1974 partecipa alla Quadriennale d&apos;Arte di Roma, edizione 1975, con un trittico dal titolo <em>Ritratti del Potere</em>, segnalato tra le opere più significative della rassegna.</p>

      <p>Trasferitosi a Genova nel 1977, insegna Figura e Ornato Modellato al Liceo Artistico &ldquo;P. Klee&rdquo;. In questo decennio realizza sculture simbolico-figurative in bronzo e poliestere, progettate per grandi spazi all&apos;aperto.</p>

      <p>Nel 1986 si stabilisce a <strong>Bologna</strong> e inizia a insegnare all&apos;Istituto Statale d&apos;Arte &ldquo;A. Venturi&rdquo; di Modena. Riprende la scultura realizzando modelli geometrici ed essenziali da ingrandire in travertino, e inizia a progettare opere in ottone di piccole dimensioni.</p>

      <p>Negli anni Novanta e Duemila porta a termine il grande ciclo di sculture in ottone lavorato a freddo — <em>figurazioni, racconti</em> — opere leggere, lineari, quasi disegni sospesi nell&apos;aria. Parallelamente prosegue i disegni e i collage su carta.</p>

      <p>L&apos;intero archivio delle sue opere plastiche, sculture e disegni è oggi conservato e documentato in questo archivio digitale.</p>

      <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #ddd' }}>
        <Link href="/m/presentazione" style={{ color: '#a07427', fontWeight: 700, fontSize: '0.85rem' }}>
          → Leggi la Presentazione dell&apos;artista
        </Link>
      </div>
    </div>
  )
}
