# Project

## Vision
Sito web "Archivio Mastro Sculture", statica esportazione di sito WordPress basato su Elementor. Obiettivo: Mantenere identicita 1:1 dell'originale PC, per poi introdurre reattivita mobile, internazionalizzazione ed un processo di aggiunta pagine scalabile.

## Constraints
- Desktop 1:1 pixel-perfect rispetto ad Elementor ed il tema originale.
- Output statico Next.js (`output: export` o analogo rendering pre-generato).
- Molto HTML minificato pre-generato da Elementor. Almeno su PC non dev'essere rotto.

## Non-Goals
- Non reintrodurre PHP, database o WordPress backend.

## Tech Stack
- Next.js 16.1.6 (App Router), React 19
- TypeScript, Tailwind CSS

## Success Metrics
- PC identico wp
- Se aperto da telefono la visibilita deve aggiustarsi (Responsive UI).
- Cliccando la bandiera italiana va ritornato alla Home principale, cliccando l'Inglese l'intera pagina deve tradursi.
- Nuove pagine aggiungibili facilmente.
