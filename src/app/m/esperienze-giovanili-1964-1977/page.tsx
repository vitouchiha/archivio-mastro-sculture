import MobileOpereGallery from '../MobileOpereGallery'
import { egImages } from '@/data/galleries'
import { descriptions, parseCaptionFromRaw } from '@/data/descriptions'
import { extendedDescriptions } from '@/data/extended_descriptions'
import { subImages, sectionDescriptions } from '@/data/subimages'

const sections = [
  { label: 'Astrazioni Simboliche 1978–1985', href: '/m/astrazioni-simboliche-1978-1985' },
  { label: 'Geometrie Elementari 1986–1997', href: '/m/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/m/1989-2003-disegni-collage' },
]

export default function Page() {
  const captions = egImages.map((_, i) =>
    parseCaptionFromRaw(descriptions.eg[i + 1], extendedDescriptions.eg[i + 1]?.description)
  );

  return (
    <MobileOpereGallery
      title="Esperienze Giovanili 1964–1977"
      subtitle="Sculture e plastiche del periodo giovanile"
      bannerSrc="/wp-images/01_ESPERIENZE-GIOVANILI_TESTATA.jpg"
      sectionDescription={sectionDescriptions.eg}
      images={egImages}
      captions={captions}
      subImages={subImages.eg}
      sectionLinks={sections}
    />
  )
}