
                var riquadroON = false;
                var segno = "";
                var testo1 = "";
                var testo2 = "";
                segno = "0";
                riquadro = false;
                window.addEventListener("DOMContentLoaded", function() { if (document.getElementById("expandedImg")) riquadrigrigi(); });
                
                function riquadrigrigi() {
                    //Metto la prima immagine e relativi testi
                    var expandImg = document.getElementById("expandedImg");
                    expandImg.src = "/images/FRX01.jpg";
                    testo1="<p><i>Chiaro di luna</i>, 1988<br>ottone<br>h cm 27, l cm 51, p cm 10</p>";
                    testo2="</i><p7>codice: NOV a9, n.11</p7>";

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
                                testo1="<p><i>Chiaro di luna</i>, 1988<br>ottone<br>h cm 27, l cm 51, p cm 10</p>";
                                testo2="</i><p7>codice: NOV a9, n.11</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX01a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '2':
                            case 2:
                                testo1="<p><i>Disegno per scultura</i>, 1995<br>matita su carta<br>h cm 40, l cm 29</p>";
                                testo2="<p7>codice: NOV a6, n. 10</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '3':
                            case 3:
                                testo1="<i>Disegno per scultura</i>, 1996<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: NOV a7, n. 13</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '4':
                            case 4:
                                testo1="<i>Paesaggio con figure</i>, 1998<br>ottone<br>h cm 27, l cm 51, p cm 10";
                                testo2="<p7>codice: NOV a9, n.12</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX04a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;

                            break;
                            /////////////////////////////////////////////////////////////
                            case '5':
                            case 5:
                                testo1="<i>Mascherine</i>, 1998<br>ottone<br>h cm 27, l cm 51, p cm 10";
                                testo2="<p7>codice: NOV a9, n.13</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX05a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;

                            break;
                            /////////////////////////////////////////////////////////////
                            case '6':
                            case 6:
                                testo1="<i>Linee d'aria</i>, 1998<br>ottone<br>h cm 27, l cm 51, p cm 10";
                                testo2="<p7>codice: NOV a9, n.14</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX06a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '7':
                            case 7:
                                testo1="<i>Disegno per scultura</i>, 1998<br>matita su carta<br>h cm 40, l cm 29";
                                testo2="<p7>codice: NOV a9, n. 6</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '8':
                            case 8:
                                testo1="<i>Via dei colli</i>, 1998<br>ottone<br>h cm 27, l cm 51, p cm 10";
                                testo2="<p7>codice: NOV a9, n.15</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX08a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '9':
                            case 9: 
                                testo1="<i>Doppio notturno</i>, 1998<br>ottone<br>h cm 27, l cm 51, p cm 10";
                                testo2="<p7>codice: NOV a9, n.16</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX09a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;         
                            /////////////////////////////////////////////////////////////
                            case '10':
                            case 10: 
                                testo1="<i>Disegno per scultura</i>, 1997<br>matita su carta<br>h cm 40, l cm 29";
                                testo2="<p7>codice: NOV a8, n. 9</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '11':
                            case 11: 
                                testo1="<i>Cono d'ombra</i>, 1999<br>ottone<br>h cm 51,5, l cm 39, p cm 10";
                                testo2="<p7>codice: NOV a10, n.13</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX11a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '12':
                            case 12: 
                                testo1="<i>Disegno per scultura</i>, 2002<br>matita su carta<br>h cm 40, l cm 29";
                                testo2="<p7>codice: DUE a3, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '13':
                            case 13: 
                                testo1="<i>Disegno per scultura</i>, 2002<br>matita su carta<br>h cm 28, l cm 21";
                                testo2="<p7>codice: DUE a3, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '14':
                            case 14: 
                                testo1="<i>Bianca d'agosto</i>, 1999<br>ottone<br>h cm 62,5, l cm 28, p cm 10";
                                testo2="<p7>codice: NOV a10, n. 15</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX14a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '15':
                            case 15: 
                                testo1="<i>Disegno per scultura</i>, 1996<br>matita su carta<br>h cm 40, l cm 29";
                                testo2="<p7>codice: NOV a7, n. 15</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////segno 20/04
                            case '16':
                            case 16: 
                                testo1="<i>Lampo di luce</i>, 1999<br>ottone<br>h cm 62,5, l cm 28, p cm 10";
                                testo2="<p7>codice: NOV a10, n. 14</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX16a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '17':
                            case 17: 
                                testo1="<i>Faccia a faccia</i>, 2000<br>ottone<br>h cm 62,5, l cm 28, p cm 10";
                                testo2="<p7>codice: DUE a1, n. 2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX17a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '18':
                            case 18: 
                                testo1="<i>Disegno per scultura</i>, 1999<br>matita su carta<br>h cm 40, l cm 29";
                                testo2="<p7>codice: NOV a 10, n. 12</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '19':
                            case 19: 
                                testo1="<i>Blu notte</i>, 2001<br>ottone<br>h cm 52, l cm 22, p cm 10";
                                testo2="<p7>codice: DUE a2, n. 4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX19a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '20':
                            case 20: 
                                testo1="<i>Disegno per scultura</i>, 1995<br>matita su carta<br>h cm 40, l cm 29";
                                testo2="<p7>codice: NOv a6, n. 12</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                               
                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '21':
                            case 21: 
                                testo1="<i>L'uno e l'altro</i>, 2001<br>ottone<br>h cm 57,5, l cm 18, p cm 10";
                                testo2="<p7>codice: DUE a2, n. 5</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX21a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;

                            break;
                            /////////////////////////////////////////////////////////////
                            case '22':
                            case 22: 
                                testo1="<i>Circolo magico<i>, 2001<br>ottone<br>h cm 57,5, l cm 17, p cm 10";
                                testo2="<p7>codice: DUE a2, n.6</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX22a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '23':
                            case 23: 
                                testo1="<i>Disegno per scultura</i>, 1998<br>matita su carta<br>h cm 40, l cm 29";
                                testo2="<p7>codice: NOV a9, n. 7</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '24':
                            case 24: 
                                testo1="<i>Segni del cielo</i>, 2001<br>ottone<br>h cm 57,5, l cm 17, p cm 10";
                                testo2="<p7>codice: DUE a2, n.7</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX24a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '25':
                            case 25: 
                                testo1="<i>Disegno per scultura</i>, 1999<br>matita su carta<br>h cm 40, l cm 29";
                                testo2="<p7>codice: NOV a10, n.11</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '26':
                            case 26: 
                                testo1="<i>Danza di primavera</i>, 2001<br>ottone<br>h cm 52, l cm 22, p cm 10";
                                testo2="<p7>codice: DUE a2, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX26a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '27':
                            case 27: 
                                testo1="<i>Astro nascente</i>, 2004<br>ottone<br>h cm 54, l cm 15, p cm 10";
                                testo2="<p7>codice: DUE a5, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/FRX27a.jpg";
                                riquadroB.src = "/images/quagri.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '28':
                            case 28: 
                                testo1="<i>Disegno per scultura</i>, 2002<br>matita su carta<br>h cm 40, l cm 29";
                                testo2="<p7>codice: DUE a3, n. 1</p7>";

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

            