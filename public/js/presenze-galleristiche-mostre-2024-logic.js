
                var riquadroON = false;
                var segno = "";
                var testo1 = "";
                var testo2 = "";
                segno = "0";
                riquadro = false;
                if (document.getElementById("expandedImg")) riquadrigrigi(); else setTimeout(() => { if (document.getElementById("expandedImg")) riquadrigrigi(); }, 300);
                
                function riquadrigrigi() {
                    //Metto la prima immagine e relativi testi
                    var expandImg = document.getElementById("expandedImg");
                    expandImg.src = "/images/PG01X.jpg";
                    testo1="<p><i>Bottega ceramica Fratelli Mastro,<br> Grottaglie, anni Cinquanta.<br>foto Devincentis</i><br><br> La foto racconta il lavoro nella bottega ceramica che fu di mio nonno e di mio padre. Racconta un tempo in cui l’argilla veniva impastata a piedi nudi, gli smalti erano prodotti in bottega e i forni erano a legna. Poi, nella seconda metà del secolo scorso, tutto cambia: il vetro, la plastica e la produzione industriale di ceramica d’uso, mette fine ad un modo di vivere e fare ceramica raccontato in questa foto.</p>";
                    testo2="</i><p7></p7>";

                    var imgText2 = document.getElementById("imgtext2");
                    var imgText3 = document.getElementById("imgtext3");

                    imgText2.innerHTML = testo1;
                    imgText3.innerHTML = testo2;
                    
                    //I tre riquadri in grigio e senza bordo
                    var riquadroA = document.getElementById("riquadroAimg");
                    var riquadroB = document.getElementById("riquadroBimg");
                    var riquadroC = document.getElementById("riquadroCimg");

                    riquadroA.src = "/images/quagri.jpg";
                    riquadroB.src = "/images/quagri.jpg";
                    riquadroC.src = "/images/quagri.jpg";
                    
                    myBorder(1);

                }

                function riquadriabc(riquadro) {

                    switch (riquadro) {

                        case 'A':
                            var riquadroA = document.getElementById("riquadroAimg");
                            var expandImg = document.getElementById("expandedImg");

                            expandImg.src = riquadroA.src;

                            var controllo=Number(segno);
                            if (controllo==25) {
                                
                                testo1="";
                                testo2="";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;
                                
                            }
                            
                            if (controllo==2) {
                                
                                var imgText2 = document.getElementById("imgtext2");
                                
                                testo1="<p><i>Ceramiche Cosimo Mastro</i><br>foto Mastro, 1970</p>";
                                
                                imgText2.style.opacity = 1;
                                imgText2.innerHTML = testo1;
                                
                            }
                            
                            if (controllo==14) {
                                
                                testo1="Nel laboratorio di un amico ebanista, ho realizzato le cornici “conservative Acid-free” in queste foto. Grazie al suo aiuto ho progettato e realizzato le migliori cornici possibili per i miei Disegni-collage. Lavorare in prima persona su un proprio progetto, è un fatto naturale per chi come me viene dalla bottega. È un aspetto distintivo, caratterizzante della mia formazione artistica e professionale.";

                                var imgText4 = document.getElementById("imgtext4");
                                
                                imgText4.style.opacity = 1;
                                imgText4.innerHTML = testo1;
                                
                            }
                            
                            if (controllo==15) {
                                
                                testo1="In continuità con il progetto per le cornici, ho disegnato e realizzato i raccoglitori per i disegni - formato A3 e A4 - che con queste foto, ho voluto ricordare. La necessità di album su misura da doversi inventare, mi ha portato in legatoria, a lavorare la carta, a imparare da quest’arte.";

                                var imgText4 = document.getElementById("imgtext4");
                                
                                imgText4.style.opacity = 1;
                                imgText4.innerHTML = testo1;
                                
                            }
                            
                            if (controllo==24) {
                                
                                testo1="<p><i>Casa Mastro, anni Novanta<br>interni Mastro<br>foto Mastro, 2000</i></p>";

                                var imgText2 = document.getElementById("imgtext2");
                                
                                imgText2.style.opacity = 1;
                                imgText2.innerHTML = testo1;
                                
                            }
                            
                        break;

                        case 'B':
                            var riquadroB = document.getElementById("riquadroBimg");
                            var expandImg = document.getElementById("expandedImg");

                            expandImg.src = riquadroB.src;

                            var controllo=Number(segno);
                            if (controllo==25) {
                                
                                testo1="";
                                testo2="";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;
                                
                            }
                            
                             if (controllo==24) {
                                
                                testo1="<p><i>Casa Mastro, anni Novanta<br>interni Mastro<br>foto Mastro, 2000</i></p>";

                                var imgText2 = document.getElementById("imgtext2");
                                
                                imgText2.style.opacity = 1;
                                imgText2.innerHTML = testo1;
                                
                            }
                                  
                        break;

                        case 'C': 
                            var riquadroC = document.getElementById("riquadroCimg");
                            var expandImg = document.getElementById("expandedImg");

                            expandImg.src = riquadroC.src;
                                
                        break;

                        default: 


                    }

                }
                
                
                function clickAvanti() {
                //Rendo invisibile la riga di testo sotto i 3 riquadri immagine
                 var imgText4 = document.getElementById("imgtext4");
                imgText4.style.opacity = 0;
                
                 /* Rendo invisibili i riquadri che altrimenti
                si sovrappongono al testosx */
                var riquadroA = document.getElementById("riquadroAimg");
                var riquadroB = document.getElementById("riquadroBimg");
                var riquadroC = document.getElementById("riquadroCimg");
                                
                riquadroA.style.opacity = 0;
                riquadroB.style.opacity = 0;
                riquadroC.style.opacity = 0;
                // Get the expanded image
                if (segno === '0' || segno ==='' || segno=== 0) {
                    var imgCounter = document.getElementById("imgCounter");
                    var intCounter = Number(imgCounter.alt);
                    intCounter = intCounter+1;
                    if (intCounter > 28) intCounter=28;
                        imgCounter.alt = String(intCounter);
                        imgCounter = "img" + String(intCounter);
                        var imgSorgente = document.getElementById(imgCounter);
                        var expandImg = document.getElementById("expandedImg");
                        expandImg.src = imgSorgente.src;
                        
                        myBorder(intCounter);
                       
                    } else {
                        segno = Number(segno) + 1;
                        if (segno > 28) segno=28;
                        var imgCounter = document.getElementById(segno);
                        imgCounter.alt = segno;
                        imgCounter = "img" + segno;
                        var imgSorgente = document.getElementById(imgCounter);
                        var expandImg = document.getElementById("expandedImg");
                        expandImg.src = imgSorgente.src;  
                        
                        myBorder(segno);

                     }
                }

                function clickIndietro() {
                //Rendo invisibile la riga di testo sotto i 3 riquadri immagine
                var imgText4 = document.getElementById("imgtext4");
                imgText4.style.opacity = 0;
                
                 /* Rendo invisibili i riquadri che altrimenti
                si sovrappongono al testosx */
                var riquadroA = document.getElementById("riquadroAimg");
                var riquadroB = document.getElementById("riquadroBimg");
                var riquadroC = document.getElementById("riquadroCimg");
                                
                riquadroA.style.opacity = 0;
                riquadroB.style.opacity = 0;
                riquadroC.style.opacity = 0;
                    
                    if (segno === '0'|| segno ==='' || segno === 0) {
                    var imgCounter = document.getElementById("imgCounter");
                    var intCounter = Number(imgCounter.alt);
                    intCounter = intCounter - 1;
                    if (intCounter < 1) intCounter=1;
                        imgCounter.alt = String(intCounter);
                        imgCounter = "img" + String(intCounter);
                        var imgSorgente = document.getElementById(imgCounter);
                        var expandImg = document.getElementById("expandedImg");
                        expandImg.src = imgSorgente.src;

                        myBorder(intCounter);

                    } else {
                        segno = Number(segno) - 1;
                        if (segno < 1) segno=1;
                        var imgCounter = document.getElementById(segno);
                        imgCounter.alt = segno;
                        imgCounter = "img" + segno;
                        var imgSorgente = document.getElementById(imgCounter);
                        var expandImg = document.getElementById("expandedImg");
                        expandImg.src = imgSorgente.src;   

                        myBorder(segno);
                        
                     }
                }


                function myFunction(idImg) {
                //Rendo invisibile la riga di testo sotto i 3 riquadri immagine
                 var imgText4 = document.getElementById("imgtext4");
                imgText4.style.opacity = 0;
                
                 /* Rendo invisibili i riquadri che altrimenti
                si sovrappongono al testosx */
                var riquadroA = document.getElementById("riquadroAimg");
                var riquadroB = document.getElementById("riquadroBimg");
                var riquadroC = document.getElementById("riquadroCimg");
                                
                riquadroA.style.opacity = 0;
                riquadroB.style.opacity = 0;
                riquadroC.style.opacity = 0;
                
                // Get the expanded image
                var imgSorgente = document.getElementById(idImg);
                var expandImg = document.getElementById("expandedImg");
                expandImg.src = imgSorgente.src;
                
                // Show the container element (hidden with CSS)
                expandImg.parentElement.style.display = "block";
                }

                function myBorder(idBorder) {
                    var numero = Number(idBorder);
                    var conta = 0;
                    var testo1 = "";
                    var testo2 = "";
                    segno = idBorder;
                    
                    //Prima di farmi il giro per cambiare i bordi imposto le scritte
                    //immagine centrale
                    switch (segno) {
                            case '1':
                            case 1:
                                testo1="<p><i>Bottega ceramica Fratelli Mastro,<br> Grottaglie, anni Cinquanta.<br>foto Devincentis</i><br><br> La foto racconta il lavoro nella bottega ceramica che fu di mio nonno e di mio padre. Racconta un tempo in cui l’argilla veniva impastata a piedi nudi, gli smalti erano prodotti in bottega e i forni erano a legna. Poi, nella seconda metà del secolo scorso, tutto cambia: il vetro, la plastica e la produzione industriale di ceramica d’uso, mette fine ad un modo di vivere e fare ceramica raccontato in questa foto.</p>";
                                testo2="";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                                
                                 /* Rendo invisibili i riquadri che altrimenti
                                 si sovrappongono al testosx */
                                 var riquadroA = document.getElementById("riquadroAimg");
                                 var riquadroB = document.getElementById("riquadroBimg");
                                 var riquadroC = document.getElementById("riquadroCimg");
                                
                                riquadroA.style.opacity = 0;
                                riquadroB.style.opacity = 0;
                                riquadroC.style.opacity = 0;
                               
                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;
                                
                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '2':
                            case 2:
                                testo1="<p><i>Cosimo Mastro, ceramista </i><br>foto Mastro, 1970<br></p>";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                                
                                var riquadroA = document.getElementById("riquadroAimg");
                                
                                riquadroA.style.opacity = 1;
                                
                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                
                                riquadroA.src = "/images/PG02_bX.jpg";
                                
                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '3':
                            case 3:
                                testo1="<p><i>Si fa voce - due</i>, 2003<br>terracotta<br>h cm 1, Ø cm 19<br></p>";
                                testo2="<p7>codice DUE a4, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                                
                                
                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;
                                
                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '4':
                            case 4:
                                testo1="<p><i>Si fa voce - tre</i>, 2004<br>terracotta<br>h cm 2, Ø cm 15<br><br>Il tema figurato di queste due terrecotte viene da un discorso sul teatro greco di Friedrich Nietzsche. Il loro racconto, più che una traduzione in immagini di quel discorso, è un suo specchiamento, una sua risonanza elettiva. Realizzate nella Bottega Vestita con argille e tecnica pittorica del V secolo a.C., parlano greco, per ciò che sono e dicono.</p>";
                                testo2="<p7>codice DUE a5, n.19</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                                
                                var riquadroA = document.getElementById("riquadroAimg");
                                
                                riquadroA.style.opacity = 0;

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;
                                
                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '5':
                            case 5:
                                testo1="<p><i>Vasi raku - coppia</i>, 1986<br>terraglia invetriata<br>h cm 15, l cm 9, h cm 19, l cm 9<br><br>La ceramica raku è la più naturale e spirituale fra tutte le ceramiche storiche, antiche e moderne. È il controllo della terra, dell’acqua e del fuoco, attraverso un disciplinare semplice ed essenziale. È la ceramica delle ciotole, delle tazze, delle piccole cose, che il fuoco quasi ricrea per suo conto. Una pratica che non mi sono fatto mancare e con queste terrecotte, <i>fatte dal fuoco</i>, ho voluto ricordare.</p>";
                                testo2="<p7>OTT a7,n.13</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                                
                                var riquadroA = document.getElementById("riquadroAimg");
                                
                                riquadroA.style.opacity = 0;
                               
                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;
                                
                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '6':
                            case 6:
                                 testo1="<i>Coppe raku - coppia</i>, 1986<br>terraglia invetriata<br>h cm 4, Ø cm 18";
                                testo2="<p7>OTT a7, n.14</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '7':
                            case 7:
                                testo1="<i>Disegno per scultura</i>, 1986<br>matita su carta<br>h cm 50, l cm 70";
                                testo2="<p7>OTT a7, n15</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '8':
                            case 8:
                                testo1="<i>Disegno per scultura</i>, 1994<br>matita su carta<br>h cm 50, l cm 70";
                                testo2="<p7>NOV a5, n.15</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '9':
                            case 9: 
                                testo1="<i>Disegno per scultura</i>, 1998<br>matita su carta<br>h cm 40, l cm 29";
                                testo2="<p7>NOV a9, n.9</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;         
                            /////////////////////////////////////////////////////////////
                            case '10':
                            case 10: 
                                testo1="<i>Modelli per scultura</i>, 1986<br>terraglia forte<br>h cm 3,5, l cm 19, p cm 5";
                                testo2="<p7>OTT a7, n.16</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '11':
                            case 11: 
                                testo1="<i>Disegno per scultura</i>, 2007<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>DUE a8, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '12':
                            case 12: 
                                testo1="<i>Aula magna</i>, 2008<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>DUE a9, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '13':
                            case 13: 
                                testo1="<i>Altare - zero</i>, 1981<br>bronzo<br>h cm.16, l cm.21, p cm.36";
                                testo2="<p7>OTT a2, n.12</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                
                                riquadroA.src = "/images/PG13_bX.jpg";
                                
                                riquadroA.style.opacity = 1;
                                
                                var riquadroON = true;
                            break;
                          /////////////////////////////////////////////////////////////
                            case '14':
                            case 14: 
                                testo1="<i>Cornici Acid - free</i>, 2008<br>mogano<br>h cm.47, l cm.47"
                                testo2="Nel laboratorio di un amico ebanista, ho realizzato le cornici 'conservative Acid-free' in queste foto. Grazie al suo aiuto ho progettato e realizzato le migliori cornici possibili per i miei <i>Disegni-collage</i>. Lavorare in prima persona su un proprio progetto, è un fatto naturale per chi come me viene dalla bottega. È un aspetto distintivo, caratterizzante della mia formazione artistica e professionale.";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = "";

                                var riquadroA = document.getElementById("riquadroAimg");
                                var imgText4 = document.getElementById("imgtext4")
                                
                                riquadroA.src = "/images/PX14_bX.jpg";
                                
                                imgText4.innerHTML = testo2;
                                imgText4.style.opacity = 1;
                                riquadroA.style.opacity = 1;
                                
                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '15':
                            case 15: 
                                testo1="<i>Contenitore per disegni</i> 2006<br>Cartone telato<br>h cm.47, l cm.20, p cm.36";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                
                                riquadroA.src = "/images/PG15_bX.jpg";
                                
                                riquadroA.style.opacity = 1;
                                
                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////segno 20/04
                            case '16':
                            case 16: 
                                testo1="<i>Foto anni Settanta - uno</i><br>foto Mastro<br>";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '17':
                            case 17: 
                                testo1="<i>Foto anni Settanta - due</i><br>foto Mastro<br>";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '18':
                            case 18: 
                                testo1="<i>Penombra</i><br>foto Mastro, 1976<br>";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '19':
                            case 19: 
                                testo1="<i>Controluce</i><br>foto Mastro, 2000<br>";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '20':
                            case 20: 
                                testo1="<i>Circolo magico</i><br>foto Mastro, 2001<br>";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                               
                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '21':
                            case 21: 
                                testo1="<i>Mascherine</i><br>foto Mastro, 1998<br>";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;

                            break;
                            /////////////////////////////////////////////////////////////
                            case '22':
                            case 22: 
                                 testo1="<i>Astratto simbolico - due</i><br>foto Mastro, 1996<br>";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '23':
                            case 23: 
                                testo1="<i>Sculture Mastro</i><br>foto Mastro, 1997<br>";
                                testo2="<p7></p7>";
                                
                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '24':
                            case 24: 
                                testo1="<i>Casa Mastro</i>, fine Ottocento<br>foto autore sconosciuto<br>";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                
                                riquadroA.src = "/images/PG24_bX.jpg";
                                riquadroB.src = "/images/PG24_cX.jpg";
                                
                                riquadroA.style.opacity = 1;
                                riquadroB.style.opacity = 1;
                                
                                var riquadroON = true;
                            break;
                             /////////////////////////////////////////////////////////////
                            default:
                                testo1="";
                                testo2="";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;

                        }

                    //Controllo se le immagini in riquadro devono essere visibili o meno
                    if (riquadroON === false) {
                        var riquadroA = document.getElementById("riquadroAimg");
                        var riquadroB = document.getElementById("riquadroBimg");
                        var riquadroC = document.getElementById("riquadroCimg");

                        riquadroA.src = "/images/quagri.jpg";
                        riquadroB.src = "/images/quagri.jpg";
                        riquadroC.src = "/images/quagri.jpg";
                    }

                    //Controllo di essere in un range accettabile e cambio i bordi a tutte le immagini
                    if (numero > 0 && numero < 25) {
                        let contenitore=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];
                        i = 0;
                        do {
                            conta = Number(contenitore[i]);
                            if (conta == numero) {
                                document.getElementById(idBorder).style.borderColor = "white";
                                document.getElementById(idBorder).style.opacity = "100%";
                            } else {
                                document.getElementById(contenitore[i]).style.borderColor = "#777777"; 
                                document.getElementById(contenitore[i]).style.opacity = "55%";
                            }
                            i = i + 1;
                        } while (i < 24);
                        
                    }                              
                }

            