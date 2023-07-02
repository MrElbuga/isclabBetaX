
//arrayMixado

//Mix 1
//Mix 2
//Mix 3

//MixF = [mix1+mix2]  if(mix1<5)

function subTopico(nome, Tema) {
    return { prg: nome, tema: Tema };
}

// Cadeira bd1
// Pergunta 2 tema Tekken
let tudo = [
    subTopico("paul", "teKkEn"),
    subTopico("kolin", "street"),
    subTopico("liu kang", "mk"),
    subTopico("kazuya", "tekken"),
    subTopico("kitana", "mk"),
    subTopico("jin", "tekken"),
    subTopico("akuma", "street"),
    subTopico("raiden", "street"),
    subTopico("syndel", "mk"),
    subTopico("cammy", "street"),
];

function dividirTemas(lista, tema) {
    let nlista = [];
    nlista = lista.filter((el) => {

        return el.tema.toLowerCase().trim() == tema.toLowerCase().trim();
    });

    return nlista;
}

function listaCount(lista) {
    let nr = 0;

    lista.forEach((el, id) => {
        nr += el.length;
    })

    return nr;
}

function init_temaMixer(rand, mix, temas, tamanhototal) {
    let metade = parseInt(tamanhototal / 2);
    let nlista = [];
    /*  console.log("processo de dis: " + tamanhototal);
      console.log("processo de temas: " + JSON.stringify(temas));*/

    let counterI = 0;


    let tSufciente = false;

    let randomTema = false;

    randomTema = rand;


    let questT = 0;
    for (let x = 0; x < temas.length; x++) {
        questT += temas[x].length;


    }
    if (questT >= tamanhototal) {
        tSufciente = true;
    }


    //console.log("maior");

    let temaIndex = 0;


    let fila = [];

    temas.forEach((el, ix) => {
        fila.push(ix);
    });
    //console.log(fila);

    if (tSufciente == true) {
        // console.log("sufciente: ");

        for (let x = 0; x < tamanhototal; x++) {



            // temaIndex++;

            if (fila.length == 0) {

                temas.forEach((el, ix) => {
                    fila.push(ix);
                });
                // console.log("voi: " + x);
                x--;
            } else {
                // console.log("f: " + x);
                let pergIndice = 0;
                let randTema = parseInt(Math.random() * fila.length);

                //randomTema = true ? pergIndice = randTema : pergIndice = temaIndex;

                if (randomTema == true) {
                    pergIndice = randTema;
                } else {
                    pergIndice = temaIndex;

                }

                let temasCount_fit = listaCount(temas);


                if (temas[fila[pergIndice]].length > 0) {

                    let nrz = parseInt(Math.random() * temas[fila[pergIndice]].length);
                    //nlista.push(temas[fila[pergIndice]][nrz].prg + ":" + temas[fila[pergIndice]][nrz].tema);
                    nlista.push(temas[fila[pergIndice]][nrz]);





                    if (randomTema == false) {
                        temas[temaIndex].splice(nrz, 1);

                        let counterF = parseInt(tamanhototal / temas.length);

                        let counterFBonus = tamanhototal - (counterF * temas.length);


                        if (mix) {

                            if (counterI == counterF) {

                                if (counterFBonus > 0) {
                                    if (temaIndex < counterFBonus) {
                                        counterF + 1;
                                    }
                                }

                                counterI = 0;
                                temaIndex++;

                            } else { counterI++; }


                        } else {
                            temaIndex++;
                        }

                        if (temaIndex > temas.length - 1) {
                            temaIndex = 0;
                        }




                    }
                    else {

                        temas[fila[randTema]].splice(nrz, 1);
                        fila.splice(randTema, 1);


                    }


                }
                else {



                    if (temasCount_fit > 0) {
                        if (randomTema == false) {
                            temaIndex++;
                            if (temaIndex > temas.length - 1) {
                                temaIndex = 0;
                            }
                        }
                        else {
                            fila = [];
                            temas.forEach((el, ix) => {
                                randTema = parseInt(Math.random() * fila.length);

                                if (el.length > 0) {
                                    fila.push(ix);

                                }
                            });

                        }
                        x--;
                    }
                }



            }


        }
        //console.log(fila);
        console.log("Tamanho: " + nlista.length);

    } else {

        console.log("Nao Suf: ");

        for (let x = 0; x < tamanhototal; x++) {

            if (temas[temaIndex].length > 0) {
                let nrz = parseInt(Math.random() * temas[temaIndex].length - 1);
                //nlista.push(temas[temaIndex][nrz].prg + ":" + temas[temaIndex][nrz].tema);
                nlista.push(temas[temaIndex][nrz]);
                temas[temaIndex].splice(nrz, 1);

                temaIndex++;

                if (temaIndex > temas.length - 1) {
                    temaIndex = 0;
                }
            }

        }
        // console.log("Tamanho: " + nlista.length);

    }



    return nlista;
}

function fecth_TemaDatas(temasString, temasData) {
    let nlista = [];
    temasString.forEach((el, idx) => {

        nlista.push(dividirTemas(temasData, temasString[idx].toLowerCase()));
    });

    return nlista;
}
function stats_tema(nomex) { return { tema: nomex, count: 0 } }

function fetch_tudoTemas(tudoTemas) {
    let nlista = [];
    tudoTemas.forEach(el => {
        nlista.push(...el);
    })

    return nlista;
}

let input_temas = ["tekken", "street", "mk"];
let tudox = [];
tudox = fetch_tudoTemas([tudo]);

function randomizerStart(rando, allPergs, temaStrings, tamanho) {



    /* console.log("temaStrings");
     console.log(temaStrings);*/
    let listaMix_input = fecth_TemaDatas(temaStrings, allPergs);
    let listaFinal = [];

    if (temaStrings.length > 0) {
        //rand, mix, temas, tamanhototal

        listaFinal = init_temaMixer(rando, true, listaMix_input, tamanho);

        //let sf, mk, tk;

        //sf = build(input_temas[0]);

        //let final_count = [sf, mk, tk]

        let allStats = [];
        temaStrings.forEach((el, id) => {
            allStats.push(stats_tema(el));
        })

        allStats.forEach((els, x) => {

            listaFinal.forEach((elf, y) => {

                if (els.tema.toLowerCase().trim() == elf.tema.toLowerCase().trim()) {
                    els.count++;
                }
            })



        })
        //console.log("allStats: " + JSON.stringify(allStats));

    }

    return listaFinal;
}


//randomizerStart(tudox, input_temas, 8);

export { randomizerStart, fetch_tudoTemas };