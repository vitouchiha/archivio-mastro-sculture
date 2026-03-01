import MobileOpereGallery from '../MobileOpereGallery'
import { frImages, frFeatured } from '@/data/galleries'

const sections = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/m/esperienze-giovanili-1964-1977' },
  { label: 'Astrazioni Simboliche 1978–1985', href: '/m/astrazioni-simboliche-1978-1985' },
  { label: 'Geometrie Elementari 1986–1997', href: '/m/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/m/1989-2003-disegni-collage' },
]

export default function Page() {
  return (
    <MobileOpereGallery
      title="Figurazioni Racconti 1998–2004 – Parte Prima"
      subtitle="Sculture e plastiche figurative"
      images={[frFeatured.src, ...frImages]}
      captions={[{ title: frFeatured.title, year: frFeatured.year, material: frFeatured.material, dimensions: frFeatured.dimensions, code: frFeatured.code }]}
      sectionLinks={sections}
    />
  )
}