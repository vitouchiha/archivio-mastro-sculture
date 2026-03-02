'use client'
import { useState } from 'react'

export default function MobileEnContact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', cognome: '', email: '', oggetto: '', messaggio: '' })

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const body = `Name: ${form.nome} ${form.cognome}\nEmail: ${form.email}\n\n${form.messaggio}`
    window.location.href = `mailto:mastroronzo@gmail.com?subject=${encodeURIComponent(form.oggetto)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="m-contact-section">
      {/* Header */}
      <h1>Contact</h1>

      {/* Info card */}
      <div className="m-contact-card">
        <div className="m-contact-row">
          <span className="m-contact-icon">📍</span>
          <span>Viale A. Oriani 36, 40137 Bologna, Italy</span>
        </div>
        <div className="m-contact-row">
          <span className="m-contact-icon">✉️</span>
          <a href="mailto:mastroronzo@gmail.com">mastroronzo@gmail.com</a>
        </div>
      </div>

      {/* Social */}
      <div className="m-contact-social">
        <a href="https://www.facebook.com/archiviomastrosculture" target="_blank" rel="noopener noreferrer" className="m-contact-social-btn">
          Facebook
        </a>
        <a href="https://www.instagram.com/archiviomastrosculture" target="_blank" rel="noopener noreferrer" className="m-contact-social-btn">
          Instagram
        </a>
      </div>

      {/* Form */}
      <div className="m-contact-form-wrap">
        <h2>Send a message</h2>
        {sent ? (
          <p className="m-contact-sent">Thank you! Your email client has opened with the message pre-filled.</p>
        ) : (
          <form onSubmit={submit} className="m-contact-form">
            <div className="m-contact-row-2">
              <div className="m-contact-field">
                <label>First name *</label>
                <input name="nome" value={form.nome} onChange={handle} required />
              </div>
              <div className="m-contact-field">
                <label>Last name</label>
                <input name="cognome" value={form.cognome} onChange={handle} />
              </div>
            </div>
            <div className="m-contact-field">
              <label>Email *</label>
              <input type="email" name="email" value={form.email} onChange={handle} required />
            </div>
            <div className="m-contact-field">
              <label>Subject *</label>
              <input name="oggetto" value={form.oggetto} onChange={handle} required />
            </div>
            <div className="m-contact-field">
              <label>Message *</label>
              <textarea name="messaggio" value={form.messaggio} onChange={handle} rows={5} required />
            </div>
            <button type="submit" className="m-contact-submit">Send message</button>
            <p className="m-contact-hint">This will open your email client with the message pre-filled.</p>
          </form>
        )}
      </div>

      {/* Desktop link */}
      <div className="m-contact-desktop-note">
        <a href="https://www.archiviomastrosculture.it/contact/" target="_blank" rel="noopener noreferrer">
          Full contact form on desktop site →
        </a>
      </div>
    </div>
  )
}
