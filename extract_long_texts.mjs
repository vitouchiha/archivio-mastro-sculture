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
    // If it's not just a code like <p7>codice...</p7>, but an actual text
    // E.g. "Nel laboratorio di un amico ebanista..."
    const t2NoDocs = testo2.replace(/<p7>.*<\/p7>/ig, '').replace(/<[^>]+>/g, '').trim();
    if (t2NoDocs.length > 20 && !t2NoDocs.startsWith('codice:')) {
      if (description) description += '\n\n';
      description += t2NoDocs;
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
