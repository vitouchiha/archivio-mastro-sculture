// Images live in public/images/ (downloaded from the original WordPress upload folder)
// Original source: https://www.archiviomastrosculture.it/wp-content/uploads/

export const navLinks = [
  { label: 'Esperienze Giovanili 1964–1977', href: '/esperienze-giovanili-1964-1977' },
  { label: 'Astrazioni Simboliche 1978–1985', href: '/astrazioni-simboliche-1978-1985' },
  { label: 'Geometrie Elementari 1986–1997', href: '/geometrie-elementari-1986-1997' },
  { label: 'Figurazioni Racconti 1998–2004 I', href: '/figurazioni-racconti-1998-2004-parte-prima' },
  { label: 'Figurazioni Racconti 1998–2004 II', href: '/figurazioni-racconti-1998-2004-parte-seconda' },
  { label: 'Disegni Collage 1989–2003', href: '/1989-2003-disegni-collage' },
  { label: 'Presenze Galleristiche 2024', href: '/presenze-galleristiche-mostre-2024' },
]

// ---- Esperienze Giovanili ----
// HQ X-series (root /images/): irregular filenames: EGX02-1, EGX03-1, EGX04-1, EGX092
export const egImages = [
  '/images/EGX01.jpg',
  '/images/EGX02-1.jpg',
  '/images/EGX03-1.jpg',
  '/images/EGX04-1.jpg',
  '/images/EGX05.jpg',
  '/images/EGX06.jpg',
  '/images/EGX07.jpg',
  '/images/EGX08.jpg',
  '/images/EGX092.jpg',
  '/images/EGX10.jpg',
  '/images/EGX11.jpg',
  '/images/EGX12.jpg',
  '/images/EGX13.jpg',
  '/images/EGX14.jpg',
  '/images/EGX15.jpg',
  '/images/EGX16.jpg',
  '/images/EGX17.jpg',
  '/images/EGX18.jpg',
  '/images/EGX19.jpg',
  '/images/EGX20.jpg',
  '/images/EGX21.jpg',
  '/images/EGX22.jpg',
  '/images/EGX23.jpg',
  '/images/EGX24.jpg',
  '/images/EGX25.jpg',
]

export const egFeatured = {
  src: '/images/EGX01.jpg',
  title: 'Mal d\'Africa',
  year: '1964',
  material: 'terracotta patinata',
  dimensions: 'h cm 30, ∅ cm 36',
  code: 'SES a5, n.1',
}

// ---- Astrazioni Simboliche ----
// HQ X-series (root /images/): 01ASX.jpg … 28ASX.jpg
export const asImages = Array.from({ length: 28 }, (_, i) =>
  `/images/${String(i + 1).padStart(2, '0')}ASX.jpg`
)

export const asFeatured = {
  src: '/images/01ASX.jpg',
  title: 'Arco',
  year: '1980',
  material: 'bronzo',
  dimensions: 'h cm 35, l cm 26, p cm 26',
  code: 'OTT a1, n.1',
}

// ---- Geometrie Elementari ----
// HQ X-series (root /images/): GEX01-GEX28 (GEX18B and GEX27B for 18 and 27)
export const geImages = [
  ...Array.from({ length: 17 }, (_, i) => `/images/GEX${String(i + 1).padStart(2, '0')}.jpg`),
  '/images/GEX18B.jpg',
  ...Array.from({ length: 8 }, (_, i) => `/images/GEX${String(i + 19).padStart(2, '0')}.jpg`),
  '/images/GEX27B.jpg',
  '/images/GEX28.jpg',
]

export const geFeatured = {
  src: '/images/GEX01.jpg',
  title: 'Astratto simbolico – due',
  year: '1986–96',
  material: 'poliestere',
  dimensions: 'h cm 51, l cm 42, p cm 15',
  code: 'OTT a7, n.3',
}

// ---- Figurazioni Racconti I ----
// HQ X-series (root /images/): FRX01.jpg … FRX28.jpg
export const frImages = Array.from({ length: 28 }, (_, i) =>
  `/images/FRX${String(i + 1).padStart(2, '0')}.jpg`
)

export const frFeatured = {
  src: '/images/FRX01.jpg',
  title: 'Chiaro di luna',
  year: '1988',
  material: 'ottone',
  dimensions: 'h cm 27, l cm 51, p cm 10',
  code: 'NOV a9, n.11',
}

// ---- Figurazioni Racconti II ----
// HQ X-series (root /images/): FX01.jpg … FX28.jpg
export const fImages = Array.from({ length: 28 }, (_, i) =>
  `/images/FX${String(i + 1).padStart(2, '0')}.jpg`
)

export const fFeatured = {
  src: '/images/FX01.jpg',
  title: 'Astratto simbolico – quattro',
  year: '1999',
  material: 'ottone',
  dimensions: 'h cm 50, l cm 40, p cm 15',
  code: 'NOV a10, n.17',
}

// ---- Disegni Collage ----
// HQ X-series (root /images/): DCX01.jpg … DCX28.jpg
export const dcImages = Array.from({ length: 28 }, (_, i) =>
  `/images/DCX${String(i + 1).padStart(2, '0')}.jpg`
)

export const dcFeatured = {
  src: '/images/DCX01.jpg',
  title: 'Scala',
  year: '1995',
  material: 'matita su carta',
  dimensions: 'h cm 42, l cm 29',
  code: 'NOV a6, n.16',
}

// ---- Gallery – Altre Opere Altre Cose (2024) ----
export const pgImages = Array.from({ length: 24 }, (_, i) =>
  `/images/2024/07/PG${String(i + 1).padStart(2, '0')}.jpg`
)

export const pgFeatured = {
  src: '/images/2024/07/PG01X.jpg',
  title: 'Bottega ceramica Fratelli Mastro',
  year: 'Grottaglie, anni Cinquanta',
  material: 'foto Devincentis',
  dimensions: '',
  code: '',
}
