export default function MobileNews() {
  return (
    <div className="m-text-page">
      <h1>News</h1>
      <p>Segui le ultime notizie e aggiornamenti dall&apos;Archivio Mastro Sculture: nuove acquisizioni, mostre e presenze galleristiche.</p>
      <a
        href="/news"
        style={{
          display: 'inline-block',
          marginTop: '16px',
          padding: '12px 24px',
          background: '#14171c',
          color: '#fff',
          borderRadius: '4px',
          fontWeight: 700,
          fontSize: '0.82rem',
          textTransform: 'uppercase',
        }}
      >
        Visualizza tutte le news
      </a>
    </div>
  )
}
