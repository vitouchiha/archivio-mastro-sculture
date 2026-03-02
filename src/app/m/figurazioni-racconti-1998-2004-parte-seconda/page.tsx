import MobileOpereGallery from '../MobileOpereGallery'
import { fImages } from '@/data/galleries'
import { descriptions, parseCaptionFromRaw } from '@/data/descriptions'
import { extendedDescriptions } from '@/data/extended_descriptions'

const sections = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/m/esperienze-giovanili-1964-1977' },
  { label: 'Astrazioni Simboliche 1978–1985', href: '/m/astrazioni-simboliche-1978-1985' },
  { label: 'Geometrie Elementari 1986–1997', href: '/m/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Disegni Collage 1989–2003', href: '/m/1989-2003-disegni-collage' },
]

export default function Page() {
  const captions = fImages.map((_, i) =>
    parseCaptionFromRaw(descriptions.fp2[i + 1], extendedDescriptions.fp2?.[i + 1]?.description)
  );

  return (
    <MobileOpereGallery
      title="Figurazioni Racconti 1998–2004 – Parte Seconda"
      subtitle="Sculture e plastiche figurative"
      images={fImages}
      captions={captions}
      sectionLinks={sections}
    />
  )
}