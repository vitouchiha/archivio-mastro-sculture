import React from 'react';
import { wpHead } from '@/lib/wpBoilerplate';

interface WpPageShellProps {
  /** WordPress body classes (applied to the outer div) */
  bodyClasses: string;
  /** Page-specific Elementor CSS file(s), e.g. 'post-60.css' or ['post-60.css'] */
  postCss?: string | string[];
  /** The actual HTML content of the page (header + main + footer) */
  html: string;
}

/**
 * WpPageShell
 *
 * Wraps any WordPress/Elementor-derived page with the shared CSS boilerplate
 * (Neve theme, Elementor core, Google Fonts, etc.) so that individual page files
 * only need to provide:
 *   - bodyClasses  — the WP body class string
 *   - postCss      — the page-specific CSS file(s)
 *   - html         — the raw HTML content (header → footer)
 *
 * Example usage in a new page.tsx:
 * ```tsx
 * import WpPageShell from '@/components/WpPageShell';
 * const html = `...`;
 * export default function MyPage() {
 *   return (
 *     <WpPageShell
 *       bodyClasses="page page-id-999 elementor-page elementor-page-999"
 *       postCss="post-999.css"
 *       html={html}
 *     />
 *   );
 * }
 * ```
 */
export default function WpPageShell({ bodyClasses, postCss, html }: WpPageShellProps) {
  const cssFiles = postCss
    ? Array.isArray(postCss) ? postCss : [postCss]
    : [];

  const fullHtml = wpHead(cssFiles) + html;

  return (
    <div className={bodyClasses}>
      <div dangerouslySetInnerHTML={{ __html: fullHtml }} />
    </div>
  );
}
