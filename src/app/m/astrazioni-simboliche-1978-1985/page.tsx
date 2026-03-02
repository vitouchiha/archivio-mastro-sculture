import MobileOpereGallery from '../MobileOpereGallery'
import { asImages } from '@/data/galleries'
import { descriptions, parseCaptionFromRaw } from '@/data/descriptions'
import { extendedDescriptions } from '@/data/extended_descriptions'

const sections = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/m/esperienze-giovanili-1964-1977' },
  { label: 'Geometrie Elementari 1986–1997', href: '/m/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/m/1989-2003-disegni-collage' },
]

export default function Page() {
  const captions = asImages.map((_, i) =>
    parseCaptionFromRaw(descriptions.as[i + 1], extendedDescriptions.as[i + 1]?.description)
  );

  return (
    <MobileOpereGallery
      title="Astrazioni Simboliche 1978–1985"
      subtitle="Sculture astratte e simboliche"
      images={asImages}
      captions={captions}
      sectionLinks={sections}
    />
  )
}