const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const translate = require('google-translate-api-x');

const delay = ms => new Promise(res => setTimeout(res, ms));

async function main() {
    const enDir = path.join(__dirname, 'src', 'app', 'en');
    
    // Some basic check if text is likely not needing translation (e.g. already full english)
    // Optional, but lets just translate all to be safe.
    
    async function translateHtml(html) {
        const $ = cheerio.load(html, null, false);
        const elementsToTranslate = [];
        
        $('.elementor-widget-text-editor > .elementor-widget-container, .elementor-heading-title, .elementor-icon-box-title, .elementor-icon-box-description, .pt-cv-title, .pt-cv-content').each((i, el) => {
             elementsToTranslate.push(el);
        });

        for (let i = 0; i < elementsToTranslate.length; i++) {
            let el = elementsToTranslate[i];
            const originalHtml = $(el).html();
            
            if (!originalHtml || originalHtml.trim().length === 0) continue;
            if (!/[a-zA-Z]/.test(originalHtml)) continue;

            try {
                if ($(el).find('style, script').length > 0) {
                   const innerElements = $(el).find('p, h1, h2, h3, h4, h5, h6, li, span');
                   for(let innerE of innerElements) {
                       const ih = $(innerE).html();
                       // Translate only if it looks like it has words and is longer than a few chars
                       if(ih && /[a-zA-Z]{3,}/.test(ih)) {
                           let textToTrans = ih;
                           const res = await translate(textToTrans, {from: 'it', to: 'en'});
                           $(innerE).html(res.text);
                           await delay(50);
                       }
                   }
                } else {
                   const res = await translate(originalHtml, {from: 'it', to: 'en'});
                   $(el).html(res.text);
                   await delay(50);
                }
            } catch(e) {
                console.error("Translation error on snippet:", e.message);
            }
        }
        
        return $.html();
    }

    async function processDirectory(dir) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                await processDirectory(fullPath);
            } else if (file.endsWith('page.tsx')) {
                console.log("Translating: ", fullPath.replace(__dirname, ''));
                let content = fs.readFileSync(fullPath, 'utf8');
                
                const match = content.match(/__html:\s*`([\s\S]*?)`\s*\}\}\s*\/>/);
                if(match) {
                    let insideHtml = match[1];
                    let translated = await translateHtml(insideHtml);
                    
                    content = content.replace(match[0], `__html: \`${translated.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\` }}\ \/>`);
                    fs.writeFileSync(fullPath, content);
                }
            }
        }
    }

    await processDirectory(enDir);
    console.log("TSX Translation Complete");
}

main().catch(console.error);