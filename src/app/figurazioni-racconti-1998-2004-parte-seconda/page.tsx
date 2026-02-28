import GalleryPage from '@/components/GalleryPage'
import { fImages, fFeatured, navLinks } from '@/data/galleries'

export const metadata = {
  title: 'Figurazioni Racconti 1998–2004 Parte Seconda | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <GalleryPage
      yearRange="1998 – 2004"
      title="Figurazioni Racconti – parte seconda"
      description="Piccole, leggere, quasi senza corpo, sono racconti per immagini, nel linguaggio senza tempo, universale della scultura. Realizzate in profilati e lamine di ottone lavorato a sbalzo, alcune sono figurazioni «astratto-geometriche», altre, le più descrittive, le più figurative, sono «pensieri, suggestioni, emozioni» diventate scultura."
      images={fImages}
      featured={fFeatured}
      navLinks={navLinks.filter((l) => l.href !== '/figurazioni-racconti-1998-2004-parte-seconda')}
      currentHref="/figurazioni-racconti-1998-2004-parte-seconda"
    />
  )
}
