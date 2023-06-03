
import * as bd1Tdata from "./BdData";
import * as RandLab from "./codeTestlab";
import * as tsdata from "./testes";


function CadData(nome) {
    return { Nome: nome, Teste1: [], Teste2: [], T1nomes: [], T2Nomes: [] }
}


let cad_Bd1 = CadData("Bd1");
let cad_Bd2 = CadData("Bd2");
let cad_Es1 = CadData("Es1");

cad_Bd1.Teste1.push(...bd1Tdata.ts1);
cad_Bd1.T1nomes.push(...tsdata.tnomes);

cad_Es1.Teste1.push(...bd1Tdata.esTs1);
cad_Es1.T1nomes.push(...tsdata.tnomesES1T1);


let allCads = [cad_Bd1, cad_Es1];
let curr_temas = [];
let finalTest = [];
function collect_Temas(lista) {
    let nlista = [];

    lista.forEach(el => {

        el.forEach(pr => {
            if (!nlista.includes(pr.tema.toString().trim()) && pr.tema.toString().trim().length > 1) {

                nlista.push(pr.tema.toString().trim());
            }
        })
    });
    console.log(nlista);
    return nlista;
}


//randomizerStart(tudox, input_temas, 8);

let aleatorio = true;
let tamanho = 5;
let tudox = RandLab.fetch_tudoTemas(bd1Tdata.ts1);


curr_temas = collect_Temas(cad_Bd1.Teste1);
let choosenT = [curr_temas[0], curr_temas[1]];

finalTest = RandLab.randomizerStart(aleatorio, tudox, choosenT, tamanho);

function getTemas() {
    //curr_temas = collect_Temas(cad_Bd1.Teste1);

    return curr_temas;
}

function setCurTemas(cad) {
    curr_temas = collect_Temas(cad.Teste1);
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
    return finalTest;
}

console.log("tanas:" + cad_Bd1.Teste1.length);

export { cad_Bd1, allCads, updateTest, setAlea, setTama, setTemas, setCurTemas, getTemas, getTemaN };