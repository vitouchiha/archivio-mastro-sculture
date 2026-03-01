const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for(const f of files) {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) {
            replaceInDir(p);
        } else if (p.endsWith('.tsx')) {
            let c = fs.readFileSync(p, 'utf8');
            let o = c;
            
            c = c.replace(/href="\/en\/esperienze-giovanili-1964-1977-2\/?"/g, 'href="/en/esperienze-giovanili-1964-1977/"');
            c = c.replace(/href="\/esperienze-giovanili-1964-1977-2\/?"/g, 'href="/esperienze-giovanili-1964-1977/"');
            c = c.replace(/href="\/en\/geometrie-elementari-1986-1997-2\/?"/g, 'href="/en/geometrie-elementari-1986-1997/"');
            c = c.replace(/href="\/geometrie-elementari-1986-1997-2\/?"/g, 'href="/geometrie-elementari-1986-1997/"');
            
            if(c !== o) {
                fs.writeFileSync(p, c);
                console.log('Fixed links in', p);
            }
        }
    }
}
replaceInDir(path.join(__dirname, 'src', 'app'));
