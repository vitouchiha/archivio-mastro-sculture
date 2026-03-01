const fs = require('fs');
const path = require('path');

const jsDir = path.join(__dirname, 'public', 'js');
const files = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));

let allPaths = new Set();

for (const file of files) {
    const code = fs.readFileSync(path.join(jsDir, file), 'utf8');
    const matches = code.match(/\.src\s*=\s*['"]([^'"]+)['"]/g);
    if (matches) {
        for (const m of matches) {
            const p = m.match(/['"]([^'"]+)['"]/)[1];
            allPaths.add(p);
        }
    }
}

console.log([...allPaths]);
