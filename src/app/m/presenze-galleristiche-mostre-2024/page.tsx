import MobileOpereGallery from '../MobileOpereGallery'
import { pgImages } from '@/data/galleries'

export default function Page() {
  return (
    <MobileOpereGallery
      title="Presenze Galleristiche & Mostre 2024"
      subtitle="Esposizioni e presenze in gallerie d'arte"
      images={pgImages}
    />
  )
}
