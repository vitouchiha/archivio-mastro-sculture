import GalleryPage from '@/components/GalleryPage'
import { pgImages, pgFeatured, navLinks } from '@/data/galleries'

export const metadata = {
  title: 'Altre Opere 1964–2024 | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <GalleryPage
      yearRange="1964 – 2024"
      title="Altre Opere – Altre Cose"
      description="In questa foto-raccolta, oltre a nuove opere in archivio, troveranno spazio altre esperienze professionali e di laboratorio, quali la fotografia, la ceramica, il design ed altre attività progettuali."
      images={pgImages}
      featured={pgFeatured}
      navLinks={navLinks.filter((l) => l.href !== '/gallery')}
      currentHref="/gallery"
    />
  )
}
