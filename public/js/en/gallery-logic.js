
                var riquadroON = false;
                var segno = "";
                var testo1 = "";
                var testo2 = "";
                window.onload = segno = "0";
                window.onload = riquadro = false;
                if (document.getElementById('expandedImg')) riquadrigrigi(); else setTimeout(() => { if (document.getElementById('expandedImg')) riquadrigrigi(); }, 300);
                
                function riquadrigrigi() {
                    //Metto la prima immagine e relativi testi
                    var expandImg = document.getElementById("expandedImg");
                    expandImg.src = "/images/2024/07/PG01X.jpg";
                    testo1="<p><i>Fratelli Mastro ceramic workshop,<br> Grottaglie, 1950s.<br>photo Devincentis</i><br><br> The photo tells of the work in the ceramic workshop that belonged to my grandfather and my father. It tells of a time when the clay was kneaded barefoot, the glazes were produced in the workshop and the ovens were wood-fired. Then, in the second half of the last century, everything changed: glass, plastic and the industrial production of everyday ceramics put an end to a way of living and making ceramics described in this photo.</p>";
                    testo2="</i><p7></p7>";

                    var imgText2 = document.getElementById("imgtext2");
                    var imgText3 = document.getElementById("imgtext3");

                    imgText2.innerHTML = testo1;
                    imgText3.innerHTML = testo2;
                    
                    //I tre riquadri in grigio e senza bordo
                    var riquadroA = document.getElementById("riquadroAimg");
                    var riquadroB = document.getElementById("riquadroBimg");
                    var riquadroC = document.getElementById("riquadroCimg");

                    riquadroA.src = "/images/2023/02/quagri.jpg";
                    riquadroB.src = "/images/2023/02/quagri.jpg";
                    riquadroC.src = "/images/2023/02/quagri.jpg";
                    
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
                                
                                testo1="<p><i>Cosimo Mastro ceramics</i><br>photo Mastro, 1970</p>";
                                
                                imgText2.style.opacity = 1;
                                imgText2.innerHTML = testo1;
                                
                            }
                            
                            if (controllo==14) {
                                
                                testo1="In the workshop of a cabinetmaker friend, I created the “conservative Acid-free” frames in these photos. Thanks to his help I designed and created the best possible frames for my collage drawings. Working personally on your own project is a natural thing for someone like me who comes from the workshop. It is a distinctive aspect, characterizing my artistic and professional training.";

                                var imgText4 = document.getElementById("imgtext4");
                                
                                imgText4.style.opacity = 1;
                                imgText4.innerHTML = testo1;
                                
                            }
                            
                            if (controllo==15) {
                                
                                testo1="In continuity with the project for the frames, I designed and created the binders for the drawings - A3 and A4 format - which I wanted to remember with these photos. The need for tailor-made albums to be invented led me to bookbinding, to work with paper, to learn from this art.";

                                var imgText4 = document.getElementById("imgtext4");
                                
                                imgText4.style.opacity = 1;
                                imgText4.innerHTML = testo1;
                                
                            }
                            
                            if (controllo==24) {
                                
                                testo1="<p><i>Mastro house, nineties<br>Mastro interiors<br>photo Mastro, 2000</i></p>";

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
                                
                                testo1="<p><i>Mastro house, nineties<br>Mastro interiors<br>photo Mastro, 2000</i></p>";

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
                                testo1="<p><i>Fratelli Mastro ceramic workshop,<br> Grottaglie, 1950s.<br>photo Devincentis</i><br><br> The photo tells of the work in the ceramic workshop that belonged to my grandfather and my father. It tells of a time when the clay was kneaded barefoot, the glazes were produced in the workshop and the ovens were wood-fired. Then, in the second half of the last century, everything changed: glass, plastic and the industrial production of everyday ceramics put an end to a way of living and making ceramics described in this photo.</p>";
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
                                testo1="<p><i>Cosimo Mastro, ceramist </i><br>photo Mastro, 1970<br></p>";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                                
                                var riquadroA = document.getElementById("riquadroAimg");
                                
                                riquadroA.style.opacity = 1;
                                
                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                
                                riquadroA.src = "/images/2024/07/PG02_bX.jpg";
                                
                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '3':
                            case 3:
                                testo1="<p><i>There is a voice - two</i>, 2003<br>terracotta<br>h 1 cm, Ø 19 cm<br></p>";
                                testo2="<p7>code DUE a4, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                                
                                
                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;
                                
                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '4':
                            case 4:
                                testo1="<p><i>There is a voice - three</i>, 2004<br>terracotta<br>h 2 cm, Ø 15 cm<br><br>The figurative theme of these two terracottas comes from a speech on Greek theater by Friedrich Nietzsche. Their story, rather than a translation of that speech into images, is a mirroring of it, an elective resonance of it. Made in the Vestita workshop with clays and pictorial techniques from the 5th century BC, they speak Greek, for what they are and what they say.</p>";
                                testo2="<p7>code DUE a5, n.19</p7>";

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
                                testo1="<p><i>Raku vases - pair</i>, 1986<br>glazed earthenware<br>h 15 cm, w 9 cm, h 19 cm, w 9 cm<br><br>Raku ceramics are the most natural and spiritual of all historical, ancient and modern ceramics. It is the control of earth, water and fire, through a simple and essential specification. It is the ceramic of bowls, cups, small things, which the fire almost recreates on its own. A practice that I did not miss and with these terracottas, <i>made by fire</i>, I wanted to remember.</p>";
                                testo2="<p7>OCT a7,n.13</p7>";

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
                                 testo1="<i>Raku cups - pair</i>, 1986<br>glazed earthenware<br>h 4 cm, Ø 18 cm";
                                testo2="<p7>OCT a7, n.14</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '7':
                            case 7:
                                testo1="<i>Drawing for sculpture</i>, 1986<br>pencil on paper<br>h 50 cm, w 70 cm";
                                testo2="<p7>OCT a7, n15</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '8':
                            case 8:
                                testo1="<i>Drawing for sculpture</i>, 1994<br>pencil on paper<br>h 50 cm, w 70 cm";
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
                                testo1="<i>Drawing for sculpture</i>, 1998<br>pencil on paper<br>h 40 cm, w 29 cm";
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
                                testo1="<i>Models for sculpture</i>, 1986<br>strong earthenware<br>h 3.5 cm, w 19 cm, d 5 cm";
                                testo2="<p7>OCT a7, n.16</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '11':
                            case 11: 
                                testo1="<i>Drawing for sculpture</i>, 2007<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>TWO a8, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '12':
                            case 12: 
                                testo1="<i>Aula magna</i>, 2008<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>TWO a9, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '13':
                            case 13: 
                                testo1="<i>Altar - zero</i>, 1981<br>bronze<br>h 16 cm, w 21 cm, d 36 cm";
                                testo2="<p7>OCT a2, n.12</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                
                                riquadroA.src = "/images/2024/07/PG13_bX.jpg";
                                
                                riquadroA.style.opacity = 1;
                                
                                var riquadroON = true;
                            break;
                          /////////////////////////////////////////////////////////////
                            case '14':
                            case 14: 
                                testo1="<i>Cornici Acid - free</i>, 2008<br>mogano<br>h cm.47, l cm.47"
                                testo2="In the workshop of a cabinetmaker friend, I created the 'conservative Acid-free' frames in these photos. Thanks to his help I designed and created the best possible frames for my <i>Collage Drawings</i>. Working personally on your own project is a natural thing for someone like me who comes from the workshop. It is a distinctive aspect, characterizing my artistic and professional training.";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = "";

                                var riquadroA = document.getElementById("riquadroAimg");
                                var imgText4 = document.getElementById("imgtext4")
                                
                                riquadroA.src = "/images/2024/07/PX14_bX.jpg";
                                
                                imgText4.innerHTML = testo2;
                                imgText4.style.opacity = 1;
                                riquadroA.style.opacity = 1;
                                
                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '15':
                            case 15: 
                                testo1="<i>Container for drawings</i> 2006<br>Lined cardboard<br>h 47 cm, w 20 cm, d 36 cm";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                
                                riquadroA.src = "/images/2024/07/PG15_bX.jpg";
                                
                                riquadroA.style.opacity = 1;
                                
                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////segno 20/04
                            case '16':
                            case 16: 
                                testo1="<i>Photo from the seventies - one</i><br>photo Mastro<br>";
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
                                testo1="<i>Seventies photos - two</i><br>Mastro photos<br>";
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
                                testo1="<i>Penumbra</i><br>photo Mastro, 1976<br>";
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
                                testo1="<i>Backlight</i><br>photo Mastro, 2000<br>";
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
                                testo1="<i>Magic Circle</i><br>photo Mastro, 2001<br>";
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
                                testo1="<i>Masks</i><br>photo Mastro, 1998<br>";
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
                                 testo1="<i>Symbolic abstract - two</i><br>photos Mastro, 1996<br>";
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
                                testo1="<i>Mastro Sculptures</i><br>photo Mastro, 1997<br>";
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
                                testo1="<i>Casa Mastro</i>, late nineteenth century<br>photo by unknown author<br>";
                                testo2="<p7></p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                
                                riquadroA.src = "/images/2024/07/PG24_bX.jpg";
                                riquadroB.src = "/images/2024/07/PG24_cX.jpg";
                                
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

                        riquadroA.src = "/images/2023/02/quagri.jpg";
                        riquadroB.src = "/images/2023/02/quagri.jpg";
                        riquadroC.src = "/images/2023/02/quagri.jpg";
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

            