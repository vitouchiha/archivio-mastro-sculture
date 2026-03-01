# Conventions Analysis

- **Naming Patterns**: kebab-case for URLs/folders (e.g., `esperienze-giovanili-1964-1977`), PascalCase for React components.
- **Code Style**: Functional React components with hooks. Extensive usage of `dangerouslySetInnerHTML` for scraped Elementor/WordPress HTML layouts to preserve pixel-perfect 1:1 legacy design.
- **Assets Management**: Legacy images structured by WP upload dates (`/images/YYYY/MM/`). Logic extracted from `<script>` into decoupled vanilla `.js` logic files.