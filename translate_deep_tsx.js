const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const translate = require('google-translate-api-x');

const delay = ms => new Promise(res => setTimeout(res, ms));

async function translateText(text) {
    if (!text || !/[a-zA-Z]{3,}/.test(text)) return text;
    try {
        const res = await translate(text, {from: 'it', to: 'en'});
        await delay(50);
        return res.text;
    } catch(e) {
        console.error("Trans err:", e.message);
        return text;
    }
}

async function main() {
    const enDir = path.join(__dirname, 'src', 'app', 'en');
    
    async function processDirectory(dir) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                await processDirectory(fullPath);
            } else if (file.endsWith('page.tsx')) {
                console.log("Translating text blocks in: ", fullPath.replace(__dirname, ''));
                let content = fs.readFileSync(fullPath, 'utf8');
                
                const match = content.match(/__html:\s*`([\s\S]*?)`\s*\}\}\s*\/>/);
                if(match) {
                    let html = match[1];
                    let $ = cheerio.load(html, null, false);
                    
                    // Specific targets
                    const targets = $('p, h1, h2, h3, h4, h5, h6, .elementor-button-text, .wpforms-field-label, label, button, .elementor-icon-box-title, .elementor-icon-box-description, span');
                    
                    for (let i = 0; i < targets.length; i++) {
                        let el = $(targets[i]);
                        // Only translate leaf nodes or nodes with only text/br/b/i
                        const children = el.children();
                        let hasComplexKids = false;
                        children.each((idx, k) => {
                            if (!['br','b','i','strong','em','span'].includes(k.name)) {
                                hasComplexKids = true;
                            }
                        });
                        
                        if (!hasComplexKids) {
                            let currHtml = el.html();
                            if(currHtml && /[a-zA-Z]{3,}/.test(currHtml)) {
                                let transHtml = await translateText(currHtml);
                                el.html(transHtml);
                            }
                        }
                    }
                    
                    let translatedStr = $.html();
                    content = content.replace(match[0], `__html: \`${translatedStr.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\` }}\ \/>`);
                    fs.writeFileSync(fullPath, content);
                }
            }
        }
    }

    await processDirectory(enDir);
    console.log("Deep text Translation Complete");
}

main().catch(console.error);