# Architecture Analysis

- **Directory Structure**: Next.js App Router (`src/app/`) containing pages for each gallery section.
- **Data Handling**: Static data managed in `src/data/galleries.ts` mapped to images in `public/images/`.
- **Legacy Assets**: Original WordPress scripts/styles scraped and refactored into `public/js/` and mapped in Next.js via `<Script>`.
- **Design Pattern**: Component-based UI (`src/components/`) and wrapper pages built with React and injected HTML.