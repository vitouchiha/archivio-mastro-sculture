import fs from 'fs';
import path from 'path';

console.log('🔧 Fix dei link errati nel HTML\n');

const replacements = [
  {
    pattern: /href="\/\?pagename=contact"/g,
    replacement: 'href="/contact/"',
    description: 'Link legacy contact /?pagename=contact → /contact/'
  },
  {
    pattern: /href="\/figurazioni-racconti-1998-2004\/"/g,
    replacement: 'href="/figurazioni-racconti-1998-2004-parte-prima/"',
    description: 'Link generico figurazioni → parte-prima'
  },
  {
    pattern: /href="\/figurazioni-racconti-1998-2004(?!-parte)\/"/g,
    replacement: 'href="/figurazioni-racconti-1998-2004-parte-prima/"',
    description: 'Link figurazioni senza suffisso → parte-prima'
  }
];

const pagesToFix = [
  'src/app/page.tsx',
  'src/app/presentazione/page.tsx',
  'src/app/biografia/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/gallery/page.tsx',
];

let totalFixed = 0;

for (const page of pagesToFix) {
  if (!fs.existsSync(page)) continue;
  
  let content = fs.readFileSync(page, 'utf8');
  const originalLength = content.length;
  
  for (const { pattern, replacement, description } of replacements) {
    const matches = content.match(pattern);
    if (matches) {
      console.log(`📝 ${page}`);
      console.log(`   ${description}: ${matches.length} occorrenze`);
      content = content.replace(pattern, replacement);
      totalFixed += matches.length;
    }
  }
  
  // Scrivi solo se c'è stato un cambio
  if (content.length !== originalLength) {
    fs.writeFileSync(page, content);
  }
}

console.log(`\n✅ Fix completati: ${totalFixed} link corretti`);
