
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
                    testo1="<p><i>Arco</i>, 1980<br>bronzo<br>h cm 35, l cm 26, p cm 26</p>";
                    testo2="</i><p7>codice: OTT a1, n.1</p7>";

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
                                
                                testo1="<i>Altare - due</i>, 1982<br>bronzo<br>h cm 26, l cm 62, p cm 20,5";
                                testo2="<p7>codice: OTT a3, n.2</p7>";

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
                                
                                testo1="<i>Area sacra</i>, 2004<br><i>inchiostro su carta</i><br>h cm 40, l 29";
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
                                testo1="<p><i>Arco</i>, 1980<br>bronzo<br>h cm 35, l cm 26, p cm 26</p>";
                                testo2="</i><p7>codice: OTT a1, n.1</p7>";
                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/01ASXa.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '2':
                            case 2:
                                testo1="<p><i>Coppia</i>, 1978<br>bronzo<br>h cm 30, l cm 36, p cm 18</p>";
                                testo2="<p7>codice: SET a9, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/02ASXa.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '3':
                            case 3:
                                testo1="<i>Disegno per scultura</i>, 1978<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: SET a9, n.5</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '4':
                            case 4:
                                testo1="<i>Disegno per scultura</i>, 1978<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: SET a9, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '5':
                            case 5:
                                testo1="<i>Oriente e Occidente</i>, 1979<br>bronzo<br>h cm 32, l cm 26, p cm 26";
                                testo2="<p7>codice: SET a10, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '6':
                            case 6:
                                testo1="<i>Disegno per scultura</i>, 1984<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: OTT a4, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '7':
                            case 7:
                                testo1="<i>Disegno per scultura</i>, 1978<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: SET a10, n.9</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '8':
                            case 8:
                                testo1="<i>Sacro sole</i>, 1982<br>bronzo<br>h cm 30, l cm 26, p cm 26";
                                testo2="<p7>codice: OTT a3, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '9':
                            case 9: 
                                testo1="<i>Disegno per scultura</i>, 1981<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: OTT a2, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;         
                            /////////////////////////////////////////////////////////////
                            case '10':
                            case 10: 
                                testo1="<i>Disegno per scultura</i>, 1982<br>matita e tempera su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: OTT a3, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '11':
                            case 11: 
                                testo1="<i>Sirena</i>, 1983<br>bronzo, marmo<br>h cm 20, l cm 12, p cm 5";
                                testo2="<i>Opera riprodotta dall’autore in 5 copie</i><br><p7>codice: OTT a4, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '12':
                            case 12: 
                                testo1="<i>Grande madre</i>, 1980<br>bronzo<br>h cm 22, l cm 18,5, p cm 19,5";
                                testo2="<p7>codice: OTT a1, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '13':
                            case 13: 
                                testo1="<i>Disegno per scultura</i>, 1978<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: SET a9, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '14':
                            case 14: 
                                testo1="<i>Disegno per scultura</i>, 1978<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: OTT a3, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '15':
                            case 15: 
                                testo1="<i>Sopra e intorno</i>, 1981-83<br>bronzo<br>h 34, l cm 45, p cm 45";
                                testo2="<p7>codice: OTT a2, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/15ASXa.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////segno 20/04
                            case '16':
                            case 16: 
                                testo1="<i>Disegno per scultura</i>, 1978<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: SET a9, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '17':
                            case 17: 
                                testo1="<i>Insegne - uno</i>, 1983<br>ottone<br>h cm 62, l cm 18, p cm 18";
                                testo2="<p7>codice: OTT a4, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '18':
                            case 18: 
                                testo1="<i>Astratto simbolico</i>, 1980-84<br>bronzo<br>h cm 52, l cm 60, p cm 20";
                                testo2="<p7>codice: OTT a1, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '19':
                            case 19: 
                                testo1="<i>Disegno per scultura</i>, 1984<br>matita su carta<br>h cm 40, l cm 29";
                                testo2="<p7>codice: OTT a5, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '20':
                            case 20: 
                                testo1="<i>Aviatore</i>, 1985<br>ottone<br>h cm 9, l cm 7,5, p cm 28";
                                testo2="<p7>codice: OTT a6, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                               
                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '21':
                            case 21: 
                                testo1="<i>Altare - uno</i>, 1979<br>bronzo<br>h cm 25, l cm 80, p cm 26";
                                testo2="<p7>codice: SET a10, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;

                            break;
                            /////////////////////////////////////////////////////////////
                            case '22':
                            case 22: 
                                testo1="<i>Disegno per scultura<i>, 1978<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: SET a9, n.26</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '23':
                            case 23: 
                                testo1="<i>Umani corpi celesti</i>, 1985<br>ottone<br>h cm 53, l cm 49, p cm 12";
                                testo2="<p7>codice: OTT a6, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '24':
                            case 24: 
                                testo1="<i>Disegno per scultura</i>, 1979<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: SET a10, n.5</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '25':
                            case 25: 
                                testo1="<i>Altare - due</i>, 1982<br>bronzo<br>h cm 26, l cm 62, p cm 20,5";
                                testo2="<p7>codice: OTT a3, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/25ASXa.jpg";
                                riquadroB.src = "/images/25ASXb.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '26':
                            case 26: 
                                testo1="<i>Composizione aerea</i>, 1983<br>bronzo e ottone<br>h cm 54,5, l cm 76, p cm 24,5";
                                testo2="<p7>codice: OTT a4, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '27':
                            case 27: 
                                testo1="<i>Disegno per scultura</i>, 1979<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: OTT a1, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '28':
                            case 28: 
                                testo1="<i>Mascherina</i>, 1980<br>bronzo<br>h cm 2,5 , l cm 3";
                                testo2="<p7>codice: OTT a1, n.16</p7>";

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

                        riquadroA.src = "/images/quagri.jpg";
                        riquadroB.src = "/images/quagri.jpg";
                        riquadroC.src = "/images/quagri.jpg";
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

            