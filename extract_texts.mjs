import fs from 'fs'
import path from 'path'
// import cheerio from 'cheerio'

const htmlDir = path.join(process.cwd(), 'wordpress-mirror')

const files = [
  { file: 'esperienze-giovanili_index.html', key: 'eg' },
  { file: 'astrazioni-simboliche_index.html', key: 'as' },
  { file: 'geometrie-elementari_index.html', key: 'ge' },
  { file: 'figurazioni-parte-prima_index.html', key: 'fp1' },
  { file: 'figurazioni-parte-seconda_index.html', key: 'fp2' },
  { file: 'disegni-collage_index.html', key: 'dc' },
  { file: 'gallery_index.html', key: 'pg' }
]

const results = {}

for (const { file, key } of files) {
  const filePath = path.join(htmlDir, file)
  if (!fs.existsSync(filePath)) continue
  const content = fs.readFileSync(filePath, 'utf8')
  
  // Trova lo script inline che ha var testo1="...", var testo2="..."
  // Solitamente in "function chiudi" o simili
  // Possiamo solo matchare `testoX="..."`
  
  const texts = {}
  
  // Cerchiamo le assegnazioni: testo1="<p>...</p>";
  // Attenzione: javascript usa escaping come \" e \'. Regex lazy:
  const regex1 = /testo(\d+)\s*=\s*"(.*?)";/gs
  
  let match
  while ((match = regex1.exec(content)) !== null) {
    const id = parseInt(match[1], 10)
    if (!texts[id]) texts[id] = []
    texts[id].push(match[2].replace(/\\"/g, '"').replace(/\\n/g, '<br/>'))
  }
  
  results[key] = texts
}

fs.writeFileSync('extracted_descriptions.json', JSON.stringify(results, null, 2))
console.log('Fatto!')

