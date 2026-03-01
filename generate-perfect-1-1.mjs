import fs from 'fs';
import * as cheerio from 'cheerio';
import path from 'path';

const pagesToScrape = [
  { file: 'index.html', route: '' },
  { file: 'presentazione_index.html', route: 'presentazione' },
  { file: 'biografia_index.html', route: 'biografia' },
  { file: 'esperienze-giovanili_index.html', route: 'esperienze-giovanili-1964-1977' },
  { file: 'astrazioni-simboliche_index.html', route: 'astrazioni-simboliche-1978-1985' },
  { file: 'geometrie-elementari_index.html', route: 'geometrie-elementari-1986-1997' },
  { file: 'figurazioni-parte-prima_index.html', route: 'figurazioni-racconti-1998-2004-parte-prima' },
  { file: 'figurazioni-parte-seconda_index.html', route: 'figurazioni-racconti-1998-2004-parte-seconda' },
  { file: 'disegni-collage_index.html', route: '1989-2003-disegni-collage' },
  { file: 'gallery_index.html', route: 'gallery' },
  { file: 'dispense_index.html', route: 'dispense' },
  { file: 'contact_index.html', route: 'contact' },
];

for (const page of pagesToScrape) {
  const filePath = path.join('wordpress-mirror', page.file);
  if (!fs.existsSync(filePath)) continue;
  
  let html = fs.readFileSync(filePath, 'utf8');
  
  // Replace absolute URLs with relative ones for internal URLs
  html = html.replace(/https:\/\/www\.archiviomastrosculture\.it\//g, '/');
  
  const $ = cheerio.load(html);
  
  const bodyClasses = $('body').attr('class') || '';
  
  // Extract all <link rel="stylesheet"> and <style> from head
  let styles = '';
  $('head link[rel="stylesheet"], head style').each((i, el) => {
    // If href is relative, change to absolute from root
    if (el.tagName === 'link') {
       let href = $(el).attr('href');
       if (href && !href.startsWith('http') && !href.startsWith('/')) {
         $(el).attr('href', '/' + href);
       }
    }
    styles += $.html(el) + '\n';
  });

  // Fix all image src and links in body to be absolute from root
  $('*').each((i, el) => {
    const src = $(el).attr('src');
    if (src && !src.startsWith('http') && !src.startsWith('/') && !src.startsWith('data:')) {
      $(el).attr('src', '/' + src);
    }
    const href = $(el).attr('href');
    if (href && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#')) {
      $(el).attr('href', '/' + href);
    }
    const srcset = $(el).attr('srcset');
    if (srcset && !srcset.startsWith('http') && !srcset.startsWith('/')) {
        const newSrcset = srcset.split(',').map(s => {
            const parts = s.trim().split(' ');
            if (parts[0] && !parts[0].startsWith('http') && !parts[0].startsWith('/')) {
                parts[0] = '/' + parts[0];
            }
            return parts.join(' ');
        }).join(', ');
        $(el).attr('srcset', newSrcset);
    }
    
    let style = $(el).attr('style');
    if (style && style.includes('url(')) {
        style = style.replace(/url\(['"]?([^'"()]+)['"]?\)/g, (match, p1) => {
            if (!p1.startsWith('http') && !p1.startsWith('/') && !p1.startsWith('data:')) {
                return `url('/${p1}')`;
            }
            return match;
        });
        $(el).attr('style', style);
    }
  });

  // Scripts removal
  $('script').remove();
  
  const bodyContent = $('body').html() || '';
  const pageName = 'Page' + page.route.replace(/[^a-zA-Z0-9]/g, '');
  
  let reactContent = `import React from 'react';\n\n`;
  reactContent += `export default function ${pageName}() {\n`;
  reactContent += `  return (\n`;
  reactContent += `    <div className="${bodyClasses}">\n`;
  reactContent += `      <div dangerouslySetInnerHTML={{ __html: \`${styles.replace(/`/g, '\\`').replace(/\$/g, '\\$')} \` }} />\n`;
  reactContent += `      <div dangerouslySetInnerHTML={{ __html: \`${bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />\n`;
  reactContent += `    </div>\n`;
  reactContent += `  );\n`;
  reactContent += `}\n`;
  
  let destDir = path.join('src', 'app');
  if (page.route) {
    destDir = path.join(destDir, page.route);
  }
  const destFile = path.join(destDir, 'page.tsx');
  
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(destFile, reactContent);
  console.log(`Generated 1:1 page for ${page.route || 'home'} at ${destFile}`);
}
