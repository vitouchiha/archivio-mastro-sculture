import fs from 'fs';

const PATH_IN = 'descriptions_map.json';
const PATH_OUT = 'descriptions_clean.json';

const data = JSON.parse(fs.readFileSync(PATH_IN, 'utf-8'));

function parseExtendedDescription(testo1, testo2) {
  let description = '';
  
  if (testo1 && typeof testo1 === 'string') {
     // sometimes testo1 contains the "La foto racconta..." after <br><br>
     const parts = testo1.split(/<br\s*\/?>\s*<br\s*\/?>/i);
     if (parts.length > 1) {
       // Everything after the first double br is usually the description
       const desc = parts.slice(1).join('<br><br>');
       description += desc;
     }
  }

  if (testo2 && typeof testo2 === 'string') {
    // Some testo2 include stuff like `<p7>codice: ...</p7><br><p><i>Primo premio...`
    // We want to skip the codice part but keep the rest
    let t2Raw = testo2.replace(/<p7>.*?<\/p7>/ig, '').trim();
    // Sometimes there are other tags, but we also want the text inside <p> or <i>
    t2Raw = t2Raw.replace(/<br\s*\/?>/ig, '\n');
    t2Raw = t2Raw.replace(/<\/p>|<\/div>/ig, '\n');
    t2Raw = t2Raw.replace(/<[^>]+>/g, '').trim();
    
    // There are texts in testo2 that are just "codice: SES a10, n.1"
    if (t2Raw.toLowerCase().startsWith('codice:')) {
       // Ignore standalone "codice: ..."
       t2Raw = '';
    }
    
    // There are texts like "Nel laboratorio di un amico..."
    // or "Opera vincitrice del concorso..."
    if (t2Raw.length > 10) {
      if (description) description += '\n\n';
      description += t2Raw;
    }
  }
  
  // Clean up any remaining HTML tags from the description
  if (description) {
    description = description.replace(/<[^>]+>/g, ' ').replace(/\s{2,}/g, ' ').trim();
  }
  
  return description;
}

const cleanData = {};

for (const [key, arr] of Object.entries(data)) {
  cleanData[key] = arr.map((item, index) => {
    if (!item) return null;
    const desc = parseExtendedDescription(item.testo1, item.testo2);
    return {
      index,
      description: desc || null
    };
  });
}

fs.writeFileSync(PATH_OUT, JSON.stringify(cleanData, null, 2));
console.log('Finished producing ' + PATH_OUT);
