import { Prg, aln, newTesteData } from "./dados";
import * as Bd from './BdData';




let tnomes_BD1T2 = [

  newTesteData(2022),
  newTesteData(2019),
  newTesteData(2018)
];

let tnomes_BD1T1 = [


  newTesteData(2016),
  newTesteData(2015),
  newTesteData(2014)
];

// BD2


let tnomes_BD2T2 = [
  newTesteData(2021),

  newTesteData(2023),
  newTesteData(2022, "R"),
  newTesteData(2022),
  newTesteData(2016, "R"),
  newTesteData(2016),
  newTesteData(2014),
];

let tnomes_BD2T1 = [
  newTesteData(2023),
  newTesteData(2019)

];

// IA

let tnomes_IAT1 = [


  newTesteData(2023)

];

let tnomes_IAT2 = [


  newTesteData(2023),
  newTesteData(2022)

];

// ES1
let tnomesES1T1 = [
  newTesteData(2015),
  newTesteData(2014),
];

let tnomesES1T2 = [
  newTesteData(2022),
  newTesteData(2021),
  newTesteData(2017),
  newTesteData(2023, "ex"),
  newTesteData(2021, "ex"),
  newTesteData(2020, "ex"),
  newTesteData(2020, "ex2"),

];


//Es2
let tnomesES2T1 =
  [
    newTesteData(2021),
    newTesteData(2022)
  ]

//arrayMixado

//Mix 1
//Mix 2
//Mix 3

//MixF = [mix1+mix2]  if(mix1<5)

function tteste(Nome, Tema) {
  return { nome: Nome, tema: Tema };
}

let tudo = [
  tteste("paul", "tekken"),
  tteste("kolin", "street"),
  tteste("liu kang", "mk"),
  tteste("kazuya", "tekken"),
  tteste("kitana", "mk"),
  tteste("jin", "tekken"),
  tteste("akuma", "street"),
  tteste("raiden", "mk"),
  tteste("syndel", "mk"),
  tteste("cammy", "street"),
];

function dividirTemas(lista, tema) {
  let nlista = [];

  nlista = lista.filter((el) => {
    return el.tema == tema;
  });

  return nlista;
}

function temaFinalMix(temas, tamanhototal) {
  let metade = parseInt(tamanhototal / 2);
  let nlista = [];

  let parte1 = Math.abs(metade - temas[0].length);

  let par = false;

  //console.log("-----------------------:");

  if (tamanhototal % 2 == 0) {
    // console.log("Par");
    par = true;
  } else {
    // console.log("Impar");
  }

  //console.log("Parte1:" + parte1);
  //console.log("metade:" + metade);
  //console.log("Tamanho1:" + temas[0].length);
  //console.log(parte1 - tamanhototal);

  if (temas[0].length > metade) {
    //console.log("maior");

    for (let x = 0; x < metade; x++) {
      let nrz = parseInt(Math.random() * temas[0].length);

      nlista.push(temas[0][nrz].nome);
      temas[0].splice(nrz, 1);
    }
    let valf = metade;
    if (par == false) {
      valf = metade + 1;
    }
    for (let x = 0; x < valf; x++) {
      let nrz = parseInt(Math.random() * temas[1].length);

      nlista.push(temas[1][nrz].nome);
      temas[1].splice(nrz, 1);
    }
  } else {
    //console.log("Menor");
    for (let x in temas[0]) {
      let nrz = parseInt(Math.random() * temas[0].length);

      nlista.push(temas[0][nrz].nome);

      temas[0].splice(nrz, 1);
    }

    for (let x = 0; x < parte1; x++) {
      let nrz = parseInt(Math.random() * temas[1].length);

      nlista.push(temas[1][nrz].nome);
      temas[1].splice(nrz, 1);
    }
  }

  return nlista;
}

function testar() {
  let nrz = parseInt(Math.random() * 6);
  //console.log(nrz);
  let listaStreet = dividirTemas(tudo, "street".toLowerCase());
  let listaMk = dividirTemas(tudo, "mk".toLowerCase());
  let listaTekken = dividirTemas(tudo, "tekken".toLowerCase());

  let listaMix = [listaMk, listaStreet, listaTekken];
  let listaFinal = [];
  listaFinal = temaFinalMix(listaMix, 3);

  //console.log(listaFinal);
}

let todos = [Bd.bd22, Bd.bd19, Bd.bd18, Bd.bd16, Bd.bd15, Bd.bd14];

export { todos, tnomes_BD1T2 as tnomes, tnomesES1T1, tnomes_BD2T1, tnomes_BD1T1, testar, tnomesES1T2, tnomes_BD2T2, tnomes_IAT1, tnomes_IAT2, tnomesES2T1 };
