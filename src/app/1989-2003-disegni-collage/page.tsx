import GalleryPage from '@/components/GalleryPage'
import { dcImages, dcFeatured, navLinks } from '@/data/galleries'

export const metadata = {
  title: 'Disegni Collage 1989–2003 | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <GalleryPage
      yearRange="1989 – 2003"
      title="Disegni Collage"
      description="In questa raccolta di opere grafiche vi sono disegni su temi poi sviluppati in scultura. Esaurito il compito di schizzi, di abbozzi, di disegni preparatori per quelle opere, hanno assunto valenza e significato in un altro racconto, sono diventate un'intera raccolta, la «voce grafica» delle sculture degli anni Novanta e Duemila."
      images={dcImages}
      featured={dcFeatured}
      navLinks={navLinks.filter((l) => l.href !== '/1989-2003-disegni-collage')}
      currentHref="/1989-2003-disegni-collage"
    />
  )
}
