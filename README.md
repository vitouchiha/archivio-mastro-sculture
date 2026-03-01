# Archivio Mastro Sculture (Clonato 1:1 in Next.js)

Questo progetto ha lo scopo di fornire una versione statica identica all'originale (pixel perfect) del vecchio sito WordPress *Archivio Mastro Sculture*.

L'approccio scelto consiste nell'aver estratto chirurgicamente HTML, CSS (Elementor, Neve, etc) e script dal sito WordPress originale montandoli all'interno di un'infrastruttura **Next.js 16** ultraveloce e SEO-friendly. L'intera visualizzazione avviene tramite componenti React che renderizzano l'originale HTML statico 1:1, superando così le limitazioni e i problemi di rendering generati da una banale conversione manuale su Tailwind.

## Cosa è stato implementato in questa versione

### 1.2.0 - Full 1:1 Scraping Update 
- **Scraping Integrale:** Estrazione raw di tutto l'html tramite pipeline custom (\generate-perfect-1-1.mjs\).
- **Clone CSS:** L'apparato visivo poggia interamente sugli stili originali situati su \public/css\, prelevati e corretti nelle URL assolute.
- **Image Optimization:** Tutte le immagini locali sono state iniettate e collegate esattamente in corrispondenza del grid system di Elementor (\public/images/\).
- **Pagine Dinamiche generate 1:1**: \presentazione\, \iografia\, i periodi artistici e i contatti renderizzano esattamente lo specchio del frontend WP tramite Next.js React elements.

### Come buildare in locale
1. Esegui \
pm install\ (installa Next, React e Cheerio)
2. Esegui \
pm run dev\ e visita [http://localhost:3000](http://localhost:3000). Le UI saranno perfette in ottica 1:1.

## GitHub Actions & Hosting
Una **GitHub Action** automatizzata assicura che ad ogni creazione di una \	ag\ (\1.x.x\) il branch \main\ compili la Build statica (\out/\) e ne pacchettizzi lo zip.
