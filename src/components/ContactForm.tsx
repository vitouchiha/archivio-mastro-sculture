'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent((data.get('oggetto') as string) || 'Contatto dal sito')
    const nome = data.get('nome') as string
    const cognome = data.get('cognome') as string
    const email = data.get('email') as string
    const body = encodeURIComponent(
      `Da: ${nome} ${cognome} <${email}>\n\n${data.get('messaggio')}`
    )
    window.location.href = `mailto:mastroronzo@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <p style={{ color: '#4caf50', fontSize: '0.9rem', lineHeight: 1.7 }}>
        Il tuo client di posta è stato aperto con il messaggio precompilato.
        <br />Se non si apre automaticamente, scrivi direttamente a{' '}
        <a href="mailto:mastroronzo@gmail.com">mastroronzo@gmail.com</a>.
      </p>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Nome
          <input type="text" name="nome" required placeholder="Mario" />
        </label>
        <label>
          Cognome
          <input type="text" name="cognome" required placeholder="Rossi" />
        </label>
      </div>
      <label>
        Indirizzo email
        <input type="email" name="email" required placeholder="mario@esempio.it" />
      </label>
      <label>
        Oggetto
        <input type="text" name="oggetto" placeholder="Informazioni" />
      </label>
      <label>
        Commento o messaggio
        <textarea name="messaggio" required placeholder="Scrivi qui il tuo messaggio…" />
      </label>
      <button type="submit" className="submit-btn">
        Invia messaggio
      </button>
    </form>
  )
}
