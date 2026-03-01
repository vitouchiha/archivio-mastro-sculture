import './mobile.css'
import MobileHeader from './MobileHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Archivio Mastro Sculture',
  description: 'Archivio delle opere plastiche, sculture e disegni collage di Oronzo Mastro – Bologna.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-page">
      <MobileHeader />
      <main>{children}</main>
      <footer className="m-footer">
        <div className="m-footer-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/cropped-logo3.png" alt="Archivio Mastro Sculture" />
        </div>
        <div className="m-footer-info">
          <strong>Archivio Mastro Sculture</strong>
          <span>Viale A. Oriani 36 &mdash; 40137 Bologna</span>
          <a href="mailto:mastroronzo@gmail.com">mastroronzo@gmail.com</a>
          <span className="m-footer-cf">C.F. MSTRNZ49T30E205O</span>
        </div>
        <div className="m-footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
        <div className="m-footer-bottom">
          <a href="https://www.archiviomastrosculture.it" className="m-footer-desktop">Versione desktop →</a>
          <span>&copy; {new Date().getFullYear()} Archivio Mastro Sculture</span>
        </div>
      </footer>
    </div>
  )
}
