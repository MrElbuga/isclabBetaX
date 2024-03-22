
import * as bd1Tdata from "./BdData";
import * as RandLab from "./codeTestlab";
import * as tsdata from "./testes";


function CadData(nome) {
    return { Nome: nome, Teste1: [], Teste2: [], T1nomes: [], T2Nomes: [] }
}


let cad_Bd1 = CadData("Bd1");
let cad_Bd2 = CadData("Bd2");
let cad_Es1 = CadData("Es1");
let cad_Es2 = CadData("Es2");
let cad_IA = CadData("IA");


//Bd1
cad_Bd1.Teste1.push(...bd1Tdata.bd1t1);
cad_Bd1.Teste2.push(...bd1Tdata.bd1t2);
cad_Bd1.T1nomes.push(...tsdata.tnomes_BD1T1);
cad_Bd1.T2Nomes.push(...tsdata.tnomes);


//IA
cad_IA.Teste1.push(...bd1Tdata.IaTs1);
cad_IA.Teste2.push(...bd1Tdata.IaTs2);
cad_IA.T1nomes.push(...tsdata.tnomes_IAT1);
cad_IA.T2Nomes.push(...tsdata.tnomes_IAT2);


//Bd2

cad_Bd2.Teste2.push(...bd1Tdata.bd2t2);
cad_Bd2.T2Nomes.push(...tsdata.tnomes_BD2T2);

cad_Bd2.Teste1.push(...bd1Tdata.bd2t1);
cad_Bd2.T1nomes.push(...tsdata.tnomes_BD2T1);


//ES1
cad_Es1.Teste2.push(...bd1Tdata.es2T1);
cad_Es1.T2Nomes.push(...tsdata.tnomesES1T2);

//ES2

cad_Es2.Teste1.push(...bd1Tdata.es2T1);
cad_Es2.Teste2.push(...bd1Tdata.es2T2);

cad_Es2.T1nomes.push(...tsdata.tnomesES2T1);
cad_Es2.T2Nomes.push(...tsdata.tnomesES2T2);


//console.log(cad_Es1.Teste1);

let allCads = [cad_Bd2, cad_Bd1, cad_Es1, cad_Es2, cad_IA];
let curr_temas = [];
let finalTest = [];

let cur_cad = allCads[0];

function collect_Temas(lista) {
    let nlista = [];

    lista.forEach(el => {

        el.forEach(pr => {
            if (!nlista.includes(pr.tema.toString().trim()) && pr.tema.toString().trim().length > 1) {

                nlista.push(pr.tema.toString().trim());
            }
        })
    });
    //console.log(nlista);
    return nlista;
}

//randomizerStart(tudox, input_temas, 8);

let aleatorio = true;
let tamanho = 5;
let tudox = RandLab.fetch_tudoTemas([...cur_cad.Teste1, ...cur_cad.Teste2]);


curr_temas = collect_Temas(cad_Bd2.Teste2);

console.log("curr_temas");

console.log(curr_temas);

let choosenT = [...curr_temas];


finalTest = RandLab.randomizerStart(aleatorio, tudox, choosenT, tamanho);

function getTemas() {
    //curr_temas = collect_Temas(cad_Bd1.Teste1);

    if (curr_temas.length < 0) {
        curr_temas = ['nada'];
    }

    return curr_temas;
}

function setTudox(curcadx) {
    tudox = RandLab.fetch_tudoTemas([...curcadx.Teste1, ...curcadx.Teste2]);
}

function setCurTemas(cad) {
    curr_temas = collect_Temas(cad);
}

function getTemaN(lista) {
    let TemaN = '';
    let nlista = [];
    lista.forEach(el => {

        if (el.cadNome != null && el.cadNome.toString().trim().length > 1) {
            nlista.push(el.cadNome);
        };
    })

    if (nlista.length > 0) {
        TemaN = nlista[0];
    } else {
        TemaN = "revisao!"
    }

    return TemaN;
}

function setTemas(nlista) {
    choosenT = nlista;
}

function setAlea(booleano) {
    aleatorio = booleano;
}

function setTama(booleano) {
    tamanho = booleano;
}


function updateTest() {
    finalTest = RandLab.randomizerStart(aleatorio, tudox, choosenT, tamanho);
    console.log("COnsul: " + JSON.stringify(finalTest));
    console.log("tUDOXX: " + JSON.stringify(tudox.length));
    console.log("CHOOSEN: " + JSON.stringify(choosenT));
    return finalTest;
}

//console.log("tanas:" + cad_Bd1.Teste1.length);

export { cad_Bd1, allCads, updateTest, setTudox, setAlea, setTama, setTemas, setCurTemas, getTemas, getTemaN };