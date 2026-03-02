import MobileOpereGallery from '../MobileOpereGallery'
import { asImages, asFeatured } from '@/data/galleries'
import { extendedDescriptions } from '@/data/extended_descriptions'

const sections = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/m/esperienze-giovanili-1964-1977' },
  { label: 'Geometrie Elementari 1986–1997', href: '/m/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/m/1989-2003-disegni-collage' },
]

export default function Page() {
  const captions = asImages.map((_, i) => {
    if (i === 0) {
       return { 
         title: asFeatured.title, 
         year: asFeatured.year, 
         material: asFeatured.material, 
         dimensions: asFeatured.dimensions, 
         code: asFeatured.code,
         description: extendedDescriptions.as[1]?.description || undefined
       };
    }
    return { title: `Opera ${i + 1}`, description: extendedDescriptions.as[i + 1]?.description || undefined };
  });

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