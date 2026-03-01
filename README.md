# Archivio Mastro Sculture - Clonato 1:1 in Next.js

Questo progetto fornisce una versione statica **pixel-perfect** e identica all'originale del sito WordPress *Archivio Mastro Sculture*.

## 🎯 Approccio Tecnico

L'intera architettura si basa su:

1. **Full Scraping** dell'HTML, CSS (Elementor, Neve Theme) e script dal sito WordPress originale
2. **Iniezione dinamica** del contenuto statico 1:1 tramite componenti React + `dangerouslySetInnerHTML`
3. **Asset management** locale (448 immagini, 24 file CSS, 19 script JS, 55 font file)
4. **Next.js 16** con export statico per hosting senza backend

## 📋 Versione Attuale

### v1.2.2 - Layout Pixel-Perfect Definitivo

**Ultimi fix:**\n- ✅ **Definitivo CSS Reset**: Chiuso enorme gap grigio superiore azzerando i padding di default ereditati da Neve Theme.\n- ✅ **Ripristino Strutturale**: Rimossa la band-aid CSS margin-top.
- ✅ **Allineamento banner rosso**: Ridotto margin-top tra sezione immagini e testi (#-20px)
- ✅ **Zero Link Broken**: Tutti i link interni verificati e corretti
- ✅ **Asset Verification**: 448 immagini sincronizzate, 24 CSS integrati
- ✅ **Production Ready**: 19 rotte compilate come static HTML

**Precedenti:**
- Fix: `/?pagename=contact` → `/contact/`
- Fix: `/figurazioni-racconti-1998-2004/` → `/figurazioni-racconti-1998-2004-parte-prima/`
- Redirect Pages per compatibilità URL WordPress

## 🚀 Quick Start

### Installazione
```bash
npm install
```

### Sviluppo
```bash
npm run dev
# Visita http://localhost:3000
```

### Build Produzione
```bash
npm run build
# Genera cartella `out/` con sito completamente statico
```

## 📊 Audit Report

**Ultimo audit (post-fix):**
- ❌ Link rotti: **0**
- ✅ Asset mancanti: **0**
- ✅ Pagine configurate: **5/5**
- ✅ Route disponibili: **19**
- ✅ Immagini: **448**
- ✅ CSS files: **24**
- ✅ JS files: **19**
- ✅ Font files: **55**

## 🔗 Pages/Routes Disponibili

| Route | Descrizione |
|-------|-------------|
| `/` | Home |
| `/presentazione` | Presentazione artistico |
| `/biografia` | Biografia di Oronzo Mastro |
| `/esperienze-giovanili-1964-1977` | Collezione 1964-1977 |
| `/astrazioni-simboliche-1978-1985` | Collezione 1978-1985 |
| `/geometrie-elementari-1986-1997` | Collezione 1986-1997 |
| `/figurazioni-racconti-1998-2004-parte-prima` | Figurazioni Parte I |
| `/figurazioni-racconti-1998-2004-parte-seconda` | Figurazioni Parte II |
| `/1989-2003-disegni-collage` | Disegni e Collage |
| `/gallery` | Photo Gallery completa |
| `/dispense` | Dispense e Materiali |
| `/contact` | Form Contatti |
| `/presenze-galleristiche-mostre-2024` | Presenze 2024 |
| `/privacy-policy` | Privacy Policy |
| `/news` | News |

## 🔧 Configurazione Next.js

**File: `next.config.js`**
```javascript
output: 'export'        // Export statico
trailingSlash: true     // URL con trailing slash
images.unoptimized: true // Per export statico
```

## 📝 Development Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## 🛠️ Strumenti di Audit

Eseguire manualmente per verificare:

```bash
# Verifica completa del sito
node super-audit.mjs

# Fix automatico dei link
node fix-links.mjs

# Analisi icone e CSS
node check-icons-detailed.mjs
```

## 📦 Dipendenze Principali

- **Next.js** 16.1.6 - React framework
- **React** 18 - UI library
- **Cheerio** 1.2.0 - HTML parsing (per scraping)
- **Tailwind CSS** 3.3.0 - Utility CSS (optional, non usato in 1:1 mode)

## 🌐 Hosting

Il sito è completamente statico e può essere hostato su:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting provider

Semplicemente deployare la cartella `out/` dopo build.

## 📖 Documentazione Progetto

- [Archivio Mastro Sculture](https://www.archiviomastrosculture.it) - Sito originale
- [GitHub Repository](https://github.com/vitouchiha/archivio-mastro-sculture)
- [Release v1.2.0](https://github.com/vitouchiha/archivio-mastro-sculture/releases/tag/v1.2.0)

## 📄 License

Questo progetto ospita il contenuto artistico di Oronzo Mastro.

---

**Ultimo aggiornamento:** Marzo 2026  
**Stato:** ✅ Production Ready | Fully Tested | Zero Broken Links
