# Concerns Analysis

- **Technical Debt**: Large chunks of raw Elementor HTML injected via `dangerouslySetInnerHTML`. Legacy UI logic extracted into vanilla JS (`-logic.js` files) inside `public/js/` bypassing standard React props/state.
- **Known Issues**: Potential styling conflicts between Tailwind and imported legacy WP/Elementor CSS. Banner width issues patched globally in `globals.css` with `!important` to circumvent missing Elementor dynamic JS.
- **Maintenance**: Difficult to update inner HTML content without rescraping or manual text-editing of complex Elementor nodes. Any interactive DOM modifications must be bound securely over React's static render.