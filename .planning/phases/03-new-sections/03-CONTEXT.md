```markdown
# Phase 3 Context: Nuove Sezioni / Modulabilità

## Problema attuale
Ogni `src/app/<route>/page.tsx` è ~1000 righe di boilerplate identico (CSS inline WordPress, link stylesheet Elementor, neve-style, ecc.).
Aggiungere una nuova pagina richiede copiare tutto quel blob gigante e modificare solo 2-3 cose:
- `bodyClasses` (classi WP sul div esterno)
- Il CSS specifico per quel post (`post-{ID}.css`)
- Il contenuto HTML vero e proprio

## Soluzione
Creare un componente `WpPageShell` in `src/components/WpPageShell.tsx` che:
- Accetta `bodyClasses`, `postCss` (nome del file CSS specifico, opzionale) e `html` (stringa HTML)
- Incapsula tutto il boilerplate condiviso
- Rende ogni `page.tsx` < 20 righe

## Vincoli
- Non rompere il rendering PC 1:1
- Il componente deve rimanere compatibile con `dangerouslySetInnerHTML`
- Non toccare le pagine `/en/` (già generate, si aggiornano in una fase separata)
```
