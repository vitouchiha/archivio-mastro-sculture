import MobileOpereGallery from '../MobileOpereGallery'
import { geImages } from '@/data/galleries'
import { descriptions, parseCaptionFromRaw } from '@/data/descriptions'
import { extendedDescriptions } from '@/data/extended_descriptions'

const sections = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/m/esperienze-giovanili-1964-1977' },
  { label: 'Astrazioni Simboliche 1978–1985', href: '/m/astrazioni-simboliche-1978-1985' },
  { label: 'Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/m/1989-2003-disegni-collage' },
]

export default function Page() {
  const captions = geImages.map((_, i) =>
    parseCaptionFromRaw(descriptions.ge[i + 1], extendedDescriptions.ge?.[i + 1]?.description)
  );

  return (
    <MobileOpereGallery
      title="Geometrie Elementari 1986–1997"
      subtitle="Sculture geometriche e forme elementari"
      images={geImages}
      captions={captions}
      sectionLinks={sections}
    />
  )
}