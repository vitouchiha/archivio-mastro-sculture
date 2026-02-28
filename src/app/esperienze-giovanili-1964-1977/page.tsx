import GalleryPage from '@/components/GalleryPage'
import { egImages, egFeatured, navLinks } from '@/data/galleries'

export const metadata = {
  title: 'Esperienze Giovanili 1964–1977 | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <GalleryPage
      yearRange="1964 – 1977"
      title="Esperienze Giovanili"
      description="Sono opere in legno, in ceramica e in bronzo, realizzate negli anni delle prime esperienze professionali e artistiche. Raccontano un vissuto creativo aperto all'arte della ceramica, della lavorazione del legno e del metallo."
      images={egImages}
      featured={egFeatured}
      navLinks={navLinks.filter((l) => l.href !== '/esperienze-giovanili-1964-1977')}
      currentHref="/esperienze-giovanili-1964-1977"
    />
  )
}
