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
      <div className="m-desktop-link">
        Stai vedendo la versione mobile —{' '}
        <a href="https://www.archiviomastrosculture.it">Versione desktop</a>
      </div>
      <footer className="m-footer">
        © Archivio Mastro Sculture — Bologna
      </footer>
    </div>
  )
}
