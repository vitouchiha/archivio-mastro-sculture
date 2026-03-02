// Gallery sub-images (additional detail photos per artwork, 1-based index)
// and section intro descriptions
// Maps section key -> image-index (1-based) -> sub-image paths
export const subImages: Record<string, Record<number, string[]>> = {
  eg: {
    20: ['/images/2023/01/EGX20-a.jpg', '/images/2023/01/EGX20-b.jpg', '/images/2023/01/EGX20-c.jpg'],
    22: ['/images/2023/01/EGX22-a.jpg', '/images/2023/01/EGX22-b.jpg'],
    24: ['/images/2023/01/EGX24-a.jpg', '/images/2023/01/EGX24-b.jpg'],
  },
  as: {
    1:  ['/images/2023/04/01ASXa.jpg'],
    2:  ['/images/2023/04/02ASXa.jpg'],
    15: ['/images/2023/04/15ASXa.jpg'],
    25: ['/images/2023/04/25ASXa.jpg', '/images/2023/04/25ASXb.jpg'],
  },
  ge: {},
  fp1: {
    1:  ['/images/2023/04/FRX01a.jpg'],
    4:  ['/images/2023/04/FRX04a.jpg'],
    5:  ['/images/2023/04/FRX05a.jpg'],
    6:  ['/images/2023/04/FRX06a.jpg'],
    8:  ['/images/2023/04/FRX08a.jpg'],
    9:  ['/images/2023/04/FRX09a.jpg'],
    11: ['/images/2023/04/FRX11a.jpg'],
    14: ['/images/2023/04/FRX14a.jpg'],
    16: ['/images/2023/04/FRX16a.jpg'],
    17: ['/images/2023/04/FRX17a.jpg'],
    19: ['/images/2023/04/FRX19a.jpg'],
    21: ['/images/2023/04/FRX21a.jpg'],
    22: ['/images/2023/04/FRX22a.jpg'],
    24: ['/images/2023/04/FRX24a.jpg'],
    26: ['/images/2023/04/FRX26a.jpg'],
    27: ['/images/2023/04/FRX27a.jpg'],
  },
  fp2: {
    1:  ['/images/2023/05/FX01a.jpg'],
    4:  ['/images/2023/05/FX04a.jpg'],
    6:  ['/images/2023/05/FX06a.jpg'],
    9:  ['/images/2023/05/FX09a.jpg'],
    10: ['/images/2023/05/FX10a.jpg'],
    11: ['/images/2023/05/FX11a.jpg'],
    14: ['/images/2023/05/FX14a.jpg'],
  },
  dc: {},
}

export const sectionDescriptions: Record<string, string> = {
  eg: 'Sono opere in legno, in ceramica e in bronzo, realizzate negli anni delle prime esperienze professionali e artistiche. Raccontano un vissuto creativo aperto all\u2019arte della ceramica, della lavorazione del legno e del metallo.',
  as: 'Sono progetti e modelli in bronzo per grandi sculture all\u2019aperto. Le loro tematiche plastiche si riferiscono ad alcuni archetipi della figurazione simbolica: l\u2019idea di \u201cFertilit\u00e0 e Maternit\u00e0\u201d, del \u201cMaschile e del Femminile\u201d, della \u201cRigenerazione e della Rinascita\u201d, le \u201cMaschere del Sacro\u201d e altre simbologie e figurazioni nella storia e nel racconto della scultura.',
  ge: 'In continuit\u00e0 con le ricerche plastiche degli anni \u201870 e \u201880, queste opere sono studi per sculture in pietra o in bronzo, pensate per grandi spazi all\u2019aperto. Ancora pi\u00f9 astratte e lineari delle precedenti, cercano, nella purezza e bellezza del segno geometrico, le \u201cgeometrie elementari\u201d, l\u2019\u201cevocativo\u201d, gli \u201cuniversali\u201d nel racconto dei segni e dei simboli della figurazione.',
  fp1: 'Piccole, leggere, quasi senza corpo, sono racconti per immagini, nel linguaggio senza tempo, universale della scultura. Realizzate in profilati e lamine di ottone lavorato a sbalzo, alcune sono figurazioni \u201castratto-geometriche\u201d, altre, le pi\u00f9 descrittive, le pi\u00f9 figurative, sono \u201cpensieri, suggestioni, emozioni\u201d diventate scultura.',
  fp2: 'Piccole, leggere, quasi senza corpo, sono racconti per immagini, nel linguaggio senza tempo, universale della scultura. Realizzate in profilati e lamine di ottone lavorato a sbalzo, alcune sono figurazioni \u201castratto-geometriche\u201d, altre, le pi\u00f9 descrittive, le pi\u00f9 figurative, sono \u201cpensieri, suggestioni, emozioni\u201d diventate scultura.',
  dc: 'In questa raccolta di opere grafiche vi sono disegni su temi poi sviluppati in scultura. Esaurito il compito di schizzi, di abbozzi, di disegni preparatori per quelle opere, hanno assunto valenza e significato in un altro racconto, sono diventate un\u2019intera raccolta, la \u201cvoce grafica\u201d delle sculture degli anni Novanta e Duemila.',
}
