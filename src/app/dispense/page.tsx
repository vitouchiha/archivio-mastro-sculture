import TextPage from '@/components/TextPage'

export const metadata = {
  title: 'Dispense | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <TextPage
      banner="/images/dispensa.jpg"
      bannerAlt="Dispense"
      title="Dispense"
    >
      <div className="bio-narrative">
        <p>
          Spazio riservato ad osservazioni, note visive ed altre esperienze sia lavorative
          legate alla didattica, al mondo della scuola, sia creative e di laboratorio
          quali la ceramica, la fotografia e altre attività progettuali.
        </p>
        <p style={{ color: '#aaa', fontStyle: 'italic' }}>
          Contenuti in aggiornamento.
        </p>
      </div>
    </TextPage>
  )
}
