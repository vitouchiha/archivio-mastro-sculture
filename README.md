# Archivio Mastro Sculture — Next.js

Ricostruzione in **Next.js** del sito WordPress *Archivio Mastro Sculture*, con **sito mobile dedicato** (`/m/*`) servito automaticamente via redirect middleware e versione desktop identica all'originale.

---

## 🎯 Architettura del Progetto

```
┌─────────────────────────────────────────────────────┐
│                  Edge Middleware                     │
│   User-Agent detection → redirect mobile a /m/*     │
└───────────┬─────────────────────────┬───────────────┘
            │ Desktop                 │ Mobile
     ┌──────▼───────┐          ┌──────▼────────┐
     │  / (Next.js) │          │  /m/ (Next.js)│
     │  Desktop site│          │  Mobile site  │
     │  1:1 WP clone│          │  UI dedicata  │
     └──────────────┘          └───────────────┘
```

### Stack
- **Next.js** (App Router, serverless/edge — **non** static export)
- **React 18** — componenti e stato
- **TypeScript**
- **Tailwind CSS** (configurato, opzionale nel sito desktop)
- **Edge Middleware** — User-Agent detection, redirect mobile automatico
- **Google Fonts** — Poppins + Montserrat (sito mobile)

---

## 📋 Versione Corrente

### v1.4.0 — WpPageShell, Palette Mobile, Gallery Viewer & Bug Fix (2 Marzo 2026)

**Nuove funzionalità:**

- ✅ **`WpPageShell` component** — Componente React in `src/components/WpPageShell.tsx` che incapsula l'intero boilerplate CSS WordPress/Elementor condiviso. Ogni `page.tsx` ora ha solo ~10–20 righe invece di ~1000.
- ✅ **`src/lib/wpBoilerplate.ts`** — Costanti generate automaticamente con la testa CSS condivisa (~51 KB) + funzione `wpHead(postCssFiles[])`. Estratto con `extract-boilerplate.mjs`.
- ✅ **REQ-05 completato** — Nuove sezioni aggiungibili in pochi minuti senza toccare il codice pre-generato.

**Mobile — Palette corretta:**

- ✅ **Rimosso colore oro `#a07427`** — assente nel sito desktop originale; sostituito con rosso `#6c0001` in tutti i punti
- ✅ **`--gray: #777777`** aggiunto come token CSS per testi secondari
- ✅ **Sfondo pagine `#f5f5f5`** (grigio neutro identico al desktop)

**Mobile — Gallery Viewer ridisegnato:**

- ✅ **Frecce prev/next sui lati dell'immagine** — posizione assoluta, sfondo rosso `#6c0001`, forma rettangolare (stile identico desktop)
- ✅ **Cornice bianca immagine** — sfondo bianco + padding attorno alla foto
- ✅ **Barra caption desktop-style** — titolo *corsivo* + anno a sinistra, materiale/dimensioni sotto, codice catalogo in grassetto a destra

**Correzioni:**

- ✅ **Sovrapposizione immagini home mobile** — `globals.css` aveva `height: auto !important` (Phase 1 Elementor fix) che sovrascriveva le altezze fisse di `mobile.css`. Risolto con `!important` su strip, card, thumb e quote bg.

**v1.3.2 (precedente):**
- ✅ Strip opere dark red nella home mobile, sezione NOVITÀ, sezione citazione con overlay
- ✅ Tutte le gallerie con immagini HQ X-series

---

## 🗂️ Struttura Cartelle

```
src/
├── app/
│   ├── page.tsx                          # Home desktop
│   ├── layout.tsx
│   ├── globals.css
│   ├── m/                                # ─── SITO MOBILE ───
│   │   ├── layout.tsx                   # Layout mobile (header + footer)
│   │   ├── mobile.css                   # CSS dedicato mobile
│   │   ├── MobileHeader.tsx              # Sticky header + drawer nav
│   │   ├── MobileOpereGallery.tsx        # Componente viewer gallerie opere
│   │   ├── page.tsx                      # Home mobile
│   │   ├── esperienze-giovanili-1964-1977/
│   │   ├── astrazioni-simboliche-1978-1985/
│   │   ├── geometrie-elementari-1986-1997/
│   │   ├── figurazioni-racconti-1998-2004-parte-prima/
│   │   ├── figurazioni-racconti-1998-2004-parte-seconda/
│   │   ├── 1989-2003-disegni-collage/
│   │   ├── presenze-galleristiche-mostre-2024/
│   │   ├── gallery/
│   │   ├── presentazione/
│   │   ├── biografia/
│   │   ├── news/
│   │   ├── contact/
│   │   ├── dispense/
│   │   └── privacy-policy/
│   └── [desktop pages...]               # ─── DESKTOP PAGES ───
├── components/
│   ├── WpPageShell.tsx                   # ⭐ Boilerplate wrapper (Phase 3)
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── GalleryPage.tsx
│   ├── Lightbox.tsx
│   ├── TextPage.tsx
│   └── ContactForm.tsx
├── lib/
│   └── wpBoilerplate.ts                  # CSS boilerplate condiviso (~51KB, auto-generato)
└── data/
    └── galleries.ts                      # Dati immagini gallerie
middleware.ts                             # Edge middleware UA detection
extract-boilerplate.mjs                   # Script estrazione boilerplate
refactor-page.mjs                         # Script refactoring page.tsx → WpPageShell
```

