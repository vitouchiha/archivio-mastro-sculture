'use client'
import MobileOpereGallery from '../MobileOpereGallery'
import { pgImages } from '@/data/galleries'
import { descriptions, parseCaptionFromRaw } from '@/data/descriptions'
import { extendedDescriptions } from '@/data/extended_descriptions'

const sections = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/m/esperienze-giovanili-1964-1977' },
  { label: 'Astrazioni Simboliche', href: '/m/astrazioni-simboliche-1978-1985' },
  { label: 'Geometrie Elementari 1986–1997', href: '/m/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/m/1989-2003-disegni-collage' },
]

export default function MobileGallery() {
  const captions = pgImages.map((_, i) =>
    parseCaptionFromRaw(descriptions.pg[i + 1], extendedDescriptions.pg[i + 1]?.description)
  )

  return (
    <MobileOpereGallery
      title="1964–2014–2024"
      subtitle="ALTRE OPERE ALTRE COSE"
      bannerSrc="/images/PGT2.jpg"
      sectionDescription="In questa foto-raccolta, oltre a nuove opere in archivio, troveranno spazio altre esperienze professionali e di laboratorio, quali la fotografia, la ceramica, il designer ed altre attivit&#xE0; progettuali."
      images={pgImages}
      captions={captions}
      sectionLinks={sections}
    />
  )
}
