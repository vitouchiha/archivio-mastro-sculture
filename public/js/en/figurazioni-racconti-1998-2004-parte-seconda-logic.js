
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
                    expandImg.src = "/images/2023/05/FX01.jpg";
                    testo1="<p><i>Symbolic abstract - two</i>, 1986-96<br>polyester<br>h 51 cm, w 42 cm, d 15 cm</p>";
                    testo2="</i><p7>code: OTT a7, n.3</p7>";

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
                         
                        break;

                        case 'B':
                            var riquadroB = document.getElementById("riquadroBimg");
                            var expandImg = document.getElementById("expandedImg");

                            expandImg.src = riquadroB.src;
                                  
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
                                testo1="<p><i>Symbolic abstract - four</i>, 1999<br>brass<br>h 50 cm, w 40 cm, d 15 cm</p>";
                                testo2="</i><p7>code: NOV a10, n.17</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/2023/05/FX01a.jpg";
                                riquadroB.src = "/images/2023/02/quagri.jpg";
                                riquadroC.src = "/images/2023/02/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '2':
                            case 2:
                                testo1="<p><i>Drawing for sculpture</i>, 1996<br>pencil on paper<br>h 40 cm, w 29 cm</p>";
                                testo2="<p7>code: NOV a7, n.18</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '3':
                            case 3:
                                testo1="<i>Drawing for sculpture</i>, 1996<br>pencil on paper<br>h 40 cm, w 29 cm";
                                testo2="<p7>code: NOV a7, n.17</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '4':
                            case 4:
                                testo1="<i>Insignia - two</i>, 1999<br>brass<br>h 42 cm, w 30 cm, d 10 cm";
                                testo2="<p7>code: NOV a10, n.16</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/2023/05/FX04a.jpg";
                                riquadroB.src = "/images/2023/02/quagri.jpg";
                                riquadroC.src = "/images/2023/02/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '5':
                            case 5:
                                testo1="<i>Drawing for sculpture</i>, 1999<br>pencil on paper<br>h 50 cm, w 70 cm";
                                testo2="<p7>code: NOV a10, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '6':
                            case 6:
                                testo1="<i>Sign - tre</i>, 2001<br>brass<br>h 38 cm, w 20 cm, d 15 cm";
                                testo2="<p7>code: DUE a2, n. 1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/2023/05/FX06a.jpg";
                                riquadroB.src = "/images/2023/02/quagri.jpg";
                                riquadroC.src = "/images/2023/02/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '7':
                            case 7:
                                testo1="<i>Drawing for sculpture</i>, 1996<br>pencil on paper<br>h 40 cm, w 29 cm";
                                testo2="<p7>code: NOV a7, n. 19</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '8':
                            case 8:
                                testo1="<i>Drawing for sculpture</i>, 1999<br>pencil on paper<br>h 50 cm, w 70 cm";
                                testo2="<p7>code: NOV a10, n. 25</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '9':
                            case 9: 
                                testo1="<i>Symbolic abstract - five</i>, 2000<br>brass<br>h 45 cm, w 15 cm, d 15 cm";
                                testo2="<p7>code: DUE a1, n. 3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/2023/05/FX09a.jpg";
                                riquadroB.src = "/images/2023/02/quagri.jpg";
                                riquadroC.src = "/images/2023/02/quagri.jpg";

                                var riquadroON = true;
                            break;         
                            /////////////////////////////////////////////////////////////
                            case '10':
                            case 10: 
                                testo1="<i>Insignia - quattro</i>, 2002<br>brass<br>h 52 cm, w 22 cm, d 10 cm";
                                testo2="<p7>code: DUE a3, n. 5</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/2023/05/FX10a.jpg";
                                riquadroB.src = "/images/2023/02/quagri.jpg";
                                riquadroC.src = "/images/2023/02/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '11':
                            case 11: 
                                testo1="<i>Ferro a mare</i>, 2001<br>brass<br>h 52 cm, w 22 cm, d 10 cm";
                                testo2="<p7>code: DUE a2, n. 3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/2023/05/FX11a.jpg";
                                riquadroB.src = "/images/2023/02/quagri.jpg";
                                riquadroC.src = "/images/2023/02/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '12':
                            case 12: 
                                testo1="<i>Drawing for sculpture</i>, 1998<br>pencil on paper<br>h 40 cm, w 29 cm";
                                testo2="<p7>code: NOV a9, n. 10</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '13':
                            case 13: 
                                testo1="<i>Drawing for sculpture</i>, 1996<br>pencil on paper<br>h 40 cm, w 29 cm";
                                testo2="<p7>code: NOV a7, n. 16</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '14':
                            case 14: 
                                testo1="<i>Above below</i>, 2002<br>brass<br>h 54 cm, w 21 cm, d 10 cm";
                                testo2="<p7>code: DUE a3, n. 6</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                
                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/2023/05/FX14a.jpg";
                                riquadroB.src = "/images/2023/02/quagri.jpg";
                                riquadroC.src = "/images/2023/02/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '15':
                            case 15: 
                                testo1="<i>Red moon</i>, 2004<br>brass<br>h 14 cm, w 14 cm, d 1 cm";
                                testo2="<p7>code: DUE a5, n. 2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '16':
                            case 16: 
                                testo1="<i>Cometa</i>, 2004<br>brass<br>h 14 cm, w 14 cm, d 0.5 cm";
                                testo2="<p7>code: DUE a5, n. 10</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '17':
                            case 17: 
                                testo1="<i>In his image</i>, 2004<br>brass<br>h 14 cm, w 14 cm, d 0.5 cm";
                                testo2="<p7>code: DUE a5, n. 8</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '18':
                            case 18: 
                                testo1="<i>Astronomo - due</i>, 2004<br>brass<br>h 14 cm, w 14 cm, d 0.5 cm";
                                testo2="<p7>code: DUE a5, n.9</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '19':
                            case 19: 
                                testo1="<i>Portal</i>, 2004<br>brass<br>h 14 cm, w 14 cm, d 0.7 cm";
                                testo2="<p7>code: DUE a5, n. 5</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '20':
                            case 20: 
                                testo1="<i>Astronomo - uno</i>, 2004<br>brass<br>h 14 cm, w 14 cm, d 1 cm";
                                testo2="<p7>code: DUE a5, n. 3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                               
                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '21':
                            case 21: 
                                testo1="<i>Mirrors</i>, 2004<br>brass<br>h 14.5 cm, w 14.5 cm, d 1.5 cm";
                                testo2="<p7>code: DUE a5, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;

                            break;
                            /////////////////////////////////////////////////////////////
                            case '22':
                            case 22: 
                                testo1="<i>Interno - uno<i>, 2004<br>brass<br>h 14 cm, w 14 cm, d 1 cm";
                                testo2="<p7>code: DUE a5, n. 6</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '23':
                            case 23: 
                                testo1="<i>There is a voice</i>, 2004<br>brass<br>h 14 cm, w 14 cm, d 0.5 cm";
                                testo2="<p7>code: DUE a5, n. 7</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '24':
                            case 24: 
                                testo1="<i>Interno - due</i>, 2004<br>brass<br>h 14 cm, w 15.5 cm, d 1.5 cm";
                                testo2="<p7>code: DUE a5, n. 11</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '25':
                            case 25: 
                                testo1="<i>Left right | Quandrante</i>, 2004<br>engobed terracotta<br>h 15 cm, w 15 cm, d 1.5 cm";
                                testo2="<p7>code: DUE a5, n. 13 | code: DUE a5, n. 16</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '26':
                            case 26: 
                                testo1="<i>Icarus 2</i>, 2004<br>humped terracotta<br>h 15 cm, w 15 cm, d 1.5 cm";
                                testo2="<p7>code: DUE a5, n. 14</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '27':
                            case 27: 
                                testo1="<i>Inside out</i>, 2004<br>humped terracotta<br>h 15 cm, w 15 cm, d 1.5 cm";
                                testo2="<p7>code: DUE a2, n. 15</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '28':
                            case 28: 
                                testo1="<i>Ithaca</i>, 2004<br>terracotta<br>h 15 cm, w 15 cm, d 1.5 cm";
                                testo2="<p7>code: DUE a5, n. 12</p7>";

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

            