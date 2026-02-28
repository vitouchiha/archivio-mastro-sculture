import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Archivio Mastro Sculture',
  description: 'Archivio delle opere plastiche, sculture e disegni collage di Oronzo Mastro – Bologna.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>
        <Header />
        <main className="main-content" id="content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
