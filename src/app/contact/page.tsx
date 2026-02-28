import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contatti | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <div className="contact-page">
      <h1>Contatti</h1>
      <p className="subtitle">Archivio Mastro Sculture &ndash; � Bologna</p>

      <ContactForm />

      <div className="contact-info">
        <p>
          <strong>Archivio Mastro Sculture</strong>
          <br />
          Viale A. Oriani 36, 40137 Bologna
          <br />
          Email: <a href="mailto:mastroronzo@gmail.com">mastroronzo@gmail.com</a>
          <br />
          C.F. MSTRNZ49T30E205O
        </p>
        <p><a href="/privacy-policy">Privacy Policy</a></p>
      </div>
    </div>
  )
}
