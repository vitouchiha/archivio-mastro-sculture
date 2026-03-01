import Script from 'next/script';
import GalleryPage from '@/components/GalleryPage'
import { pgImages, pgFeatured, navLinks } from '@/data/galleries'

export const metadata = {
  title: 'Presenze Galleristiche e Mostre 2024 | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <GalleryPage
      yearRange="2024"
      title="Presenze Galleristiche e Mostre"
      description="Documentazione fotografica delle presenze in gallerie d'arte e mostre del 2024. Un percorso espositivo che racconta l'opera di Oronzo Mastro in contesti artistici contemporanei."
      images={pgImages}
      featured={pgFeatured}
      navLinks={navLinks.filter((l) => l.href !== '/presenze-galleristiche-mostre-2024')}
      currentHref="/presenze-galleristiche-mostre-2024"
    />
  )
}
