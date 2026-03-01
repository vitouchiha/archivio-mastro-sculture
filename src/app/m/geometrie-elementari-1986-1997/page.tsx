import MobileOpereGallery from '../MobileOpereGallery'
import { geImages, geFeatured } from '@/data/galleries'

const sections = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/m/esperienze-giovanili-1964-1977' },
  { label: 'Astrazioni Simboliche 1978–1985', href: '/m/astrazioni-simboliche-1978-1985' },
  { label: 'Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/m/1989-2003-disegni-collage' },
]

export default function Page() {
  return (
    <MobileOpereGallery
      title="Geometrie Elementari 1986–1997"
      subtitle="Sculture geometriche e forme elementari"
      images={[geFeatured.src, ...geImages]}
      captions={[{ title: geFeatured.title, year: geFeatured.year, material: geFeatured.material, dimensions: geFeatured.dimensions, code: geFeatured.code }]}
      sectionLinks={sections}
    />
  )
}