import MobileOpereGallery from '../MobileOpereGallery'
import { dcImages } from '@/data/galleries'
import { descriptions, parseCaptionFromRaw } from '@/data/descriptions'
import { extendedDescriptions } from '@/data/extended_descriptions'
import { subImages, sectionDescriptions } from '@/data/subimages'

const sections = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/m/esperienze-giovanili-1964-1977' },
  { label: 'Astrazioni Simboliche 1978–1985', href: '/m/astrazioni-simboliche-1978-1985' },
  { label: 'Geometrie Elementari 1986–1997', href: '/m/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
]

export default function Page() {
  const captions = dcImages.map((_, i) =>
    parseCaptionFromRaw(descriptions.dc[i + 1], extendedDescriptions.dc?.[i + 1]?.description)
  );

  return (
    <MobileOpereGallery
      title="Disegni Collage 1989–2003"
      subtitle="Disegni e collage su carta"
      bannerSrc="/wp-images/06_DISEGNI_TESTATA.jpg"
      sectionDescription={sectionDescriptions.dc}
      images={dcImages}
      captions={captions}
      subImages={subImages.dc}
      sectionLinks={sections}
    />
  )
}