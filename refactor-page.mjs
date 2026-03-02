/**
 * Refactors src/app/biografia/page.tsx to use WpPageShell.
 * Usage: node refactor-page.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPage = path.join(__dirname, 'src/app/biografia/page.tsx');

const raw = readFileSync(srcPage, 'utf8');

// 1. Extract bodyClasses from the outer div className
const bodyClassMatch = raw.match(/className="([^"]+)"/);
const bodyClasses = bodyClassMatch ? bodyClassMatch[1] : '';

// 2. Extract page-specific CSS file (the one after elementor-global-css)
const globalLine = '<link rel="stylesheet" id="elementor-global-css" href="/css/global.css" media="all">';
const afterGlobal = raw.slice(raw.indexOf(globalLine) + globalLine.length);
const postCssMatch = afterGlobal.match(/href="\/css\/(post-\d+\.css)" media="all">/);
const postCss = postCssMatch ? postCssMatch[1] : '';

// 3. Extract the HTML content (after all the CSS boilerplate)
// Find where the actual HTML starts: <div class="wrapper">
const htmlStart = raw.indexOf('<div class="wrapper">');
const htmlEnd = raw.lastIndexOf('` }} />');
const htmlContent = raw.slice(htmlStart, htmlEnd);

console.log('bodyClasses:', bodyClasses.slice(0, 60) + '...');
console.log('postCss:', postCss);
console.log('htmlContent length:', htmlContent.length);
console.log('htmlContent end:', htmlContent.slice(-80));

function escape(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

const output = `import React from 'react';
import WpPageShell from '@/components/WpPageShell';

const bodyClasses = "${bodyClasses}";

const html = \`${escape(htmlContent)}\`;

export default function PageBiografia() {
  return (
    <WpPageShell
      bodyClasses={bodyClasses}
      postCss="${postCss}"
      html={html}
    />
  );
}
`;

writeFileSync(srcPage, output, 'utf8');
console.log('Refactored:', srcPage);
