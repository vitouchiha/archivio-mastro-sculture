import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('wordpress-mirror/biografia_index.html', 'utf8');
const $ = cheerio.load(html);
let output = '';
\.elementor-widget-text-editor.each((i, el) => {
    output += \.text().trim() + '\n---\n';
});
console.log(output.substring(0, 1000));
