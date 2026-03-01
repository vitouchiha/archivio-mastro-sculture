const fs = require('fs');
const https = require('https');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');

let allMissingImages = new Set();
const scanHtmlFiles = () => {
    const htmlDir = path.join(__dirname, 'wordpress-mirror');
    if (!fs.existsSync(htmlDir)) return;
    const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html'));
    
    for (const f of files) {
        const content = fs.readFileSync(path.join(htmlDir, f), 'utf8');
        // Match both absolute and relative wp paths logic assignments
        const matches = content.match(/(https:\/\/www\.archiviomastrosculture\.it)?\/wp-content\/uploads\/(\d{4})\/(\d{2})\/([^\s"']+)\.(jpg|jpeg|png)/gi);
        if (matches) {
            matches.forEach(m => {
                if(!m.startsWith('http')) {
                    m = 'https://www.archiviomastrosculture.it' + m;
                }
                allMissingImages.add(m);
            });
        }
    }
}
scanHtmlFiles();

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(true);
                });
            } else {
                reject(new Error(`Failed ${url}: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function start() {
    for (const link of allMissingImages) {
        const match = link.match(/uploads\/(\d{4})\/(\d{2})\/(.+)$/);
        if (match) {
            const year = match[1];
            const month = match[2];
            const filename = match[3];
            
            const targetDir = path.join(imgDir, year, month);
            fs.mkdirSync(targetDir, { recursive: true });
            
            const targetFile = path.join(targetDir, filename);
            if (!fs.existsSync(targetFile)) {
                console.log(`Downloading: ${filename}`);
                try {
                    await downloadImage(link, targetFile);
                } catch(e) {
                    console.log(`Error: ${e.message}`);
                }
            }
        }
    }
    console.log("Secondary scan complete.");
}

start();
