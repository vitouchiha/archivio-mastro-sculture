export default function MobileContact() {
  return (
    <div className="m-contact-section">
      <h1>Contatti</h1>
      <p>Per informazioni sulle opere, richieste di acquisizione o collaborazioni, è possibile contattare l&apos;Archivio Mastro Sculture tramite il modulo online.</p>
      <a
        href="/contact"
        style={{
          display: 'inline-block',
          marginTop: '16px',
          padding: '14px 28px',
          background: '#14171c',
          color: '#fff',
          borderRadius: '4px',
          fontWeight: 700,
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Apri il modulo di contatto
      </a>
      <p style={{ marginTop: '28px', fontSize: '0.8rem', color: '#666' }}>
        Il modulo completo è disponibile nella versione desktop del sito.
      </p>
    </div>
  )
}
