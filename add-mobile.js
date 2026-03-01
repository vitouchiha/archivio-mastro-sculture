const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf-8');

const additionalMobileCSS = \
  /* OVERRIDE LEGACY TABLES */
  table, thead, tbody, th, td, tr, tfoot, caption {
    display: block !important;
    width: 100% !important;
    max-width: 100vw !important;
    height: auto !important;
    box-sizing: border-box !important;
    float: none !important;
  }

  td[width], table[width] {
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100vw !important;
  }
  
  table[style*="width:1000px"], table[style*="width: 1000px"] {
       width: 100vw !important;
       max-width: 100vw !important;
  }

  td.colonna_sinistra, td.tabella_immagine_centrale {
    width: 100% !important;
    display: block !important;
    margin-bottom: 20px !important;
    padding: 0 !important;
  }

  img {
    max-width: 100% !important;
    height: auto !important;
  }

  /* Prevent horizontal scrolling globally */
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
\;

if(!css.includes('/* OVERRIDE LEGACY TABLES */')) {
  // assume @media (max-width: 768px) is at the bottom, just insert before the last closing brace
  const lastBraceIndex = css.lastIndexOf('}');
  if (lastBraceIndex !== -1 && css.includes('@media (max-width: 768px)')) {
    css = css.slice(0, lastBraceIndex) + additionalMobileCSS + css.slice(lastBraceIndex);
    fs.writeFileSync('src/app/globals.css', css);
    console.log('Mobile CSS added inside @media!');
  } else {
    // If not found, just append a new @media block
    fs.appendFileSync('src/app/globals.css', '\n@media (max-width: 768px) {\n' + additionalMobileCSS + '}\n');
    console.log('Mobile CSS appended as new @media block!');
  }
} else {
  console.log('Already added');
}
