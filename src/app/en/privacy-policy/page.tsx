import TextPage from '@/components/TextPage'

export const metadata = {
  title: 'Privacy Policy | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <TextPage title="Privacy Policy">
      <div className="bio-narrative">
        <p>
          Ai sensi del Regolamento UE 2016/679 (GDPR), il titolare del trattamento dei dati personali è:
        </p>
        <p>
          <strong>Archivio Mastro Sculture</strong><br />
          Viale A. Oriani 36, 40137 Bologna<br />
          Email: <a href="mailto:mastroronzo@gmail.com">mastroronzo@gmail.com</a><br />
          C.F. MSTRNZ49T30E205O
        </p>
        <p>
          I dati personali forniti tramite il modulo di contatto (nome, cognome, indirizzo email)
          sono utilizzati esclusivamente per rispondere alle richieste pervenute e non vengono ceduti
          a terzi né utilizzati per finalità di marketing.
        </p>
        <p>
          I dati sono conservati per il tempo strettamente necessario a gestire la comunicazione e
          in ogni caso non oltre 24 mesi.
        </p>
        <p>
          L&apos;utente ha il diritto di accedere ai propri dati, chiederne la rettifica o la
          cancellazione, scrivendo all&apos;indirizzo email sopra indicato.
        </p>
        <p>
          Il sito non utilizza cookie di profilazione. Possono essere presenti cookie tecnici
          strettamente necessari al funzionamento delle pagine.
        </p>
      </div>
    </TextPage>
  )
}
