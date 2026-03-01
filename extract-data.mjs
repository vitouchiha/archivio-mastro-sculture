import fs from 'fs';
import * as cheerio from 'cheerio';
import path from 'path';

const pagesToScrape = [
  { file: 'presentazione_index.html', route: 'presentazione' },
  { file: 'biografia_index.html', route: 'biografia' },
  { file: 'esperienze-giovanili_index.html', route: 'esperienze-giovanili' },
  { file: 'astrazioni-simboliche_index.html', route: 'astrazioni-simboliche' },
  { file: 'geometrie-elementari_index.html', route: 'geometrie-elementari' },
  { file: 'figurazioni-parte-prima_index.html', route: 'figurazioni-parte-prima' },
  { file: 'figurazioni-parte-seconda_index.html', route: 'figurazioni-parte-seconda' },
  { file: 'disegni-collage_index.html', route: 'disegni-collage' },
  { file: 'gallery_index.html', route: 'gallery' },
  { file: 'dispense_index.html', route: 'dispense' },
  { file: 'contact_index.html', route: 'contact' },
];

const results = {};

for (const page of pagesToScrape) {
  const filePath = path.join('wordpress-mirror', page.file);
  if (!fs.existsSync(filePath)) continue;
  
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);
  
  const pageData = {
    title: $('title').text().trim(),
    contentBlocks: [],
    images: []
  };
  
  $('.elementor-widget-text-editor').each((i, el) => {
    // preserve important HTML like <p>, <strong>, <a> if possible, or just raw text
    pageData.contentBlocks.push($(el).html().trim());
  });

  $('.elementor-widget-heading h1, .elementor-widget-heading h2, .elementor-widget-heading h3').each((i, el) => {
    pageData.contentBlocks.push({ type: 'heading', tag: el.tagName.toLowerCase(), text: $(el).text().trim() });
  });

  $('img').each((i, el) => {
    const src = $(el).attr('src');
    const alt = $(el).attr('alt') || '';
    if (src && !src.includes('data:image')) {
      pageData.images.push({ src, alt });
    }
  });

  results[page.route] = pageData;
}

fs.writeFileSync('scraped-data.json', JSON.stringify(results, null, 2));
console.log('Successfully scraped data and saved to scraped-data.json');