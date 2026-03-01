'use client'
import { useState } from 'react'

const IMAGES = [
  { id: 1, thumb: '/images/gallery/PG01.jpg', full: '/images/gallery/PG01X.jpg', desc1: "<p><i>Bottega ceramica Fratelli Mastro,<br> Grottaglie, anni Cinquanta.<br>foto Devincentis</i><br><br> La foto racconta il lavoro nella bottega ceramica che fu di mio nonno e di mio padre. Racconta un tempo in cui l'argilla veniva impastata a piedi nudi, gli smalti erano prodotti in bottega e i forni erano a legna. Poi, nella seconda meta del secolo scorso, tutto cambia: il vetro, la plastica e la produzione industriale di ceramica d'uso, mette fine ad un modo di vivere e fare ceramica raccontato in questa foto.</p>", desc2: '', rA: null, rB: null, tb: null },
  { id: 2, thumb: '/images/gallery/PG02.jpg', full: '/images/gallery/PG02X.jpg', desc1: "<p><i>Cosimo Mastro, ceramista </i><br>foto Mastro, 1970<br></p>", desc2: '', rA: '/images/gallery/PG02_bX.jpg', rB: null, tb: null },
  { id: 3, thumb: '/images/gallery/PG03.jpg', full: '/images/gallery/PG03X.jpg', desc1: "<p><i>Si fa voce - due</i>, 2003<br>terracotta<br>h cm 1, &Oslash; cm 19<br></p>", desc2: '<p><small>codice DUE a4, n.4</small></p>', rA: null, rB: null, tb: null },
  { id: 4, thumb: '/images/gallery/PG04.jpg', full: '/images/gallery/PG04X.jpg', desc1: "<p><i>Si fa voce - tre</i>, 2004<br>terracotta<br>h cm 2, &Oslash; cm 15<br><br>Il tema figurato di queste due terrecotte viene da un discorso sul teatro greco di Friedrich Nietzsche.</p>", desc2: '<p><small>codice DUE a5, n.19</small></p>', rA: null, rB: null, tb: null },
  { id: 5, thumb: '/images/gallery/PG05.jpg', full: '/images/gallery/PG05X.jpg', desc1: "<p><i>Vasi raku - coppia</i>, 1986<br>terraglia invetriata<br>h cm 15, l cm 9, h cm 19, l cm 9<br><br>La ceramica raku e la piu naturale e spirituale fra tutte le ceramiche storiche, antiche e moderne.</p>", desc2: '<p><small>OTT a7,n.13</small></p>', rA: null, rB: null, tb: null },
  { id: 6, thumb: '/images/gallery/PG06.jpg', full: '/images/gallery/PG06X.jpg', desc1: "<i>Coppe raku - coppia</i>, 1986<br>terraglia invetriata<br>h cm 4, &Oslash; cm 18", desc2: '<p><small>OTT a7, n.14</small></p>', rA: null, rB: null, tb: null },
  { id: 7, thumb: '/images/gallery/PG07.jpg', full: '/images/gallery/PG07X.jpg', desc1: "<i>Disegno per scultura</i>, 1986<br>matita su carta<br>h cm 50, l cm 70", desc2: '<p><small>OTT a7, n15</small></p>', rA: null, rB: null, tb: null },
  { id: 8, thumb: '/images/gallery/PG08.jpg', full: '/images/gallery/PG08X.jpg', desc1: "<i>Disegno per scultura</i>, 1994<br>matita su carta<br>h cm 50, l cm 70", desc2: '<p><small>NOV a5, n.15</small></p>', rA: null, rB: null, tb: null },
  { id: 9, thumb: '/images/gallery/PG09.jpg', full: '/images/gallery/PG09X.jpg', desc1: "<i>Disegno per scultura</i>, 1998<br>matita su carta<br>h cm 40, l cm 29", desc2: '<p><small>NOV a9, n.9</small></p>', rA: null, rB: null, tb: null },
  { id: 10, thumb: '/images/gallery/PG10.jpg', full: '/images/gallery/PG10X.jpg', desc1: "<i>Modelli per scultura</i>, 1986<br>terraglia forte<br>h cm 3,5, l cm 19, p cm 5", desc2: '<p><small>OTT a7, n.16</small></p>', rA: null, rB: null, tb: null },
  { id: 11, thumb: '/images/gallery/PG11.jpg', full: '/images/gallery/PG11X.jpg', desc1: "<i>Disegno per scultura</i>, 2007<br>matita su carta<br>h cm 28, l cm 21", desc2: '<p><small>DUE a8, n.1</small></p>', rA: null, rB: null, tb: null },
  { id: 12, thumb: '/images/gallery/PG12.jpg', full: '/images/gallery/PG12X.jpg', desc1: "<i>Aula magna</i>, 2008<br>matita su carta<br>h cm 28, l cm 21", desc2: '<p><small>DUE a9, n.1</small></p>', rA: null, rB: null, tb: null },
  { id: 13, thumb: '/images/gallery/PG13.jpg', full: '/images/gallery/PG13X.jpg', desc1: "<i>Altare - zero</i>, 1981<br>bronzo<br>h cm.16, l cm.21, p cm.36", desc2: '<p><small>OTT a2, n.12</small></p>', rA: '/images/gallery/PG13_bX.jpg', rB: null, tb: null },
  { id: 14, thumb: '/images/gallery/PG14.jpg', full: '/images/gallery/PG14X.jpg', desc1: "<i>Cornici Acid - free</i>, 2008<br>mogano<br>h cm.47, l cm.47", desc2: '', rA: '/images/gallery/PX14_bX.jpg', rB: null, tb: "Nel laboratorio di un amico ebanista, ho realizzato le cornici 'conservative Acid-free' in queste foto. Lavorare in prima persona su un proprio progetto, e un fatto naturale per chi come me viene dalla bottega." },
  { id: 15, thumb: '/images/gallery/PG15.jpg', full: '/images/gallery/PG15X.jpg', desc1: "<i>Contenitore per disegni</i> 2006<br>Cartone telato<br>h cm.47, l cm.20, p cm.36", desc2: '', rA: '/images/gallery/PG15_bX.jpg', rB: null, tb: "In continuita con il progetto per le cornici, ho disegnato e realizzato i raccoglitori per i disegni - formato A3 e A4 - che con queste foto, ho voluto ricordare." },
  { id: 16, thumb: '/images/gallery/PG16.jpg', full: '/images/gallery/PG16X.jpg', desc1: "<i>Foto anni Settanta - uno</i><br>foto Mastro<br>", desc2: '', rA: null, rB: null, tb: null },
  { id: 17, thumb: '/images/gallery/PG17.jpg', full: '/images/gallery/PG17X.jpg', desc1: "<i>Foto anni Settanta - due</i><br>foto Mastro<br>", desc2: '', rA: null, rB: null, tb: null },
  { id: 18, thumb: '/images/gallery/PG18.jpg', full: '/images/gallery/PG18X.jpg', desc1: "<i>Penombra</i><br>foto Mastro, 1976<br>", desc2: '', rA: null, rB: null, tb: null },
  { id: 19, thumb: '/images/gallery/PG19.jpg', full: '/images/gallery/PG19X.jpg', desc1: "<i>Controluce</i><br>foto Mastro, 2000<br>", desc2: '', rA: null, rB: null, tb: null },
  { id: 20, thumb: '/images/gallery/PG20.jpg', full: '/images/gallery/PG20X.jpg', desc1: "<i>Circolo magico</i><br>foto Mastro, 2001<br>", desc2: '', rA: null, rB: null, tb: null },
  { id: 21, thumb: '/images/gallery/PG21.jpg', full: '/images/gallery/PG21X.jpg', desc1: "<i>Mascherine</i><br>foto Mastro, 1998<br>", desc2: '', rA: null, rB: null, tb: null },
  { id: 22, thumb: '/images/gallery/PG22.jpg', full: '/images/gallery/PG22X.jpg', desc1: "<i>Astratto simbolico - due</i><br>foto Mastro, 1996<br>", desc2: '', rA: null, rB: null, tb: null },
  { id: 23, thumb: '/images/gallery/PG23.jpg', full: '/images/gallery/PG23X.jpg', desc1: "<i>Sculture Mastro</i><br>foto Mastro, 1997<br>", desc2: '', rA: null, rB: null, tb: null },
  { id: 24, thumb: '/images/gallery/PG24.jpg', full: '/images/gallery/PG24X.jpg', desc1: "<i>Casa Mastro</i>, fine Ottocento<br>foto autore sconosciuto<br>", desc2: '', rA: '/images/gallery/PG24_bX.jpg', rB: '/images/gallery/PG24_cX.jpg', tb: null },
]

