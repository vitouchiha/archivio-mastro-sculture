const fs = require('fs');
const path = require('path');

const jsDir = path.join(__dirname, 'public', 'js');
const enJsDir = path.join(jsDir, 'en');

if (!fs.existsSync(enJsDir)) {
    fs.mkdirSync(enJsDir);
}

const templates = [
    '1989-2003-disegni-collage-logic.js',
    'astrazioni-simboliche-1978-1985-logic.js',
    'esperienze-giovanili-1964-1977-logic.js',
    'figurazioni-racconti-1998-2004-parte-prima-logic.js',
    'figurazioni-racconti-1998-2004-parte-seconda-logic.js',
    'geometrie-elementari-1986-1997-logic.js',
    'presenze-galleristiche-mostre-2024-logic.js',
    'gallery-logic.js'
];

templates.forEach(file => {
    if (fs.existsSync(path.join(jsDir, file))) {
        fs.copyFileSync(path.join(jsDir, file), path.join(enJsDir, file));
    }
});

// Update references in en/ pages
const enAppDir = path.join(__dirname, 'src', 'app', 'en');

function updateJsRefsPath(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            updateJsRefsPath(fullPath);
        } else if (file.endsWith('page.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            content = content.replace(/src="\/js\//g, 'src="/js/en/');
            content = content.replace(/src='\/js\//g, "src='/js/en/");
            fs.writeFileSync(fullPath, content);
        }
    }
}

updateJsRefsPath(enAppDir);
console.log('Successfully cloned JS logic for EN and updated page imports.');
