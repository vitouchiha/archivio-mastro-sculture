import MobileOpereGallery from '../MobileOpereGallery'
import { egImages, egFeatured } from '@/data/galleries'
import { extendedDescriptions } from '@/data/extended_descriptions'

const sections = [
  { label: 'Astrazioni Simboliche 1978–1985', href: '/m/astrazioni-simboliche-1978-1985' },
  { label: 'Geometrie Elementari 1986–1997', href: '/m/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti I', href: '/m/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti II', href: '/m/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/m/1989-2003-disegni-collage' },
]

export default function Page() {
  // Solo la prima immagine ha info complete mockate. Combino i dati estratti per tutte le immagini.
  const captions = egImages.map((_, i) => {
    if (i === 0) {
       return { 
         title: egFeatured.title, 
         year: egFeatured.year, 
         material: egFeatured.material, 
         dimensions: egFeatured.dimensions, 
         code: egFeatured.code,
         description: extendedDescriptions.eg[1]?.description || undefined
       };
    }
    return { title: `Opera ${i + 1}`, description: extendedDescriptions.eg[i + 1]?.description || undefined };
  });

  return (
    <MobileOpereGallery
      title="Esperienze Giovanili 1964–1977"
      subtitle="Sculture e plastiche del periodo giovanile"
      images={egImages}
      captions={captions}
      sectionLinks={sections}
    />
  )
}