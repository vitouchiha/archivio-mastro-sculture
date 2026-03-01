# Codebase Summary

**Mapped:** 2026-03-01
**Focus:** all

## Quick Reference

| Aspect | Key Points |
|--------|------------|
| Stack | Next.js 16, React 19, TypeScript, Tailwind CSS |
| Architecture | App Router, Static Export, Wrapped Elementor HTML |
| Entry Points | `src/app/layout.tsx`, `src/app/page.tsx` |
| Test Coverage | N/A. Manual QA via screenshots/diffs |

## Key Files

- `src/app/page.tsx` - Homepage heavily integrating Elementor layout
- `src/data/galleries.ts` - Index logic and definitions for dynamic components
- `public/js/*-logic.js` - Refactored interactive image previews (clicks) 

## Development Notes

- Editing page layout requires meticulous changes within minified HTML strings to maintain 1:1 pixel parity with legacy WordPress theme.
- Tested locally using `npm run build` and `npm start` rather than only `npm run dev` to ensure static static parity.

## Concerns

- Complex Elementor class combinations limit scalable refactoring. Do not aggressively prune `wp-` prefixed stylesheets.