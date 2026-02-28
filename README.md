# Archivio Mastro Sculture

Sito statico **Next.js 14** che riproduce fedelmente [archiviomastrosculture.it](https://www.archiviomastrosculture.it/).  
Deployato su **Vercel** tramite GitHub.

---

## Struttura

```
public/
  images/           ← tutte le immagini scaricate dal vecchio WordPress
src/
  app/              ← pagine (App Router)
  components/       ← Header, Footer, GalleryPage, Lightbox
  data/             ← dati gallerie (percorsi immagini, testi, metadati)
```

## Setup rapido

### 1. Installa dipendenze

```bash
npm install
```

### 2. Scarica le immagini dal vecchio sito WordPress

> Esegui **prima che il dominio scada!**

```powershell
.\download-images.ps1
```

Lo script scarica tutte le immagini nella cartella `public/images/` rispettando la struttura di cartelle originale.

### 3. Sviluppo locale

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

### 4. Build di produzione

```bash
npm run build
```

Genera la cartella `out/` con il sito statico completo.

---

## Deploy su Vercel

### Metodo A – Deploy automatico da GitHub (consigliato)

1. Crea un repository GitHub (pubblico o privato) e fai il push del codice:

```bash
git init
git add .
git commit -m "Initial commit – Archivio Mastro Sculture"
git branch -M main
git remote add origin https://github.com/TUO_USERNAME/archivio-mastro-sculture.git
git push -u origin main
```

2. Vai su [vercel.com](https://vercel.com) → **Add New Project** → importa il repository GitHub.
3. Vercel rileva automaticamente Next.js – clicca **Deploy**.
4. Il sito sarà online su `https://archivio-mastro-sculture.vercel.app` (o simile).

### Metodo B – Deploy diretto con Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## Personalizzare il dominio

Se acquisti un nuovo dominio, vai su **Vercel → Project → Settings → Domains** e aggiungilo.

---

## Pagine

| URL | Descrizione |
|-----|-------------|
| `/` | Home con slider e link alle collezioni |
| `/esperienze-giovanili-1964-1977` | Galleria Esperienze Giovanili |
| `/astrazioni-simboliche-1978-1985` | Galleria Astrazioni Simboliche |
| `/geometrie-elementari-1986-1997` | Galleria Geometrie Elementari |
| `/figurazioni-racconti-1998-2004-parte-prima` | Figurazioni Racconti I |
| `/figurazioni-racconti-1998-2004-parte-seconda` | Figurazioni Racconti II |
| `/1989-2003-disegni-collage` | Galleria Disegni Collage |
