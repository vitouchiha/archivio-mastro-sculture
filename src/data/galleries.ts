// Images live in public/images/ (downloaded from the original WordPress upload folder)
// Original source: https://www.archiviomastrosculture.it/wp-content/uploads/

export const navLinks = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/esperienze-giovanili-1964-1977' },
  { label: 'Astrazioni Simboliche 1978–1985', href: '/astrazioni-simboliche-1978-1985' },
  { label: 'Geometrie Elementari 1986–1997', href: '/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti 1998–2004 I', href: '/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti 1998–2004 II', href: '/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/1989-2003-disegni-collage' },
]

// ---- Esperienze Giovanili ----
export const egImages = Array.from({ length: 25 }, (_, i) =>
  `/images/2023/01/EG${String(i + 1).padStart(2, '0')}.jpg`
)

export const egFeatured = {
  src: '/images/2023/01/EGX01.jpg',
  title: 'Mal d\'Africa',
  year: '1964',
  material: 'terracotta patinata',
  dimensions: 'h cm 30, ∅ cm 36',
  code: 'SES a5, n.1',
}

// ---- Astrazioni Simboliche ----
export const asImages = Array.from({ length: 28 }, (_, i) =>
  `/images/2023/04/${String(i + 1).padStart(2, '0')}AS.jpg`
)

export const asFeatured = {
  src: '/images/2023/04/01ASXa.jpg',
  title: 'Arco',
  year: '1980',
  material: 'bronzo',
  dimensions: 'h cm 35, l cm 26, p cm 26',
  code: 'OTT a1, n.1',
}

// ---- Geometrie Elementari ----
export const geImages = [
  ...Array.from({ length: 13 }, (_, i) => `/images/2023/04/GE${String(i + 1).padStart(2, '0')}.jpg`),
  `/images/2023/05/GE14.jpg`,
  ...Array.from({ length: 14 }, (_, i) => `/images/2023/04/GE${String(i + 15).padStart(2, '0')}.jpg`),
]

export const geFeatured = {
  src: '/images/2023/04/GEX01.jpg',
  title: 'Astratto simbolico – due',
  year: '1986–96',
  material: 'poliestere',
  dimensions: 'h cm 51, l cm 42, p cm 15',
  code: 'OTT a7, n.3',
}

// ---- Figurazioni Racconti I ----
export const frImages = Array.from({ length: 28 }, (_, i) =>
  `/images/2023/04/FR${String(i + 1).padStart(2, '0')}.jpg`
)

export const frFeatured = {
  src: '/images/2023/04/FRX01a.jpg',
  title: 'Chiaro di luna',
  year: '1988',
  material: 'ottone',
  dimensions: 'h cm 27, l cm 51, p cm 10',
  code: 'NOV a9, n.11',
}

// ---- Figurazioni Racconti II ----
export const fImages = Array.from({ length: 28 }, (_, i) =>
  `/images/2023/05/F${String(i + 1).padStart(2, '0')}.jpg`
)

export const fFeatured = {
  src: '/images/2023/05/FX01a.jpg',
  title: 'Astratto simbolico – quattro',
  year: '1999',
  material: 'ottone',
  dimensions: 'h cm 50, l cm 40, p cm 15',
  code: 'NOV a10, n.17',
}

// ---- Disegni Collage ----
export const dcImages = Array.from({ length: 28 }, (_, i) =>
  `/images/2023/05/DC${String(i + 1).padStart(2, '0')}.jpg`
)

export const dcFeatured = {
  src: '/images/2023/05/DCX01.jpg',
  title: 'Scala',
  year: '1995',
  material: 'matita su carta',
  dimensions: 'h cm 42, l cm 29',
  code: 'NOV a6, n.16',
}
