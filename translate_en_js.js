const fs = require('fs');
const path = require('path');

const delay = ms => new Promise(res => setTimeout(res, ms));

async function main() {
    const translateMod = await import('translate');
    const translate = translateMod.default;
    translate.engine = 'google';

    const enJsDir = path.join(__dirname, 'public', 'js', 'en');
    
    const files = fs.readdirSync(enJsDir);
    
    for (const file of files) {
        if (!file.endsWith('.js')) continue;
        console.log("Translating logic JS:", file);
        
        let content = fs.readFileSync(path.join(enJsDir, file), 'utf8');
        
        // Match testo1="..."; and testo2="...";
        const regex1 = /testo1\s*=\s*"([^"]*)";/g;
        const regex2 = /testo2\s*=\s*"([^"]*)";/g;
        
        let matches1 = [...content.matchAll(regex1)];
        let matches2 = [...content.matchAll(regex2)];
        
        for(let match of matches1) {
            let innerText = match[1];
            if (innerText.trim().length > 0 && /[a-zA-Z]/.test(innerText)) {
                try {
                    let textToTranslate = innerText.replace(/\\"/g, '"');
                    let translated = await translate(textToTranslate, {from: 'it', to: 'en'});
                    translated = translated.replace(/"/g, '\\"');
                    content = content.replace(match[0], `testo1="${translated}";`);
                    await delay(100);
                } catch(e) {
                    console.log("err:", e.message);
                }
            }
        }

        for(let match of matches2) {
            let innerText = match[1];
            if (innerText.trim().length > 0 && /[a-zA-Z]/.test(innerText)) {
                // "codice" should not necessarily be translated but we can just let google do it (codice -> code)
                try {
                    let textToTranslate = innerText.replace(/\\"/g, '"');
                    let translated = await translate(textToTranslate, {from: 'it', to: 'en'});
                    translated = translated.replace(/"/g, '\\"');
                    content = content.replace(match[0], `testo2="${translated}";`);
                    await delay(100);
                } catch(e) {}
            }
        }
        
        fs.writeFileSync(path.join(enJsDir, file), content);
    }
    console.log("JS Translation Complete");
}

main().catch(console.error);