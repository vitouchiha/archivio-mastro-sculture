import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

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
      <head>
        {/* The WordPress page injects its own CSS correctly via our script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
                var pathname = window.location.pathname;
                if (isMobile && !pathname.startsWith('/m') && !pathname.startsWith('/_next') && !pathname.startsWith('/en')) {
                  var mobilePath = '/m' + (pathname === '/' ? '' : pathname);
                  window.location.replace(mobilePath);
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <main id="content">{children}</main>
      </body>
    </html>
  )
}
