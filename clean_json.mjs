import fs from 'fs';

const PATH_IN = 'extracted_descriptions.json';
const PATH_OUT = 'extracted_descriptions_clean.json';

const data = JSON.parse(fs.readFileSync(PATH_IN, 'utf-8'));

function cleanText(text) {
  if (!text) return text;
  return text
    // Replace encoding errors
    .replace(/â€™/g, "'")
    .replace(/Ã¨/g, "è")
    .replace(/Ã©/g, "é")
    .replace(/Ã/g, "à") // Usually Ã  is à, but sometimes the space is trimmed
    .replace(/â€“/g, "–")
    .replace(/â€œ/g, '"')
    .replace(/â€\x9D/g, '"')
    .replace(/â€/g, '"')
    .replace(/Â/g, '')
    // Clean up HTML tags and weird line breaks if needed, or just let them stay if they're standard p and i
    .replace(/\\"/g, '"');
}

function traverse(obj) {
  if (typeof obj === 'string') {
    return cleanText(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map(traverse);
  }
  if (typeof obj === 'object' && obj !== null) {
    const newObj = {};
    for (const [key, val] of Object.entries(obj)) {
      newObj[key] = traverse(val);
    }
    return newObj;
  }
  return obj;
}

const cleaned = traverse(data);

fs.writeFileSync(PATH_OUT, JSON.stringify(cleaned, null, 2));
console.log('Cleaned descrizioni scritte in ' + PATH_OUT);
