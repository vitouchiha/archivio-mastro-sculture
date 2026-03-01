import fs from 'fs';
import * as cheerio from 'cheerio';
import path from 'path';

const pagesToScrape = [
  { file: 'presentazione_index.html', route: 'presentazione' },
  { file: 'biografia_index.html', route: 'biografia' },
  { file: 'esperienze-giovanili_index.html', route: 'esperienze-giovanili-1964-1977' },
  { file: 'astrazioni-simboliche_index.html', route: 'astrazioni-simboliche-1978-1985' },
  { file: 'geometrie-elementari_index.html', route: 'geometrie-elementari-1986-1997' },
  { file: 'figurazioni-parte-prima_index.html', route: 'figurazioni-racconti-1998-2004-parte-prima' },
  { file: 'figurazioni-parte-seconda_index.html', route: 'figurazioni-racconti-1998-2004-parte-seconda' },
  { file: 'disegni-collage_index.html', route: '1989-2003-disegni-collage' },
  { file: 'dispense_index.html', route: 'dispense' },
  { file: 'contact_index.html', route: 'contact' },
];

for (const page of pagesToScrape) {
  const filePath = path.join('wordpress-mirror', page.file);
  if (!fs.existsSync(filePath)) continue;
  
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);
  
  // Clean up styles and empty divs
  $('style').remove();
  
  const extracts = [];
  
  // A heuristic to extract main elements sequentially
  $('.elementor-widget-container').each((i, el) => {
    const text = $(el).find('.elementor-widget-text-editor').text().trim();
    if (text) {
       // if there are multiple P tags, convert to html or keep array
       const htmlContent = $(el).find('.elementor-widget-text-editor').html();
       extracts.push({ type: 'text', content: htmlContent });
    } else {
       // Try and find headers
       const h2 = $(el).find('h2.elementor-heading-title').text().trim();
       if (h2) extracts.push({ type: 'heading', level: 2, text: h2 });
       
       // Try and find images
       const img = $(el).find('img').attr('src');
       if (img && !img.includes('data:image')) {
         extracts.push({ type: 'img', src: img.replace('https://www.archiviomastrosculture.it', ''), alt: $(el).find('img').attr('alt') || '' });
       }
    }
  });
  
  // Format the React page content
  const pageName = page.route.replace(/-./g, x=>x[1].toUpperCase()).replace(/^./, x=>x.toUpperCase());
  
  let reactContent = `import React from 'react';\nimport Image from 'next/image';\n\nexport default function ${pageName.replace(/[^a-zA-Z0-9]/g, '')}() {\n  return (\n    <div className="w-full min-h-screen bg-[#EBEBE9] py-12 px-4 md:px-16 text-[#111]">\n      <div className="max-w-[1200px] mx-auto">\n`;

  let blocks = [];
  if (page.route === 'gallery') {
    // specialized gallery
  } else {
    // Simple top-down layout
    // Let's use a cleaner approach: just find main text and specific images that aren't header/footer
    const mainImages = [];
    const mainTexts = [];
    
    // Some pages have galleries inside them! We must extract all images in Swiper or gallery blocks
    $('.gallery-item img, .elementor-image-gallery img, .elementor-widget-image img, .swiper-slide img').each((i, el) => {
      let src = $(el).attr('src');
      if (src && !src.includes('logo') && !src.includes('icon') && !src.includes('bandiera') && !src.includes('data:image')) {
         mainImages.push(src.replace('https://www.archiviomastrosculture.it', ''));
      }
    });

    // Remove duplicates
    const uniqueImages = [...new Set(mainImages)];
    
    // Texts
    $('.elementor-widget-text-editor').each((i, el) => {
      const ps = [];
      $(el).find('p, li').each((j, pel) => {
         const t = $(pel).text().trim();
         if (t) ps.push(t);
      });
      if (ps.length === 0) {
        // Just take direct text if no tags
        const t = $(el).text().trim();
         if (t) ps.push(t);
      }
      mainTexts.push(...ps);
    });
    
    const pageTitle = $('h2.elementor-heading-title').first().text().trim() || page.route.replace(/-/g, ' ').toUpperCase();

    reactContent += `        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-[#6C0001] uppercase tracking-wide border-b-2 border-gray-300 pb-4">${pageTitle}</h1>\n`;
    
    reactContent += `        <div className="flex flex-col gap-12">\n`;
    
    // Layout logic: if many images, display as a grid. If text, display as paragraphs.
    if (mainTexts.length > 0) {
      reactContent += `          <div className="text-lg leading-relaxed font-light space-y-6 text-gray-800 bg-white p-8 shadow-sm">\n`;
      mainTexts.forEach(t => {
         // escape quotes
         const safeText = t.replace(/"/g, '&quot;').replace(/'/g, '&apos;');
         reactContent += `            <p>${safeText}</p>\n`;
      });
      reactContent += `          </div>\n`;
    }
    
    if (uniqueImages.length > 0) {
      reactContent += `          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n`;
      uniqueImages.forEach((src, i) => {
        reactContent += `            <div className="bg-white p-4 shadow-sm">\n`;
        reactContent += `              <img src="${src}" alt="Gallery image ${i+1}" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300" />\n`;
        reactContent += `            </div>\n`;
      });
      reactContent += `          </div>\n`;
    }
    
    reactContent += `        </div>\n`;
  }
  
  reactContent += `      </div>\n    </div>\n  );\n}\n`;
  
  const destFile = path.join('src', 'app', page.route, 'page.tsx');
  fs.mkdirSync(path.dirname(destFile), { recursive: true });
  fs.writeFileSync(destFile, reactContent);
  console.log(`Generated ${destFile}`);
}
