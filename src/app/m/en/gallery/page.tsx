'use client'
import MobileOpereGallery from '../../MobileOpereGallery'
import { pgImages } from '@/data/galleries'
import { descriptions, parseCaptionFromRaw } from '@/data/descriptions'
import { extendedDescriptions } from '@/data/extended_descriptions'

const sections = [
  { label: 'Early Experiences 1964–1977', href: '/m/en/esperienze-giovanili-1964-1977' },
  { label: 'Symbolic Abstractions', href: '/m/en/astrazioni-simboliche-1978-1985' },
  { label: 'Elementary Geometries 1986–1997', href: '/m/en/geometrie-elementari-1986-1997' },
  { label: 'Figurations & Stories I', href: '/m/en/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurations & Stories II', href: '/m/en/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Drawings & Collages 1989–2003', href: '/m/en/1989-2003-disegni-collage' },
]

export default function MobileGalleryEN() {
  const captions = pgImages.map((_, i) =>
    parseCaptionFromRaw(descriptions.pg[i + 1], extendedDescriptions.pg[i + 1]?.description)
  )

  return (
    <MobileOpereGallery
      title="1964–2014–2024"
      subtitle="OTHER WORKS, OTHER THINGS"
      bannerSrc="/images/PGT2.jpg"
      sectionDescription="In this photo collection, in addition to new works in the archive, there will be space for other professional and workshop experiences, such as photography, ceramics, design and other project activities."
      images={pgImages}
      captions={captions}
      sectionLinks={sections}
    />
  )
}
