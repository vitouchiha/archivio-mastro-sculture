const fs = require('fs');
const path = require('path');

const jsDirs = [
    path.join(__dirname, 'public', 'js'),
    path.join(__dirname, 'public', 'js', 'en')
];
const imgDir = path.join(__dirname, 'public', 'images');

// 1. Build an index of all images inside /images
let imageIndex = {};

function scanImages(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const fullPath = path.join(dir, f);
        if (fs.statSync(fullPath).isDirectory()) {
            scanImages(fullPath);
        } else if (f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png') || f.toLowerCase().endsWith('.jpeg')) {
            const relPathStr = fullPath.replace(imgDir, '').replace(/\\/g, '/');
            // If duplicate names exist, prefer the one under /gallery or the latest one, but for now just keep the first found or index all
            // we'll just store the first one found, assuming names are unique
            if (!imageIndex[f]) {
                imageIndex[f] = '/images' + relPathStr;
            }
        }
    }
}

scanImages(imgDir);

// 2. Loop over JS files and replace paths
for (const jDir of jsDirs) {
    if (!fs.existsSync(jDir)) continue;
    const files = fs.readdirSync(jDir).filter(f => f.endsWith('.js'));
    
    for (const f of files) {
        const fullPath = path.join(jDir, f);
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        // Replace any path like .src = "/images/XXXX.jpg" or .src = "https://..../XXXX.jpg"
        const newContent = content.replace(/\.src\s*=\s*['"]([^'"]+)['"]/g, (match, url) => {
            const filename = url.split('/').pop();
            // Look up the filename in our index
            if (imageIndex[filename]) {
                const correctUrl = imageIndex[filename];
                if (url !== correctUrl) {
                    modified = true;
                    return `.src = "${correctUrl}"`;
                }
            } else {
                console.warn(`Warning: Image ${filename} not found in public/images!`);
            }
            return match;
        });

        if (modified) {
            fs.writeFileSync(fullPath, newContent, 'utf8');
            console.log(`Updated paths in: ${path.join(path.basename(jDir), f)}`);
        }
    }
}
console.log("Done checking and fixing image paths in JS.");