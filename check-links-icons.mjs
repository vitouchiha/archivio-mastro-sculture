import fs from 'fs';
import * as cheerio from 'cheerio';
import path from 'path';

// Routes disponibili nel nostro progetto
const validRoutes = [
  '/',
  '/presentazione',
  '/biografia',
  '/esperienze-giovanili-1964-1977',
  '/astrazioni-simboliche-1978-1985',
  '/geometrie-elementari-1986-1997',
  '/figurazioni-racconti-1998-2004-parte-prima',
  '/figurazioni-racconti-1998-2004-parte-seconda',
  '/1989-2003-disegni-collage',
  '/gallery',
  '/dispense',
  '/contact',
];

// Pagine da controllare
const pagesToCheck = [
  'src/app/page.tsx',
  'src/app/presentazione/page.tsx',
  'src/app/biografia/page.tsx',
  'src/app/contact/page.tsx',
];

console.log('🔍 Verifica dei link errati e icone mancanti...\n');

const issues = [];

for (const pageFile of pagesToCheck) {
  if (!fs.existsSync(pageFile)) continue;
  
  const content = fs.readFileSync(pageFile, 'utf8');
  
  // Estrai l'HTML dal dangerouslySetInnerHTML
  const htmlMatch = content.match(/dangerouslySetInnerHTML={{ __html: `([^`]*)` }}/);
  if (!htmlMatch) continue;
  
  const html = htmlMatch[1].replace(/\\`/g, '`').replace(/\\\$/g, '$');
  const $ = cheerio.load(html);
  
  // Cerca link errati
  $('a[href]').each((i, el) => {
    let href = $(el).attr('href');
    if (!href) return;
    
    // Cleaning: rimuovi il protocollo e il dominio se presenti
    href = href.replace('https://www.archiviomastrosculture.it', '').replace(/\/$/, '');
    if (!href) href = '/';
    
    // Controlla se è un link interno
    if (href.startsWith('/') && !href.startsWith('//')) {
      const isValid = validRoutes.includes(href) || href.startsWith('/css/') || href.startsWith('/js/') || href.startsWith('/images/') || href.startsWith('/fonts/') || href.startsWith('mailto:') || href.startsWith('tel:') || href === '#';
      
      if (!isValid) {
        issues.push({
          page: pageFile,
          type: 'BROKEN_LINK',
          href: href,
          text: $(el).text().substring(0, 50),
          originalHref: $(el).attr('href')
        });
      }
    }
  });
  
  // Controllaicone
  $('svg, i[class*="icon"], img[alt*="icon"], img[class*="icon"]').each((i, el) => {
    const width = $(el).attr('width');
    const height = $(el).attr('height');
    const style = $(el).attr('style');
    
    // Se l'icona è molto piccola (<16px in una dimensione)
    if (width && parseInt(width) < 16) {
      issues.push({
        page: pageFile,
        type: 'SMALL_ICON',
        element: el.tagName,
        class: $(el).attr('class'),
        width: width,
        height: height
      });
    }
  });
}

if (issues.length === 0) {
  console.log('✅ Nessun problema trovato!\n');
} else {
  console.log(`⚠️  ${issues.length} problemi trovati:\n`);
  
  const brokenLinks = issues.filter(i => i.type === 'BROKEN_LINK');
  const smallIcons = issues.filter(i => i.type === 'SMALL_ICON');
  
  if (brokenLinks.length > 0) {
    console.log('🔗 Link Errati:');
    brokenLinks.forEach(issue => {
      console.log(`  ❌ ${issue.page}`);
      console.log(`     Link: ${issue.href}`);
      console.log(`     Testo: "${issue.text}"`);
      console.log(`     Original: ${issue.originalHref}\n`);
    });
  }
  
  if (smallIcons.length > 0) {
    console.log('\n📐 Icone Troppo Piccole:');
    smallIcons.forEach(issue => {
      console.log(`  ⚠️  ${issue.page}`);
      console.log(`     Elemento: ${issue.element}`);
      console.log(`     Class: ${issue.class}`);
      console.log(`     Size: ${issue.width}x${issue.height}\n`);
    });
  }
}

// Salva il report
fs.writeFileSync('link-issues-report.json', JSON.stringify(issues, null, 2));
console.log('📝 Report salvato in: link-issues-report.json');
