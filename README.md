# Archivio Mastro Sculture

[![Deploy to Vercel](https://github.com/vitouchiha/archivio-mastro-sculture/actions/workflows/deploy.yml/badge.svg)](https://github.com/vitouchiha/archivio-mastro-sculture/actions/workflows/deploy.yml)
[![Latest Release](https://img.shields.io/github/v/release/vitouchiha/archivio-mastro-sculture)](https://github.com/vitouchiha/archivio-mastro-sculture/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Archivio digitale permanente dell'opera di **Mastro Sculture** – clone statico fedele di [archiviomastrosculture.it](https://www.archiviomastrosculture.it/) costruito con **Next.js 15** e deployato su **Vercel** tramite GitHub Actions.

Il sito originale era su WordPress con dominio in scadenza. Questo progetto ne preserva tutto il contenuto (15 pagine, ~195 immagini) in forma di sito statico puro, senza dipendenze da server o database.

---

## Indice

- [Perché questo progetto](#perché-questo-progetto)
- [Stack tecnico](#stack-tecnico)
- [Struttura del repository](#struttura-del-repository)
- [Pagine](#pagine)
- [Setup locale](#setup-locale)
- [Deploy su Vercel](#deploy-su-vercel)
- [Pipeline CI/CD](#pipeline-cicd)
- [Gestione release](#gestione-release)
- [Aggiungere contenuti](#aggiungere-contenuti)
- [Changelog](#changelog)

---

## Perché questo progetto

Il dominio `archiviomastrosculture.it` stava per scadere. Piuttosto di perdere decenni di documentazione artistica, l'intero sito WordPress è stato convertito in un sito statico Next.js:

- **Nessun server**: solo file HTML/CSS/JS generati a build-time
- **Nessun database**: i dati delle gallerie sono in `src/data/galleries.ts`
- **Deploy gratuito**: Vercel free tier è sufficiente per un sito di questo tipo
- **Aggiornamento automatico**: ogni `push` su `main` rideploya il sito e crea una nuova release

---

## Stack tecnico

| Tecnologia | Versione | Ruolo |
|---|---|---|
| Next.js | 15.1.7 | Framework React con App Router |
| React | 18 | UI rendering |
| TypeScript | 5 | Tipizzazione statica |
| Tailwind CSS | 3 | Stile utility-first |
| Vercel | – | Hosting statico + CDN globale |
| GitHub Actions | – | CI/CD: deploy + release automatici |

---

## Struttura del repository

```
archivio-mastro-sculture/
├── .github/
│   └── workflows/
│       ├── deploy.yml          ← auto-deploy su Vercel ad ogni push su main
│       └── release.yml         ← crea tag + release GitHub + aggiorna CHANGELOG
├── public/
│   └── images/                 ← ~195 immagini scaricate dal WordPress originale
│       ├── HP01B.jpg … HP04B.jpg   (hero home)
│       ├── 2023/01/EG01-25.jpg     (Esperienze Giovanili)
│       ├── 2023/04/01AS-28AS.jpg   (Astrazioni Simboliche)
│       ├── 2023/04/GE01-28.jpg     (Geometrie Elementari)
│       ├── 2023/04/FR01-28.jpg     (Figurazioni Racconti I)
│       ├── 2023/05/F01-28.jpg      (Figurazioni Racconti II)
│       ├── 2023/05/DC01-28.jpg     (Disegni Collage)
│       └── 2024/07/PG01-24.jpg     (Presenze Galleristica)
├── src/
│   ├── app/                    ← pagine Next.js (App Router)
│   │   ├── page.tsx                         (Home)
│   │   ├── biografia/page.tsx
│   │   ├── presentazione/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── news/page.tsx
│   │   ├── dispense/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── esperienze-giovanili-1964-1977/
│   │   ├── astrazioni-simboliche-1978-1985/
│   │   ├── geometrie-elementari-1986-1997/
│   │   ├── figurazioni-racconti-1998-2004-parte-prima/
│   │   ├── figurazioni-racconti-1998-2004-parte-seconda/
│   │   ├── 1989-2003-disegni-collage/
│   │   └── presenze-galleristiche-mostre-2024/
│   ├── components/
│   │   ├── Header.tsx          ← nav desktop + mobile, dropdown gallerie
│   │   ├── Footer.tsx
│   │   ├── GalleryPage.tsx     ← griglia masonry + lightbox + nav
│   │   ├── Lightbox.tsx        ← fullscreen overlay con tastiera
│   │   ├── TextPage.tsx        ← banner + titolo + slot contenuto
│   │   └── ContactForm.tsx     ← form mailto: (client component)
│   └── data/
│       └── galleries.ts        ← array immagini, metadati opere, navLinks
├── download-images.ps1         ← scarica tutte le immagini dal WP originale
├── next.config.js              ← output: 'export', trailingSlash, images unoptimized
├── CHANGELOG.md
└── README.md
```

---

## Pagine

| URL | Titolo | Tipo |
|---|---|---|
| `/` | Home | Slider hero + griglia sezioni |
| `/biografia` | Biografia | Testo + banner |
| `/presentazione` | Presentazione | Testo + banner |
| `/contact` | Contatti | Form mailto |
| `/news` | News | Testo |
| `/dispense` | Dispense | Testo + banner |
| `/gallery` | Galleria generale | Testo |
| `/privacy-policy` | Privacy Policy | Testo |
| `/esperienze-giovanili-1964-1977` | Esperienze Giovanili | Galleria (25 opere) |
| `/astrazioni-simboliche-1978-1985` | Astrazioni Simboliche | Galleria (28 opere) |
| `/geometrie-elementari-1986-1997` | Geometrie Elementari | Galleria (28 opere) |
| `/figurazioni-racconti-1998-2004-parte-prima` | Figurazioni Racconti I | Galleria (28 opere) |
| `/figurazioni-racconti-1998-2004-parte-seconda` | Figurazioni Racconti II | Galleria (28 opere) |
| `/1989-2003-disegni-collage` | Disegni Collage | Galleria (28 opere) |
| `/presenze-galleristiche-mostre-2024` | Presenze Galleristiche 2024 | Galleria (24 opere) |

---

## Setup locale

### 1. Clona il repository

```bash
git clone https://github.com/vitouchiha/archivio-mastro-sculture.git
cd archivio-mastro-sculture
```

### 2. Installa le dipendenze

```bash
npm install
```

### 3. (Opzionale) Riscaricare le immagini dal WordPress originale

> Da eseguire **prima che il dominio scada**.

```powershell
.\download-images.ps1
```

Lo script è idempotente: salta i file già esistenti.

### 4. Avvia il server di sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

### 5. Build di produzione

```bash
npm run build
```

Genera la cartella `out/` con il sito statico completo (HTML + CSS + JS).

---

## Deploy su Vercel

### Prima volta (manuale)

```bash
npm i -g vercel
vercel login
vercel link          # segui le istruzioni, nota VERCEL_ORG_ID e VERCEL_PROJECT_ID
vercel --prod
```

### Deploy automatico (dopo il primo)

Ogni `push` su `main` fa scattare automaticamente `deploy.yml` che rideploya il sito su Vercel.

Per configurare il deploy automatico aggiungi questi **GitHub Secrets** in  
`Settings → Secrets and variables → Actions`:

| Secret | Come ottenerlo |
|---|---|
| `VERCEL_TOKEN` | [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | output di `vercel link` oppure `.vercel/project.json` → `orgId` |
| `VERCEL_PROJECT_ID` | output di `vercel link` oppure `.vercel/project.json` → `projectId` |

### Dominio personalizzato

Vai su **Vercel → Project → Settings → Domains** e aggiungi il nuovo dominio.

---

## Pipeline CI/CD

```
push su main
    │
    ├─► deploy.yml
    │       npm install → npm run build → vercel --prod
    │       (il sito è live in ~60 secondi)
    │
    └─► release.yml
            legge versione da package.json
            crea tag git vX.Y.Z
            crea GitHub Release con note automatiche
            aggiorna CHANGELOG.md e fa commit
```

---

## Gestione release

Le versioni seguono [Semantic Versioning](https://semver.org/):

| Tipo di modifica | Versione |
|---|---|
| Fix bug / aggiornamento testi | PATCH (`1.0.x`) |
| Nuova pagina / nuova galleria | MINOR (`1.x.0`) |
| Ristrutturazione architettura | MAJOR (`x.0.0`) |

Per creare una nuova release:

1. Modifica `version` in `package.json` (es. `"1.2.0"`)
2. Fai commit e push su `main`
3. `release.yml` crea automaticamente il tag `v1.2.0` e la GitHub Release

---

## Aggiungere contenuti

### Nuova galleria

1. Aggiungi le immagini in `public/images/<anno>/<mese>/`
2. In `src/data/galleries.ts` aggiungi l'array delle immagini e l'oggetto `*Featured`
3. In `src/app/<slug>/page.tsx` crea la pagina usando il componente `<GalleryPage>`
4. Aggiungi il link in `navLinks` (sempre in `galleries.ts`) e nel dropdown di `Header.tsx`

### Nuova pagina testo

1. Crea `src/app/<slug>/page.tsx`
2. Usa il componente `<TextPage>` con banner e slot contenuto
3. Aggiungi il link nel `Header.tsx`

---

## Changelog

Vedi [CHANGELOG.md](CHANGELOG.md) per la storia completa delle versioni.

---

## Licenza

Codice sorgente: **MIT** – libero da riusare e modificare.  
Contenuto artistico (immagini, testi): di proprietà di Mastro Sculture, tutti i diritti riservati.
