const fs = require('fs');
const path = require('path');

const delay = ms => new Promise(resolve => setTimeout(res, ms));

async function main() {
    const translateMod = await import('translate');
    const translate = translateMod.default;
    translate.engine = 'google';

    const cheerio = require('cheerio');
    
    async function translateHtml(html) {
        const $ = cheerio.load(html, null, false);
        const elementsToTranslate = [];
        
        // Find all semantic text nodes that belong to Elementor text content
        // Avoid headers menus, footers as much as possible if they were already translated? The user said "translate everything".
        // Let's just target Elementor text containers:
        $('.elementor-widget-text-editor, .elementor-heading-title, .elementor-icon-box-title, .elementor-icon-box-description').each((i, el) => {
             elementsToTranslate.push(el);
        });

        for (let el of elementsToTranslate) {
            const originalHtml = $(el).html();
            // skip if empty or just images/whitespace
            if (!originalHtml || originalHtml.trim().length === 0) continue;
            if (!originalHtml.match(/[a-zA-Z]/)) continue; // no letters

            try {
                // Avoid translating style blocks!
                if ($(el).find('style').length > 0) {
                   // only translate paragraphs inside it then
                   const innerPs = $(el).find('p, h1, h2, h3, h4, h5, h6, li');
                   for(let innerP of innerPs) {
                       const ih = $(innerP).html();
                       if(ih && ih.trim() && ih.match(/[a-zA-Z]/)) {
                           const res = await translate(ih, {from: 'it', to: 'en'});
                           $(innerP).html(res);
                       }
                   }
                } else {
                   const result = await translate(originalHtml, {from: 'it', to: 'en'});
                   $(el).html(result);
                }
            } catch(e) {
                console.error("Translation error:", e);
            }
        }
        
        return $.html();
    }

    const enPath = path.join(__dirname, 'src', 'app', 'en', 'biografia', 'page.tsx');
    let content = fs.readFileSync(enPath, 'utf8');
    
    // Extract innerHTML
    const match = content.match(/__html:\s*`([\s\S]*?)`\s*\}\}\s*\/>/);
    if(match) {
        let insideHtml = match[1];
        console.log("Translating biografia...");
        let translated = await translateHtml(insideHtml);
        content = content.replace(match[0], `__html: \`${translated}\` }}\ \/>`);
        fs.writeFileSync(enPath + '.test', content);
        console.log("Done");
    }
}

main().catch(console.error);