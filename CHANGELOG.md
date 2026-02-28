# Changelog

Tutte le modifiche rilevanti a questo progetto sono documentate in questo file.

Il formato segue [Keep a Changelog](https://keepachangelog.com/it/1.0.0/),
e il progetto adotta il [Semantic Versioning](https://semver.org/lang/it/).

---

## [Unreleased]

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
