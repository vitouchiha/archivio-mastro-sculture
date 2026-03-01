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

### v1.3.0 — Sito Mobile Dedicato

**Funzionalità introdotte:**

- ✅ **Mobile site `/m/*`** — interfaccia completamente separata e ottimizzata per smartphone
- ✅ **Middleware redirect** — gli utenti mobile vengono reindirizzati automaticamente a `/m/`
- ✅ **Visual identity corretta** — header beige `#ebebe9`, font `Poppins`/`Montserrat`, colori del sito originale
- ✅ **MobileHeader** — hamburger navigation con drawer fullscreen e tutte le sezioni
- ✅ **MobileOpereGallery** — viewer immagini con prev/next, miniature e lightbox
- ✅ **14 pagine mobile** — home, 6 gallerie opere, photo gallery, presentazione, biografia, news, contatti, dispense, privacy
- ✅ **Serverless deployment** — rimosso `output: 'export'`, richiesto per il middleware
- ✅ **Colori originali** — `#ebebe9` header, `#a07427` gold accent, `#6c0001` dark red, `#14171c` text
- ✅ **i18n** — pagine Presentazione e Biografia tradotte in inglese (`/en/*`)
- ✅ **Gallery fix** — script JS della gallery principale iniettati correttamente, immagine iniziale caricata

**Precedenti (v1.2.x):**
- Fix CSS reset definitivo (gap grigio superiore azzerato)
- Fix `/?pagename=contact` → `/contact/`
- Fix `/figurazioni-racconti-1998-2004/` → parti prima/seconda
- Redirect Pages per compatibilità URL WordPress
- 448 immagini, 24 CSS, 19 JS, 55 font sincronizzati

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
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── GalleryPage.tsx
│   ├── Lightbox.tsx
│   ├── TextPage.tsx
│   └── ContactForm.tsx
└── data/
    └── galleries.ts                      # Dati immagini gallerie
middleware.ts                             # Edge middleware UA detection
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
| `--accent` | `#a07427` | Gold accent, link attivi |
| `--secondary` | `#6c0001` | Dark red, hover |
| `--header-bg` | `#ebebe9` | Header beige (uguale alloriginale) |
| `--bg` | `#f5f4f0` | Background pagine |
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

**Ultimo aggiornamento:** Marzo 2026
**Versione:** v1.3.0
**Stato:** ✅ Production Ready — Serverless (Vercel) | Mobile Site | Desktop 1:1 Clone
