
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
                    expandImg.src = "/images/EGX01.jpg";
                    testo1="<p><i>Mal d'Africa</i>, 1964<br>patinated terracotta<br>h 30 cm, ∅ 36 cm</p>";
                    testo2="<p><i>First prize for sculpture exhibition<br>People and Civilization, Grottaglie 1965</p></i><p7>code: SES a5, n.1</p7>";

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
                            if (controllo==24) {
                                
                                testo1="<i>Cerchio nono</i>, 1977<br><i>DivinaCommedia, Inferno</i><br>Canto XXIII - terzina XXI"
                                var imgText2 = document.getElementById("imgtext2");
                                imgText2.innerHTML = testo1;
                                
                            }
                               
                        break;

                        case 'B':
                            var riquadroB = document.getElementById("riquadroBimg");
                            var expandImg = document.getElementById("expandedImg");

                            expandImg.src = riquadroB.src;
                            
                            var controllo=Number(segno);
                            if (controllo==24) {
                                
                                testo1="<i>Cerchio nono</i>, 1977<br><i>DivinaCommedia, Inferno</i><br>Canto XXIII - terzina XXI"
                                var imgText2 = document.getElementById("imgtext2");
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
                // Get the expanded image
                if (segno === '0' || segno ==='' || segno=== 0) {
                    var imgCounter = document.getElementById("imgCounter");
                    var intCounter = Number(imgCounter.alt);
                    intCounter = intCounter+1;
                    if (intCounter > 25) intCounter=25;
                        imgCounter.alt = String(intCounter);
                        imgCounter = "img" + String(intCounter);
                        var imgSorgente = document.getElementById(imgCounter);
                        var expandImg = document.getElementById("expandedImg");
                        expandImg.src = imgSorgente.src;
                        
                        myBorder(intCounter);
                       
                    } else {
                        segno = Number(segno) + 1;
                        if (segno > 25) segno=25;
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
                                testo1="<p><i>Mal d'Africa</i>, 1964<br>patinated terracotta<br>h 30 cm, ∅ 36 cm</p>";
                                testo2="<p7>code: SES a5, n.1</p7><br><p><i>First prize for sculpture exhibition<br>Popoli e Civiltà, Grottaglie 1965</p></i>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '2':
                            case 2:
                                testo1="<p><i>Lillo</i>, 1968<br>white cement and marble dust<br>h 38 cm, w 24 cm</p>";
                                testo2="<p7>code: SES a9, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '3':
                            case 3:
                                testo1="<i>Planter</i>, 1972<br>glazed terra cotta<br>h 30 cm, d 30 cm, ∅ 280 cm,";
                                testo2="<p7>code: SET a1, n.9</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '4':
                            case 4:
                                testo1="<i>Windows</i>, 1973<br>collage and pencil on paper<br>h 32 cm, w 48 cm";
                                testo2="<p7>code: SET a4, n.6</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '5':
                            case 5:
                                testo1="<i>Study from life</i>, 197O<br>ink on paper<br>h 29 cm, w 36 cm";
                                testo2="<p7>code: SET a1, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '6':
                            case 6:
                                testo1="<i>Nude</i>, 1969<br>charcoal on paper<br>h 45 cm, w 27 cm";
                                testo2="<p7>code: SES a10, n.1<p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '7':
                            case 7:
                                testo1="<i>Arrows</i>, 1971<br>double sheet, pencil on paper<br>h 42 cm, w 57 cm";
                                testo2="<p7>code: SET a2, n.5</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '8':
                            case 8:
                                testo1="<i>Bianca</i>, 1971<br>pencil on paper<br>h 38 cm, w 28 cm";
                                testo2="<p7>code: SET a2, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '9':
                            case 9: 
                                testo1="<i>Hearts and arrows</i>, 1971<br>pencil on paper<br>h 49 cm, w 36 cm";
                                testo2="<p7>code: SET a2, n.10</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;         
                            /////////////////////////////////////////////////////////////
                            case '10':
                            case 10: 
                                testo1="<i>Counsellor</i>, 1974<br>pencil and tempera on paper<br>h 50 cm, l 40 cm";
                                testo2="<p7>code: SET a5, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '11':
                            case 11: 
                                testo1="<i>Comet</i>, 1973<br>enamel on paper and wood<br>h 79 cm, w 79 cm";
                                testo2="<p7>code: SET a4, n.5</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '12':
                            case 12: 
                                testo1="<i>Arrows</i>, 1970<br>ink on paper<br>h 34 cm, w 24 cm";
                                testo2="<p7>code: SET a1, n.6</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '13':
                            case 13: 
                                testo1="<i>Arrows</i>, 1972<br>tempera and pencil on paper<br>h 44 cm, w 28 cm";
                                testo2="<p7>code: SET a3, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '14':
                            case 14: 
                                testo1="<i>Inside out</i>, 1973<br>wood, polyester, aluminum and enamel<br>h 122 cm, w 101 cm";
                                testo2="<p7>code: SET a6, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '15':
                            case 15: 
                                testo1="<i>Black Rainbow</i>, 1970<br>wood, polyester, aluminum and enamel<br>h 90 cm, w 80 cm";
                                testo2="<p7>code: SET a6, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '16':
                            case 16: 
                                testo1="<i>Self-portrait</i>, 1969<br>pencil on paper<br>h 36 cm, w 26 cm";
                                testo2="<p7>code: SES a10, n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '17':
                            case 17: 
                                testo1="<i>Zero Hour</i>, 1973/75<br>painted wood<br>h 200 cm, w 600 cm, d 10 cm";
                                testo2="<p7>code: SET a4, n.7</p7><br><i>Winning work of the national competition<br>for the Council Room of the I.T.I. of Abbiategrasso (MI)</i>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '18':
                            case 18: 
                                testo1="<i>Atlantic Codex</i>, 1973<br>painted wood<br>h 40 cm, w 70 cm";
                                testo2="<p7>code: SET a4, n.9</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '19':
                            case 19: 
                                testo1="<i>Memoriale</i>, 1972<br>clay and polyester<br>h 20 cm, w 60 cm, d 40 cm";
                                testo2="<p7>code: SET a3, n.4</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '20':
                            case 20: 
                                testo1="<i>Portraits of power</i>, 1973/74<br>wood, fabric and enamel<br>h 80 cm, w 60 cm, d 6 cm";
                                testo2="<p7>code: SET a5, n.2</p7><br><i>Rome Quadrennial, 1975</i><br>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");
                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                riquadroA.src = "/images/EGX20-a.jpg";
                                riquadroB.src = "/images/EGX20-b.jpg";
                                riquadroC.src = "/images/EGX20-c.jpg";
                                riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '21':
                            case 21: 
                                testo1="<i>April 25 poster</i>, 1976<br>cardboard and colored screens<br>h 100 cm, w 70 cm";
                                testo2="<p7>code: SET a7, n.2</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;

                            break;
                            /////////////////////////////////////////////////////////////
                            case '22':
                            case 22: 
                                testo1="<i>First monolith<i>, 1972/79<br>bronze<br>h 310 cm, w 55 cm, d 30 cm";
                                testo2="<p7>code: SET a10, n.1</p7><br><p8><i>Winning work of the National Competition announced by the Superintendence for Environmental and Artistic Heritage of Basilicata in 1977.</i></p8>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");

                                riquadroA.src = "/images/EGX22-a.jpg";
                                riquadroB.src = "/images/EGX22-b.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '23':
                            case 23: 
                                testo1="<i>Drawing for sculpture</i>, 1970<br>pencil on paper<br>h 35 cm, w 26 cm";
                                testo2="<p7>code: SET a1 n.3</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroON = false;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '24':
                            case 24: 
                                testo1="<i>Ninth Circle</i>, 1977<br>wood and painted polyester<br>h 154 cm, w 154 cm, d 10 cm";
                                testo2="<p7>code: SET a8, n.1</p7>";

                                var imgText2 = document.getElementById("imgtext2");
                                var imgText3 = document.getElementById("imgtext3");

                                imgText2.innerHTML = testo1;
                                imgText3.innerHTML = testo2;

                                var riquadroA = document.getElementById("riquadroAimg");
                                var riquadroB = document.getElementById("riquadroBimg");
                                var riquadroC = document.getElementById("riquadroCimg");


                                riquadroA.src = "/images/EGX24-a.jpg";
                                riquadroB.src = "/images/EGX24-b.jpg";
                                riquadroC.src = "/images/quagri.jpg";

                                var riquadroON = true;
                            break;
                            /////////////////////////////////////////////////////////////
                            case '25':
                            case 25: 
                                testo1="<i>Colombe</i>, 1976<br>pencil on paper<br>h 40 cm, w 29 cm";
                                testo2="<p7>code: SET a7, n.1</p7>";

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

            