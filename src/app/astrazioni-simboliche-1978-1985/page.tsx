import GalleryPage from '@/components/GalleryPage'
import { asImages, asFeatured, navLinks } from '@/data/galleries'

export const metadata = {
  title: 'Astrazioni Simboliche 1978–1985 | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <GalleryPage
      yearRange="1978 – 1985"
      title="Astrazioni Simboliche"
      description="Sono progetti e modelli in bronzo per grandi sculture all'aperto. Le loro tematiche plastiche si riferiscono ad alcuni archetipi della figurazione simbolica: l'idea di «Fertilità e Maternità», del «Maschile e del Femminile», della «Rigenerazione e della Rinascita», le «Maschere del Sacro» e altre simbologie e figurazioni nella storia e nel racconto della scultura."
      images={asImages}
      featured={asFeatured}
      navLinks={navLinks.filter((l) => l.href !== '/astrazioni-simboliche-1978-1985')}
      currentHref="/astrazioni-simboliche-1978-1985"
    />
  )
}
