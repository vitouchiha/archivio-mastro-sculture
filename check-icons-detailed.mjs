import fs from 'fs';
import * as cheerio from 'cheerio';

console.log('🔎 Verifica icone e SVG nel sito...\n');

// Analizia la pagina CSS per le icone Elementor
const cssFiles = [
  'public/css/elementor-icons.min.css',
  'public/css/global.css',
  'public/css/style-main-new.min.css',
];

let totalIssues = [];

// Leggi il file home per controllare le icone
const homePage = fs.readFileSync('src/app/page.tsx', 'utf8');

// Estrai il primo blocco dangerouslySetInnerHTML per analizzare l'HTML
const match = homePage.match(/dangerouslySetInnerHTML={{ __html: `([^`]{0,20000})`/);
if (match) {
  const html = match[1];
  const $ = cheerio.load(html);
  
  console.log('📋 Analisi Home Page:\n');
  
  // Cerca SVG
  const svgs = $('svg').length;
  console.log(`  SVG trovati: ${svgs}`);
  
  $('svg').each((i, el) => {
    const viewBox = $(el).attr('viewBox');
    const width = $(el).attr('width');
    const height = $(el).attr('height');
    const style = $(el).attr('style');
    const classes = $(el).attr('class');
    
    // Se l'SVG è molto piccolo
    if ((width && parseInt(width) < 20) || (height && parseInt(height) < 20)) {
      totalIssues.push({
        type: 'SMALL_SVG',
        viewBox,
        width,
        height,
        style,
        classes,
        page: 'home'
      });
    }
  });
  
  // Cercai-icon o simili
  const icons = $('i[class*="icon"], [class*="icon-"]').length;
  console.log(`  Icone (i tag) trovate: ${icons}`);
  
  $('i[class*="icon"], [class*="icon-"]').each((i, el) => {
    const classes = $(el).attr('class');
    const style = $(el).attr('style');
    
    // Verifica se ha dimensioni specificate
    console.log(`    - Icon: ${classes}`);
    if (style) {
      console.log(`      Style: ${style.substring(0, 80)}`);
    }
  });
  
  // Cerca img con classe icon
  const imgIcons = $('img[class*="icon"]').length;
  console.log(`  Immagini icone trovate: ${imgIcons}`);
  
  $('img[class*="icon"]').each((i, el) => {
    const width = $(el).attr('width');
    const height = $(el).attr('height');
    const src = $(el).attr('src');
    
    if ((width && parseInt(width) < 20) || (height && parseInt(height) < 20)) {
      totalIssues.push({
        type: 'SMALL_IMG_ICON',
        src,
        width,
        height,
        page: 'home'
      });
    }
  });
}

console.log('\n📊 CSS Analisi:\n');

// Analizza i CSS per le regole delle icone
for (const cssFile of cssFiles) {
  if (!fs.existsSync(cssFile)) {
    console.log(`  ⚠️  ${cssFile} non trovato`);
    continue;
  }
  
  try {
    const css = fs.readFileSync(cssFile, 'utf8');
    
    // Cerca regole di font-size piccole
    const smallFontRules = css.match(/\.[\w-]*icon[\w-]*\s*\{[^}]*font-size:\s*(\d+)px/g);
    if (smallFontRules) {
      console.log(`  ${cssFile}:`);
      smallFontRules.forEach(rule => {
        const sizeMatch = rule.match(/font-size:\s*(\d+)px/);
        if (sizeMatch && parseInt(sizeMatch[1]) < 16) {
          console.log(`    ⚠️  Icona con font-size: ${sizeMatch[1]}px`);
          totalIssues.push({
            type: 'SMALL_FONT_ICON',
            size: sizeMatch[1],
            rule: rule.substring(0, 100),
            file: cssFile
          });
        }
      });
    }
    
    // Cerca width/height piccoli
    const smallDimensionRules = css.match(/\.[\w-]*icon[\w-]*\s*\{[^}]*(width|height):\s*(\d+)px/g);
    if (smallDimensionRules) {
      smallDimensionRules.slice(0, 5).forEach(rule => {
        console.log(`    Rule: ${rule.substring(0, 100)}`);
      });
    }
  } catch (err) {
    console.log(`  ❌ Errore leggendo ${cssFile}`);
  }
}

console.log('\n' + '='.repeat(60) + '\n');

if (totalIssues.length === 0) {
  console.log('✅ Nessun problema con icone trovato!\n');
} else {
  console.log(`⚠️  ${totalIssues.length} problemi potenziali con icone:\n`);
  totalIssues.forEach((issue, i) => {
    console.log(`${i + 1}. ${issue.type}`);
    console.log(`   ${JSON.stringify(issue, null, 2).split('\n').slice(1, 4).join('\n')}\n`);
  });
}

fs.writeFileSync('icons-report.json', JSON.stringify(totalIssues, null, 2));
console.log('📝 Report salvato in: icons-report.json');
