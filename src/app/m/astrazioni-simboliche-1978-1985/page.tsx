import MobileOpereGallery from '../MobileOpereGallery'
import { asImages } from '@/data/galleries'

const sections = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/m/esperienze-giovanili-1964-1977' },
  { label: 'Geometrie Elementari 1986–1997', href: '/m/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/m/1989-2003-disegni-collage' },
]

export default function Page() {
  return (
    <MobileOpereGallery
      title="Astrazioni Simboliche 1978–1985"
      subtitle="Sculture astratte e simboliche"
      images={asImages}
      sectionLinks={sections}
    />
  )
}
