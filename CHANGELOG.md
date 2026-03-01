# Changelog

Tutte le modifiche rilevanti a questo progetto sono documentate in questo file.

Il formato segue [Keep a Changelog](https://keepachangelog.com/it/1.0.0/),
e il progetto adotta il [Semantic Versioning](https://semver.org/lang/it/).

---

## [Unreleased]

---

## [1.3.2] – 2026-03-01

### Aggiunto
- **Striscia opere dark red** nella home mobile — 5 immagini in cornice bianca su sfondo `#6c0001` con titoli sezione, scorrimento orizzontale, link alle gallerie
- **Sezione NOVITÀ** nella home mobile — copertina libro `libro_300px.jpg` + testo con badge, titolo "MASTRO SCULTURE", sottotitolo e descrizione del volume
- **Sezione citazione** nella home mobile — immagine panoramica `riquadroHP_4.jpg` con overlay scuro, heading "TUTTO SUBITO E OGNI COSA A SUO TEMPO.", tre paragrafi in corsivo, firma "Oronzo Mastro"

### Modificato
- **Immagini gallerie in alta qualità** — tutte e 6 le gallerie opere ora usano le immagini HQ X-series dalla root `/images/` invece delle versioni ridotte nelle sottocartelle:
  - Esperienze Giovanili: `EGX01.jpg`–`EGX25.jpg` (nomi irregolari preservati)
  - Astrazioni Simboliche: `01ASX.jpg`–`28ASX.jpg`
  - Geometrie Elementari: `GEX01.jpg`–`GEX28.jpg` (inclusi `GEX18B`, `GEX27B`)
  - Figurazioni Racconti I: `FRX01.jpg`–`FRX28.jpg`
  - Figurazioni Racconti II: `FX01.jpg`–`FX28.jpg`
  - Disegni Collage: `DCX01.jpg`–`DCX28.jpg`
- Card grid home mobile aggiornate con le stesse immagini HQ
- Gallery pages: rimossa duplicazione dell'immagine in evidenza (era preposta a un array che già includeva la stessa immagine)
- `galleries.ts` riscritto con array HQ uniformi; featured srcs aggiornati alla root

### Corretto
- Prima immagine duplicata nelle gallerie (featured + images[0] coincidevano dopo aggiornamento HQ)

---

## [1.3.1] – 2026-03-01

### Aggiunto
- **Descrizioni gallerie opere mobile** — primo scatto con titolo, anno, materiale, dimensioni e codice catalogo sotto il viewer
- **Immagine in evidenza** preposta come prima foto in tutte le 6 gallerie opere (da `egFeatured`, `asFeatured`, ecc.)
- Lightbox con didascalia completa: titolo opera, anno, materiale, dimensioni, codice
- Footer mobile completo: logo, indirizzo (Viale A. Oriani 36, Bologna), email `mastroronzo@gmail.com`, C.F., icone social Facebook e Instagram, link versione desktop

### Modificato
- Hero home mobile → `Home10.png` (foto gruppo sculture, immagine identitaria principale)
- Thumbnails gallerie: da 4 a 3 colonne (immagini più grandi e leggibili)
- Viewer info area: mostra titolo/anno/materiale quando disponibile, altrimenti numero opera
- Rimossa la barra "Stai vedendo la versione mobile" (invadente, rimpiazzata da link nel footer)
- Footer completamente riscritto con layout colonnare, social SVG, link desktop

### Corretto
- Encoding errato in tutti i titoli gallerie mobile (`â€"` → `–`, en-dash U+2013)
- Rimossa bandiera UK dalla nav drawer (la versione mobile EN non esiste sul sito `.eu`)
- Encoding errato in sezione label dei menù "Altre sezioni"

---

## [1.3.0] – 2026-03-01

### Aggiunto
- **Sito mobile dedicato** a `/m/*` — 15 pagine ottimizzate per smartphone
- `middleware.ts` — Edge middleware con User-Agent detection, redirect automatico mobile → `/m/`
- `MobileHeader.tsx` — sticky header beige con hamburger + drawer fullscreen (tutte le sezioni/pagine)
- `MobileOpereGallery.tsx` — viewer riutilizzabile con prev/next, grid miniature, lightbox touch
- 6 gallerie opere mobile con viewer + lightbox
- Photo gallery mobile (24 immagini, grid 2 colonne)
- Pagine mobile: presentazione, biografia, news, contatti, dispense, privacy-policy
- Google Fonts: Poppins (body) + Montserrat 700 (headings/nav) nel sito mobile
- Pagine `/en/*` i18n per Presentazione e Biografia in inglese

### Modificato
- `next.config.js` — rimosso `output: 'export'` (incompatibile con middleware); il sito ora richiede runtime serverless (Vercel / Next.js standalone)
- `mobile.css` — design system allineato al sito originale: `--header-bg: #ebebe9`, `--accent: #a07427`, `--secondary: #6c0001`, font Poppins/Montserrat
- Logo mobile aggiornato a `cropped-logo3.png` (identico all'originale)
- Home mobile hero: immagine opera reale in sostituzione del logo come cover

### Corretto
- Script JS della gallery principale iniettati correttamente; immagine iniziale caricata senza attendere DOMContentLoaded
- Percorsi immagini relative per barra rossa verticale gallery
- Navigation link i18n reindirizzati correttamente alle pagine italiane

---

## [1.2.3] – 2026-03-01

---

## [1.1.0] – 2026-02-28

---

## [1.1.0] – 2025-03-01

### Aggiunto
- 7 nuove pagine: Biografia, Presentazione, Contatti, Gallery, News, Dispense, Privacy Policy
- Componente `TextPage` per pagine con banner e contenuto testuale
- Componente `ContactForm` (form mailto) per la pagina Contatti
- Dropdown nel menu di navigazione desktop per le gallerie
- Menu hamburger per la navigazione mobile
- Galleria **Presenze Galleristiche 2024** (24 opere, `/presenze-galleristiche-mostre-2024`)
- Download di ~60 immagini aggiuntive (banner bio, presentazione, dispense, PG01-24)

### Modificato
- `Header.tsx` riscritto con dropdown gallerie e supporto mobile
- Navigazione aggiornata a 15 pagine totali

---

## [1.0.0] – 2025-02-28

### Aggiunto
- Progetto Next.js 15.1.7 con `output: 'export'` (sito 100% statico)
- Home page con slider hero automatico (HP01B–HP04B) e griglia sezioni
- 8 gallerie con componente `GalleryPage` (griglia masonry + lightbox + navigazione)
  - Esperienze Giovanili 1964–1977 (25 opere)
  - Astrazioni Simboliche 1978–1985 (28 opere)
  - Geometrie Elementari 1986–1997 (28 opere)
  - Figurazioni Racconti 1998–2004 parte prima (28 opere)
  - Figurazioni Racconti 1998–2004 parte seconda (28 opere)
  - 1989–2003 Disegni Collage (28 opere)
- Componente `Lightbox` fullscreen con navigazione da tastiera (←/→/Esc)
- Componente `Header` con logo e link di navigazione
- Componente `Footer`
- `src/data/galleries.ts` con tutti gli array di immagini e metadati opere featured
- Script PowerShell `download-images.ps1` per il download di ~135 immagini dal WordPress originale
- Configurazione Tailwind CSS + CSS globale fedele al design originale
- Repository git inizializzato con primo commit

[Unreleased]: https://github.com/vitouchiha/archivio-mastro-sculture/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/vitouchiha/archivio-mastro-sculture/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/vitouchiha/archivio-mastro-sculture/releases/tag/v1.0.0
