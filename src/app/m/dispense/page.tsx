export default function MobileDispense() {
  return (
    <div className="m-text-page">
      <h1>Dispense</h1>
      <p>Materiali didattici e dispense sull&apos;arte plastica e la scultura, a cura di Oronzo Mastro.</p>
      <a
        href="/dispense"
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
        Visualizza le dispense
      </a>
    </div>
  )
}