const GREY_SQ = '/images/gallery/quagri.jpg'
const EMPTY_T = '/images/gallery/Quadrato-Vuoto.jpg'

export default function GalleryPage() {
  const [sel, setSel] = useState(1)
  const [rSrc, setRSrc] = useState<string | null>(null)
  const cur = IMAGES[sel - 1]
  const mainSrc = rSrc ?? cur.full
  function pick(id: number) { setSel(id); setRSrc(null) }
  function next() { setSel(p => Math.min(p + 1, 24)); setRSrc(null) }
  function prev() { setSel(p => Math.max(p - 1, 1)); setRSrc(null) }
  function riq(src: string | null) { if (src) setRSrc(src) }

  const th = (id: number): React.CSSProperties => ({
    width: 80, height: 80, border: `4px solid ${id === sel ? '#ffffff' : '#777777'}`,
    opacity: id === sel ? 1 : 0.55, cursor: 'pointer', boxSizing: 'border-box',
    overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
  })
  const left = IMAGES.slice(0, 14)
  const right = IMAGES.slice(14, 24)
  const lRows: (typeof IMAGES[0] | null)[][] = Array.from({length:7},(_,i)=>[left[i*2]??null,left[i*2+1]??null])
  const rRows: (typeof IMAGES[0] | null)[][] = Array.from({length:7},(_,i)=>[right[i*2]??null,right[i*2+1]??null])
  const CELL = { padding: 1 }
  return (
    <div className="main-content">
      <div style={{background:'#777777',minHeight:'100vh',padding:'30px 20px',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{width:1000,maxWidth:'100%',marginBottom:16,color:'#fff',fontSize:13,lineHeight:'14px',fontFamily:'Arial,Helvetica,sans-serif'}}>
          <p>In questa foto-raccolta, oltre a nuove opere in archivio, troveranno spazio altre esperienze professionali e di laboratorio, quali la fotografia, la ceramica, il designer ed altre attivita progettuali.</p>
        </div>
        <div style={{width:1000,maxWidth:'100%',display:'flex',height:650}}>
          <div style={{width:175,flexShrink:0}}>
            <table style={{width:165,height:650,borderCollapse:'collapse',border:'none'}}><tbody>
              {lRows.map((row,ri)=>(
                <tr key={ri} style={{height:80}}>{row.map((img,ci)=>(
                  <td key={ci} style={CELL}>{img
                    ? <div style={th(img.id)} onClick={()=>pick(img.id)}><img src={img.thumb} alt={String(img.id)} style={{width:80,display:'block'}}/></div>
                    : <div style={{width:80,height:80,border:'4px solid #777777'}}><img src={EMPTY_T} alt="" style={{width:80,display:'block'}}/></div>
                  }</td>
                ))}</tr>
              ))}
            </tbody></table>
          </div>
          <div style={{width:700,flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <button onClick={prev} style={{background:'none',border:'none',cursor:'pointer',margin:'0 7px'}} aria-label="Precedente">
              <img src="/images/gallery/icona-sx.png" alt="prev" style={{width:20}}/>
            </button>
            <div style={{width:630,height:630,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
              <img src={mainSrc} alt={`Immagine ${sel}`} style={{maxWidth:630,maxHeight:630,objectFit:'contain',display:'block'}}/>
            </div>
            <button onClick={next} style={{background:'none',border:'none',cursor:'pointer',margin:'0 7px'}} aria-label="Successivo">
              <img src="/images/gallery/icona_dx.png" alt="next" style={{width:20}}/>
            </button>
          </div>
          <div style={{width:175,flexShrink:0}}>
            <table style={{width:165,height:650,borderCollapse:'collapse',border:'none'}}><tbody>
              {rRows.map((row,ri)=>(
                <tr key={ri} style={{height:80}}>{row.map((img,ci)=>(
                  <td key={ci} style={CELL}>{img
                    ? <div style={th(img.id)} onClick={()=>pick(img.id)}><img src={img.thumb} alt={String(img.id)} style={{width:80,display:'block'}}/></div>
                    : <div style={{width:80,height:80,border:'4px solid #777777'}}><img src={EMPTY_T} alt="" style={{width:80,display:'block'}}/></div>
                  }</td>
                ))}</tr>
              ))}
            </tbody></table>
          </div>
        </div>
        <div style={{width:1000,maxWidth:'100%',display:'flex',height:160,marginTop:10}}>
          <div style={{width:10,height:60,backgroundImage:'url(/images/gallery/linea-rossa.jpg)',flexShrink:0,marginLeft:203}}/>
          <div style={{marginLeft:-37,flex:1,maxWidth:610,color:'#fff',fontSize:13,lineHeight:'14px',fontFamily:'Arial,Helvetica,sans-serif',marginTop:10}} dangerouslySetInnerHTML={{__html:cur.desc1}}/>
          <div style={{marginLeft:-125,width:130,color:'#fff',fontSize:10,lineHeight:'8px',fontFamily:'Arial,Helvetica,sans-serif',textAlign:'right',marginTop:10}} dangerouslySetInnerHTML={{__html:cur.desc2}}/>
        </div>
        <div style={{width:1000,maxWidth:'100%',display:'flex',marginTop:0}}>
          <div style={{width:270,flexShrink:0}}/>
          {([cur.rA,cur.rB,null] as (string|null)[]).map((src,i)=>(
            <div key={i} style={{width:90,flexShrink:0,cursor:src?'pointer':'default'}} onClick={()=>riq(src)}>
              <div style={{marginTop:-180,height:80,width:80,marginLeft:-5}}>
                <img src={src??GREY_SQ} alt="" style={{width:80,height:80,display:'block'}}/>
              </div>
            </div>
          ))}
        </div>
        {cur.tb && (
          <div style={{width:625,maxWidth:'100%',color:'#fff',fontSize:13,lineHeight:'14px',fontFamily:'Arial,Helvetica,sans-serif',marginTop:10,alignSelf:'flex-start',marginLeft:'calc(50% - 312px)'}} dangerouslySetInnerHTML={{__html:cur.tb}}/>
        )}
      </div>
    </div>
  )
}