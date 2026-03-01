const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const translate = require('google-translate-api-x');

const delay = ms => new Promise(res => setTimeout(res, ms));

async function main() {
    const enDir = path.join(__dirname, 'src', 'app', 'en');
    
    // Gather all leaf tsx files
    function getFiles(dir, fileList = []) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const stat = fs.statSync(path.join(dir, file));
            if (stat.isDirectory()) {
                getFiles(path.join(dir, file), fileList);
            } else if (file.endsWith('page.tsx')) {
                fileList.push(path.join(dir, file));
            }
        }
        return fileList;
    }
    
    const allFiles = getFiles(enDir);
    
    for (const currentFile of allFiles) {
        console.log(`Processing file: ${currentFile.split(path.sep).slice(-3).join('/')}`);
        let content = fs.readFileSync(currentFile, 'utf8');
        
        // Find all blocks globally
        const matches = [...content.matchAll(/dangerouslySetInnerHTML=\{\{\s*__html:\s*`([\s\S]*?)`\s*\}\}\s*\/>/g)];
        let newContent = content;
        let modified = false;

        for (const match of matches) {
            let htmlStr = match[1];
            
            // Skip purely inline styles
            if (htmlStr.trim().startsWith('<style') && !htmlStr.includes('<div')) {
                continue;
            }
            
            const $ = cheerio.load(htmlStr, null, false);
            
            let nodesToTranslate = [];
            // We want to translate text directly inside these tags, or deep text nodes.
            // Using a recursive collect allows us to only touch direct text nodes so structure is preserved.
            function collectTextNodes(node) {
                if (node.type === 'text') {
                    const text = node.data;
                    // Ignore empty nodes or nodes that are purely whitespace/numbers/punctuation
                    if (text && /[a-zA-Z\u00C0-\u017F]{3,}/.test(text.trim())) {
                         const parentName = node.parent ? node.parent.name : null;
                         if (parentName !== 'style' && parentName !== 'script' && parentName !== 'a') {
                             nodesToTranslate.push(node);
                         } else if (parentName === 'a' && node.parent.attribs && !node.parent.attribs['data-nonce']) {
                             // translate links too but ignore scripts/nonces
                             nodesToTranslate.push(node);
                         }
                    }
                } else if (node.type === 'tag' && node.name !== 'script' && node.name !== 'style') {
                    for (const child of node.children) {
                        collectTextNodes(child);
                    }
                }
            }
            
            // start root collection
            $.root()[0].children.forEach(n => collectTextNodes(n));

            if (nodesToTranslate.length > 0) {
                console.log(`  Found ${nodesToTranslate.length} text nodes to translate...`);
                let batchCount = 0;
                for (const node of nodesToTranslate) {
                    const text = node.data;
                    const leadingSpacing = text.match(/^\s*/)[0];
                    const trailingSpacing = text.match(/\s*$/)[0];
                    const coreText = text.trim();
                    
                    try {
                        const res = await translate(coreText, {from: 'it', to: 'en'});
                        node.data = leadingSpacing + res.text + trailingSpacing;
                        batchCount++;
                        if (batchCount % 10 === 0) process.stdout.write('.');
                        await delay(50);
                    } catch(e) {
                        console.error('\n  [!] Translation failed for text:', coreText.substring(0, 30), '... Error:', e.message);
                    }
                }
                console.log('\n  Translation batch complete.');

                let newHtmlStr = $.html();
                // We have to escape backticks again if they exist in translated strings or HTML
                const escapedHtmlStr = newHtmlStr.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
                
                // Replace in the overall content
                newContent = newContent.replace(match[0], `dangerouslySetInnerHTML={{ __html: \`${escapedHtmlStr}\` }} />`);
                modified = true;
            }
        }
        
        if (modified) {
            fs.writeFileSync(currentFile, newContent, 'utf8');
            console.log(`  -> Saved ${currentFile.split(path.sep).slice(-3).join('/')}`);
        }
    }
}

main().catch(console.error);