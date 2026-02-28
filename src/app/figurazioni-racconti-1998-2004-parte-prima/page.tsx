import GalleryPage from '@/components/GalleryPage'
import { frImages, frFeatured, navLinks } from '@/data/galleries'

export const metadata = {
  title: 'Figurazioni Racconti 1998–2004 Parte Prima | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <GalleryPage
      yearRange="1998 – 2004"
      title="Figurazioni Racconti – parte prima"
      description="Piccole, leggere, quasi senza corpo, sono racconti per immagini, nel linguaggio senza tempo, universale della scultura. Realizzate in profilati e lamine di ottone lavorato a sbalzo, alcune sono figurazioni «astratto-geometriche», altre, le più descrittive, le più figurative, sono «pensieri, suggestioni, emozioni» diventate scultura."
      images={frImages}
      featured={frFeatured}
      navLinks={navLinks.filter((l) => l.href !== '/figurazioni-racconti-1998-2004-parte-prima')}
      currentHref="/figurazioni-racconti-1998-2004-parte-prima"
    />
  )
}
