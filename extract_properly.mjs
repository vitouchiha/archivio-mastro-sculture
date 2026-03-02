import fs from 'fs';
import path from 'path';

const files = {
  'astrazioni-simboliche_index.html': 'as',
  'esperienze-giovanili_index.html': 'eg',
  'gallery_index.html': 'pg',
  'geometrie-elementari_index.html': 'ge',
  'figurazioni-parte-prima_index.html': 'fp1',
  'figurazioni-parte-seconda_index.html': 'fp2',
  'disegni-collage_index.html': 'dc',
};

const finalData = {};

function cleanHTML(htmlTxt) {
  if (!htmlTxt) return '';
  return htmlTxt
    .replace(/â€™/g, "'")
    .replace(/Ã¨/g, "è")
    .replace(/Ã©/g, "é")
    .replace(/Ã/g, "à")
    .replace(/â€“/g, "–")
    .replace(/â€œ/g, '"')
    .replace(/â€\x9D/g, '"')
    .replace(/â€/g, '"')
    .replace(/Â/g, '')
    .replace(/\\"/g, '"');
}

for (const [file, key] of Object.entries(files)) {
  const p = path.join('wordpress-mirror', file);
  if (!fs.existsSync(p)) continue;

  const content = fs.readFileSync(p, 'utf-8');
  
  // They are mapped to case block: case "1": testo1="..."; testo2="...";
  // We can try extracting all cases for `case "\d+":` or `case 'A':` ??
  // Let's do a simple regex: /case\s+['"]?(\d+)['"]?\s*:.*?testo1\s*=\s*"(.*?)";.*?testo2\s*=\s*"(.*?)";/s, but maybe there's no `"` quote if it's empty
  
  // Simpler approach: find all occurrences of `testo1="something"` and `testo2="something"` grouped by `case 'number':`
  // since javascript might have variations, let's just split by `case ` 
  finalData[key] = [];
  
  const cases = content.split('case ');
  for (let block of cases) {
    const matchCase = block.match(/^['"]?(\d+)['"]?\s*:/);
    if (!matchCase) continue;
    const index = parseInt(matchCase[1], 10);
    
    let testo1 = '';
    let testo2 = '';
    
    // find testo1="..."
    const t1 = block.match(/testo1\s*=\s*"([^"]*)"/);
    if (t1) testo1 = t1[1];
    
    const t2 = block.match(/testo2\s*=\s*"([^"]*)"/);
    if (t2) testo2 = t2[1];
    
    finalData[key][index] = {
      testo1: cleanHTML(testo1),
      testo2: cleanHTML(testo2)
    };
  }
}

fs.writeFileSync('descriptions_map.json', JSON.stringify(finalData, null, 2));
console.log('Descriptions saved!');
