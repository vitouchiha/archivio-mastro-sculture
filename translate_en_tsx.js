const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

async function main() {
    const translateMod = await import('translate');
    const translate = translateMod.default;
    translate.engine = 'google';

    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function translateHtml(html) {
        const $ = cheerio.load(html, null, false);
        const elementsToTranslate = [];
        
        // Elementor text editors and headers
        $('.elementor-widget-text-editor > .elementor-widget-container, .elementor-heading-title, .elementor-icon-box-title, .elementor-icon-box-description').each((i, el) => {
             elementsToTranslate.push(el);
        });

        for (let i = 0; i < elementsToTranslate.length; i++) {
            let el = elementsToTranslate[i];
            const originalHtml = $(el).html();
            
            if (!originalHtml || originalHtml.trim().length === 0) continue;
            if (!/[a-zA-Z]/.test(originalHtml)) continue;

            try {
                if ($(el).find('style').length > 0) {
                   const innerElements = $(el).find('p, h1, h2, h3, h4, h5, h6, li');
                   for(let innerE of innerElements) {
                       const ih = $(innerE).html();
                       if(ih && /[a-zA-Z]/.test(ih)) {
                           const res = await translate(ih, {from: 'it', to: 'en'});
                           $(innerE).html(res);
                           await delay(200); // rate limiting
                       }
                   }
                } else {
                   const result = await translate(originalHtml, {from: 'it', to: 'en'});
                   $(el).html(result);
                   await delay(200);
                }
            } catch(e) {
                console.error("Translation error:", e.message);
            }
        }
        
        return $.html();
    }

    const enDir = path.join(__dirname, 'src', 'app', 'en');
    
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
                    
                    // Cheerio might escape some things or we just rebuild it
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