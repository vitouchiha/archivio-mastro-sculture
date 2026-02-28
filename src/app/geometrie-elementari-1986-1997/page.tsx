import GalleryPage from '@/components/GalleryPage'
import { geImages, geFeatured, navLinks } from '@/data/galleries'

export const metadata = {
  title: 'Geometrie Elementari 1986–1997 | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <GalleryPage
      yearRange="1986 – 1997"
      title="Geometrie Elementari"
      description="In continuità con le ricerche plastiche degli anni '70 e '80, queste opere sono studi per sculture in pietra o in bronzo, pensate per grandi spazi all'aperto. Ancora più astratte e lineari delle precedenti, cercano, nella purezza e bellezza del segno geometrico, le «geometrie elementari», l'«evocativo», gli «universali» nel racconto dei segni e dei simboli della figurazione."
      images={geImages}
      featured={geFeatured}
      navLinks={navLinks.filter((l) => l.href !== '/geometrie-elementari-1986-1997')}
      currentHref="/geometrie-elementari-1986-1997"
    />
  )
}
