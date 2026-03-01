import MobileOpereGallery from '../MobileOpereGallery'
import { dcImages } from '@/data/galleries'

const sections = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/m/esperienze-giovanili-1964-1977' },
  { label: 'Astrazioni Simboliche 1978–1985', href: '/m/astrazioni-simboliche-1978-1985' },
  { label: 'Geometrie Elementari 1986–1997', href: '/m/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
]

export default function Page() {
  return (
    <MobileOpereGallery
      title="Disegni Collage 1989–2003"
      subtitle="Disegni e collage su carta"
      images={dcImages}
      sectionLinks={sections}
    />
  )
}
