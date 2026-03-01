import fs from 'fs'; import * as ch from 'cheerio'; const html = fs.readFileSync('wordpress-mirror/index.html'); const \$ = ch.load(html); console.log(\header.html().substring(0, 1000));
