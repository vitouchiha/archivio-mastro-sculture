import fs from 'fs';
import path from 'path';

console.log('🔍 SUPER MEGA AUDIT COMPLETO DEL SITO\n');
console.log('='.repeat(60) + '\n');

// Liste di tutte le route disponibili
const validRoutes = [
  '/',
  '/1989-2003-disegni-collage',
  '/astrazioni-simboliche-1978-1985',
  '/biografia',
  '/contact',
  '/dispense',
  '/esperienze-giovanili-1964-1977',
  '/esperienze-giovanili-1964-1977-2', // Redirect
  '/figurazioni-racconti-1998-2004-parte-prima',
  '/figurazioni-racconti-1998-2004-parte-seconda',
  '/gallery',
  '/geometrie-elementari-1986-1997',
  '/geometrie-elementari-1986-1997-2', // Redirect
  '/news',
  '/presentazione',
  '/presenze-galleristiche-mostre-2024',
  '/privacy-policy',
];

const pagesToCheck = [
  'src/app/page.tsx',
  'src/app/presentazione/page.tsx',
  'src/app/biografia/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/gallery/page.tsx',
];

const issues = {
  brokenlLinks: [],
  missingAssets: [],
  cssIssues: [],
  iconIssues: [],
  alignmentIssues: [],
};

console.log('📊 1. Verifica Link Interni\n');

for (const pageFile of pagesToCheck) {
  if (!fs.existsSync(pageFile)) {
    console.log(`⚠️  File non trovato: ${pageFile}`);
    continue;
  }
  
  const content = fs.readFileSync(pageFile, 'utf8');
  
  // Estrai href
  const hrefMatches = content.match(/href="([^"]+)"/g) || [];
  
  for (const match of hrefMatches) {
    const href = match.replace('href="', '').replace('"', '');
    
    // Ignora external links, anchors, e mailto
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
      continue;
    }
    
    // Ignora asset links
    if (href.startsWith('/css/') || href.startsWith('/js/') || href.startsWith('/images/') || href.startsWith('/fonts/') || href.startsWith('/wp-images/')) {
      continue;
    }
    
    // Normalizza l'URL
    let normalizedHref = href.replace(/\/$/, '');
    if (!normalizedHref) normalizedHref = '/';
    
    if (!validRoutes.includes(normalizedHref)) {
      issues.brokenlLinks.push({
        file: pageFile,
        href: href,
        normalized: normalizedHref,
      });
    }
  }
}

if (issues.brokenlLinks.length === 0) {
  console.log('✅ Nessun link rotto trovato!\n');
} else {
  console.log(`❌ ${issues.brokenlLinks.length} link rotti trovati:\n`);
  issues.brokenlLinks.forEach(issue => {
    console.log(`  File: ${issue.file}`);
    console.log(`  Link: ${issue.href} (normalized: ${issue.normalized})`);
  });
  console.log();
}

console.log('📂 2. Verifica Asset (CSS, JS, Immagini)\n');

const assetsDirs = [
  'public/css',
  'public/js',
  'public/images',
  'public/fonts',
];

for (const dir of assetsDirs) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory non trovata: ${dir}`);
    issues.missingAssets.push(dir);
  } else {
    const files = fs.readdirSync(dir).length;
    console.log(`✅ ${dir}: ${files} file`);
  }
}
console.log();

console.log('🎨 3. Analisi CSS\n');

// Controlla il CSS per regole di dimensioni icone
const cssSample = fs.existsSync('public/css/style-main-new.min.css') 
  ? fs.readFileSync('public/css/style-main-new.min.css', 'utf8').substring(0, 5000)
  : '';

if (cssSample.includes('icon')) {
  console.log('✅ CSS contiene regole per icone');
} else {
  console.log('⚠️  CSS non contiene regole per icone evidenti');
}

// Controlla per media queries
if (cssSample.includes('@media')) {
  console.log('✅ CSS contiene media queries (responsive)');
} else {
  console.log('⚠️  CSS non ha media queries');
}
console.log();

console.log('🔧 4. Verifica Configurazione del Progetto\n');

// Leggi next.config.js
const nextConfigPath = 'next.config.js';
if (fs.existsSync(nextConfigPath)) {
  const config = fs.readFileSync(nextConfigPath, 'utf8');
  console.log('✅ next.config.js trovato');
  
  if (config.includes('trailingSlash: true')) {
    console.log('✅ Trailing slash abilitato');
  }
  
  if (config.includes("output: 'export'")) {
    console.log('✅ Static export abilitato');
  }
  
  if (config.includes('unoptimized: true')) {
    console.log('✅ Image optimization disabilitato (ok per export statico)');
  }
} else {
  console.log('❌ next.config.js non trovato');
}
console.log();

console.log('📄 5. Verifica package.json\n');

if (fs.existsSync('package.json')) {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(`✅ Version: ${pkg.version}`);
  console.log(`✅ Next: ${pkg.dependencies.next}`);
  console.log(`✅ React: ${pkg.dependencies.react}`);
  console.log('✅ Build script:', pkg.scripts.build);
  console.log('✅ Dev script:', pkg.scripts.dev);
} else {
  console.log('❌ package.json non trovato');
}
console.log();

console.log('📋 RIASSUNTO\n');
console.log('='.repeat(60));
console.log(`Link rotti: ${issues.brokenlLinks.length}`);
console.log(`Asset mancanti: ${issues.missingAssets.length}`);
console.log(`Pages configurate: ${pagesToCheck.filter(p => fs.existsSync(p)).length}/${pagesToCheck.length}`);
console.log(`Routes disponibili: ${validRoutes.length}`);
console.log('='.repeat(60) + '\n');

if (issues.brokenlLinks.length > 0) {
  console.log('⚠️  Azioni consigliate:');
  console.log('1. Controllare i link nei file page.tsx');
  console.log('2. Verificare che tutte le route siano nel validRoutes');
  console.log('3. Creare pagine mancanti se necessario\n');
}

// Salva il report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    brokenLinks: issues.brokenlLinks.length,
    missingAssets: issues.missingAssets.length,
    totalPagesChecked: pagesToCheck.filter(p => fs.existsSync(p)).length,
    totalRoutesAvailable: validRoutes.length,
  },
  details: issues,
};

fs.writeFileSync('audit-report.json', JSON.stringify(report, null, 2));
console.log('📝 Report completo salvato in: audit-report.json');
