
//arrayMixado

//Mix 1
//Mix 2
//Mix 3

//MixF = [mix1+mix2]  if(mix1<5)

function subTopico(Nome, Tema) {
    return { nome: Nome, tema: Tema };
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
        return el.tema.toLowerCase() == tema.toLowerCase();
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
                    nlista.push(temas[fila[pergIndice]][nrz].nome + ":" + temas[fila[pergIndice]][nrz].tema);





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
                nlista.push(temas[temaIndex][nrz].nome + ":" + temas[temaIndex][nrz].tema);
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

        nlista.unshift(dividirTemas(temasData, temasString[idx].toLowerCase()));
    });

    return nlista;
}

function randomizerStart() {


    let input_temas = ["street", "mk", "tekken"];
    let listaMix_input = fecth_TemaDatas(input_temas, tudo);

    let listaFinal = [];
    listaFinal = init_temaMixer(false, true, listaMix_input, 8);

    let sf, mk, tk;

    sf = build(input_temas[0]);
    mk = build(input_temas[1]);
    tk = build(input_temas[2]);

    function build(nomex) { return { nome: nomex, count: 0 } }

    let final_count = [sf, mk, tk]


    // console.log(listaMix_input);

    console.log(listaFinal);

}


randomizerStart();