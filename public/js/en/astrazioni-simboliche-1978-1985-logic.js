
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
                    expandImg.src = "/images/01ASX.jpg";
                    testo1="<p><i>Arco</i>, 1980<br>bronze<br>h 35 cm, w 26 cm, d 26 cm</p>";
                    testo2="</i><p7>code: OTT a1, n.1</p7>";

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
                                
                                testo1="<i>Altar - two</i>, 1982<br>bronze<br>h 26 cm, w 62 cm, d 20.5 cm";
                                testo2="<p7>code: OTT a3, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;
                                
                            }
                          
                        break;

                        case 'B':
                            var riquadroB = document.getElementById("riquadroBimg");
                            var expandImg = document.getElementById("expandedImg");

                            expandImg.src = riquadroB.src;

                            var controllo=Number(segno);
                            if (controllo==25) {
                                
                                testo1="<i>Sacred Area</i>, 2004<br><i>ink on paper</i><br>h 40 cm, l 29";
                                testo2="<p7>codice: DUE a5, n.18</p7>"

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;
                                
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
                                testo1="<p><i>Arco</i>, 1980<br>bronze<br>h 35 cm, w 26 cm, d 26 cm</p>";
                                testo2="</i><p7>code: OTT a1, n.1</p7>";
                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/2023/04/01ASXa.jpg";
                                riquadroB.src = "/images/2023/02/quagri.jpg";
                                riquadroC.src = "/images/2023/02/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '2':
                            case 2:
                                testo1="<p><i>Coppia</i>, 1978<br>bronze<br>h 30 cm, w 36 cm, d 18 cm</p>";
                                testo2="<p7>code: SET a9, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/2023/04/02ASXa.jpg";
                                riquadroB.src = "/images/2023/02/quagri.jpg";
                                riquadroC.src = "/images/2023/02/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '3':
                            case 3:
                                testo1="<i>Drawing for sculpture</i>, 1978<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: SET a9, n.5</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '4':
                            case 4:
                                testo1="<i>Drawing for sculpture</i>, 1978<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: SET a9, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '5':
                            case 5:
                                testo1="<i>East and West</i>, 1979<br>bronze<br>h 32 cm, w 26 cm, d 26 cm";
                                testo2="<p7>code: SET a10, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '6':
                            case 6:
                                testo1="<i>Drawing for sculpture</i>, 1984<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: OTT a4, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '7':
                            case 7:
                                testo1="<i>Drawing for sculpture</i>, 1978<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: SET a10, n.9</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '8':
                            case 8:
                                testo1="<i>Sacred Sun</i>, 1982<br>bronze<br>h 30 cm, w 26 cm, d 26 cm";
                                testo2="<p7>code: OTT a3, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '9':
                            case 9: 
                                testo1="<i>Drawing for sculpture</i>, 1981<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: OTT a2, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;         
                            /////////////////////////////////////////////////////////////
                            case '10':
                            case 10: 
                                testo1="<i>Drawing for sculpture</i>, 1982<br>pencil and tempera on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: OTT a3, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '11':
                            case 11: 
                                testo1="<i>Siren</i>, 1983<br>bronze, marble<br>h 20 cm, w 12 cm, d 5 cm";
                                testo2="<i>Work reproduced by the author in 5 copies</i><br><p7>code: OTT a4, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '12':
                            case 12: 
                                testo1="<i>Great Mother</i>, 1980<br>bronze<br>h 22 cm, w 18.5 cm, d 19.5 cm";
                                testo2="<p7>code: OTT a1, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '13':
                            case 13: 
                                testo1="<i>Drawing for sculpture</i>, 1978<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: SET a9, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '14':
                            case 14: 
                                testo1="<i>Drawing for sculpture</i>, 1978<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: OTT a3, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '15':
                            case 15: 
                                testo1="<i>Above and around</i>, 1981-83<br>bronze<br>h 34, w 45 cm, d 45 cm";
                                testo2="<p7>code: OTT a2, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/2023/04/15ASXa.jpg";
                                riquadroB.src = "/images/2023/02/quagri.jpg";
                                riquadroC.src = "/images/2023/02/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////segno 20/04
                            case '16':
                            case 16: 
                                testo1="<i>Drawing for sculpture</i>, 1978<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: SET a9, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '17':
                            case 17: 
                                testo1="<i>Insignia - uno</i>, 1983<br>brass<br>h 62 cm, w 18 cm, d 18 cm";
                                testo2="<p7>code: OTT a4, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '18':
                            case 18: 
                                testo1="<i>Symbolic abstract</i>, 1980-84<br>bronze<br>h 52 cm, w 60 cm, d 20 cm";
                                testo2="<p7>code: OTT a1, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '19':
                            case 19: 
                                testo1="<i>Drawing for sculpture</i>, 1984<br>pencil on paper<br>h 40 cm, w 29 cm";
                                testo2="<p7>code: OTT a5, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '20':
                            case 20: 
                                testo1="<i>Aviator</i>, 1985<br>brass<br>h 9 cm, w 7.5 cm, d 28 cm";
                                testo2="<p7>code: OTT a6, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                               
                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '21':
                            case 21: 
                                testo1="<i>Altar - one</i>, 1979<br>bronze<br>h 25 cm, w 80 cm, d 26 cm";
                                testo2="<p7>code: SET a10, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;

                            break;
                            /////////////////////////////////////////////////////////////
                            case '22':
                            case 22: 
                                testo1="<i>Drawing for sculpture<i>, 1978<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: SET a9, n.26</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '23':
                            case 23: 
                                testo1="<i>Human celestial bodies</i>, 1985<br>brass<br>h 53 cm, w 49 cm, d 12 cm";
                                testo2="<p7>code: OTT a6, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '24':
                            case 24: 
                                testo1="<i>Drawing for sculpture</i>, 1979<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: SET a10, n.5</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '25':
                            case 25: 
                                testo1="<i>Altar - two</i>, 1982<br>bronze<br>h 26 cm, w 62 cm, d 20.5 cm";
                                testo2="<p7>code: OTT a3, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/2023/04/25ASXa.jpg";
                                riquadroB.src = "/images/2023/04/25ASXb.jpg";
                                riquadroC.src = "/images/2023/02/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '26':
                            case 26: 
                                testo1="<i>Aerial composition</i>, 1983<br>bronze and brass<br>h 54.5 cm, w 76 cm, d 24.5 cm";
                                testo2="<p7>code: OTT a4, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '27':
                            case 27: 
                                testo1="<i>Drawing for sculpture</i>, 1979<br>pencil on paper<br>h 28 cm, w 21 cm";
                                testo2="<p7>code: OTT a1, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '28':
                            case 28: 
                                testo1="<i>Mask</i>, 1980<br>bronze<br>h 2.5 cm, w 3 cm";
                                testo2="<p7>code: OTT a1, n.16</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
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
                    if (numero > 0 && numero < 29) {
                        let contenitore=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"];
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
                        } while (i < 28);
                        
                    }                              
                }

            