---

## 📱 Sito Mobile (`/m/*`)

### Come funziona

Il file `middleware.ts` alla radice intercetta ogni richiesta sul layer Edge e reindirizza automaticamente gli utenti mobile a `/m/*`:

```typescript
const MOBILE_UA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i

if (isMobile && !pathname.startsWith('/m')) {
  return NextResponse.redirect(`/m${pathname}`)
}
```

Asset statici (`/images`, `/_next`, `/css`, ecc.) vengono esclusi dal redirect.

### Design System Mobile

| Token | Valore | Uso |
|-------|--------|-----|
| `--primary` | `#14171c` | Testo, bottoni, nav drawer |
| `--secondary` | `#6c0001` | Rosso principale, frecce gallery, strip |
| `--accent` | `#6c0001` | Highlight, link attivi, border sezioni |
| `--gray` | `#777777` | Testi secondari, metadata |
| `--header-bg` | `#ebebe9` | Header beige (uguale all'originale) |
| `--bg` | `#f5f5f5` | Background pagine (grigio neutro) |
| `--font` | Poppins | Body text |
| `--font-heading` | Montserrat 700 | Titoli, nav, etichette |

### Pagine Mobile

| Route | Contenuto |
|-------|-----------|
| `/m` | Home con hero artwork, grid 6 sezioni opere, link rapidi |
| `/m/esperienze-giovanili-1964-1977` | Gallery viewer + lightbox |
| `/m/astrazioni-simboliche-1978-1985` | Gallery viewer + lightbox |
| `/m/geometrie-elementari-1986-1997` | Gallery viewer + lightbox |
| `/m/figurazioni-racconti-1998-2004-parte-prima` | Gallery viewer + lightbox |
| `/m/figurazioni-racconti-1998-2004-parte-seconda` | Gallery viewer + lightbox |
| `/m/1989-2003-disegni-collage` | Gallery viewer + lightbox |
| `/m/presenze-galleristiche-mostre-2024` | Presenze galleristiche |
| `/m/gallery` | Photo gallery 24 immagini |
| `/m/presentazione` | Testo presentazione artistica |
| `/m/biografia` | Biografia dellartista |
| `/m/news` | News e aggiornamenti |
| `/m/contact` | Contatti |
| `/m/dispense` | Dispense e materiali |
| `/m/privacy-policy` | Privacy policy |

---

## 🖥️ Sito Desktop

Ricostruzione 1:1 del sito WordPress. Ogni pagina inietta HTML/CSS originale di Elementor via `dangerouslySetInnerHTML`.

### Routes Desktop

| Route | Descrizione |
|-------|-------------|
| `/` | Home |
| `/presentazione` | Presentazione artistica |
| `/biografia` | Biografia di Oronzo Mastro |
| `/esperienze-giovanili-1964-1977` | Collezione 1964–1977 |
| `/astrazioni-simboliche-1978-1985` | Collezione 1978–1985 |
| `/geometrie-elementari-1986-1997` | Collezione 1986–1997 |
| `/figurazioni-racconti-1998-2004-parte-prima` | Figurazioni Pt. I |
| `/figurazioni-racconti-1998-2004-parte-seconda` | Figurazioni Pt. II |
| `/1989-2003-disegni-collage` | Disegni e Collage |
| `/gallery` | Photo Gallery completa |
| `/dispense` | Dispense e materiali |
| `/contact` | Form contatti |
| `/presenze-galleristiche-mostre-2024` | Presenze 2024 |
| `/privacy-policy` | Privacy Policy |
| `/news` | News |

---

## 🚀 Quick Start

### Prerequisiti
- Node.js 18+
- npm 9+

### Installazione
```bash
npm install
```

### Sviluppo
```bash
npm run dev
# http://localhost:3000        ← Desktop
# http://localhost:3000/m      ← Mobile (o simula UA)
```

### Build produzione
```bash
npm run build
# ⚠️  Non usa output:'export'. Richiede runtime serverless.
```

### Deploy (Vercel — raccomandato)
```bash
vercel deploy
```

Il progetto richiede **Edge Middleware** (Vercel o Next.js standalone server). Non può essere hostato come sito puramente statico.

---

## 📦 Dipendenze

| Pacchetto | Versione | Uso |
|-----------|----------|-----|
| `next` | 16.x | Framework |
| `react` | 18 | UI |
| `typescript` | 5 | Type safety |
| `tailwindcss` | 3.3.0 | Utility CSS |
| `cheerio` | 1.2.0 | HTML parsing |

---

## 📊 Asset

| Tipo | Quantità |
|------|----------|
| Immagini | 448 |
| CSS files | 24 |
| JS files | 19 |
| Font files | 55 |
| Pagine desktop | 15 |
| Pagine mobile | 15 |

---

## 🌐 Link

- [Sito Originale](https://www.archiviomastrosculture.it)
- [Repository GitHub](https://github.com/vitouchiha/archivio-mastro-sculture)
- [Releases](https://github.com/vitouchiha/archivio-mastro-sculture/releases)

---

**Ultimo aggiornamento:** 2 Marzo 2026
**Versione:** v1.4.0
**Stato:** ✅ Production Ready — Serverless (Vercel) | Mobile Site | Desktop 1:1 Clone | WpPageShell modulare
