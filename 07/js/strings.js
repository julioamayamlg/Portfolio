"use strict"

function mayusculas(texto) {         //Todo mayúsculas
    return texto.toUpperCase();
}
function minusculas(texto) {         //Todo minúsculas
    return texto.toLowerCase();
}
function primeraMay(texto) {         //Primera en mayúsculas
    let palabras = texto.split(" ");
    let i = 0;
    for (let [i, palabra] of palabras.entries()) {
        palabras[i] = palabra[0].toUpperCase() + palabra.slice(1);
        i++;
    }
    return palabras.join(" ");
}
function ultimaMay(texto) {          //Última en mayúsculas
    let palabras = texto.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].slice(0, palabras[i].length - 1) + palabras[i].charAt(palabras[i].length - 1).toUpperCase();
    }
    return palabras.join(" ");
}
function primeraMin(texto) {         //Primera en minúsculas
    let palabras = texto.split(" ");
    let i = 0;
    for (let [i, palabra] of palabras.entries()) {
        palabras[i] = palabra[0].toLowerCase() + palabra.slice(1);
        i++;
    }
    return palabras.join(" ");
}
function ultimaMin(texto) {          //Última en minúsculas
    let palabras = texto.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].slice(0, palabras[i].length - 1) + palabras[i].charAt(palabras[i].length - 1).toLowerCase();
    }
    return palabras.join(" ");
}
function vocalesMay(texto) {         //Vocales en mayúsculas
    let caracteres = texto.split("");
    for (let i = 0; i < caracteres.length; i++) {
        if (caracteres[i] == 'a' || caracteres[i] == 'e' || caracteres[i] == 'i' || caracteres[i] == 'o' || caracteres[i] == 'u') {
            caracteres[i] = caracteres[i].toUpperCase();
        }
    }
    return caracteres.join("");
}
function vocalesMin(texto) {         //Vocales en minúsculas
    let caracteres = texto.split("");
    for (let i = 0; i < caracteres.length; i++) {
        if (caracteres[i] == 'A' || caracteres[i] == 'E' || caracteres[i] == 'I' || caracteres[i] == 'O' || caracteres[i] == 'U') {
            caracteres[i] = caracteres[i].toLowerCase();
        }
    }
    return caracteres.join("");
}
function consonantesMay(texto) {     //Consonantes en mayúsculas
    let caracteres = texto.split("");
    for (let i = 0; i < caracteres.length; i++) {
        if (!(caracteres[i] == 'a' || caracteres[i] == 'e' || caracteres[i] == 'i' || caracteres[i] == 'o' || caracteres[i] == 'u' || caracteres[i] == 'A' || caracteres[i] == 'E' || caracteres[i] == 'I' || caracteres[i] == 'O' || caracteres[i] == 'U')) {
            caracteres[i] = caracteres[i].toUpperCase();
        }
    }
    return caracteres.join("");
}
function consonantesMin(texto) {     //Consonantes en minúsculas
    let caracteres = texto.split("");
    for (let i = 0; i < caracteres.length; i++) {
        if (!(caracteres[i] == 'a' || caracteres[i] == 'e' || caracteres[i] == 'i' || caracteres[i] == 'o' || caracteres[i] == 'u' || caracteres[i] == 'A' || caracteres[i] == 'E' || caracteres[i] == 'I' || caracteres[i] == 'O' || caracteres[i] == 'U')) {
            caracteres[i] = caracteres[i].toLowerCase();
        }
    }
    return caracteres.join("");
}
function aleatorio(inferior, superior) { //Botón aleatorio
    return Math.floor(Math.random() * ((superior + 1) - inferior) + inferior);
}

let tiempo = 2000;
let lapso = 500;
let repite;

function pulsar() {
    azar.click();
}

function repetir() {                //Modo automático va a Repetir
    repite = setInterval(pulsar, tiempo);
}

function masRapido() {              //Más rápido
    clearInterval(repite);
    tiempo = tiempo - lapso;
    repite = setInterval(pulsar, tiempo);
}
function masLento() {               //Más lento
    clearInterval(repite);
    tiempo = tiempo + lapso;
    repite = setInterval(pulsar, tiempo);
}
function para() {                   //Parar
    clearInterval(repite);
}
let url= "";
let aleator = 0;
function cargaApi(donde) {          //Cargar texto desde API
    if (donde == "BodyPost"){
        aleator = aleatorio(1,100);
        url= `https://jsonplaceholder.typicode.com/posts/${aleator}`;
        fetch(url).then(response => response.json()).then(json =>{
            texto.value = json.body;
        });
    }
    if (donde == "TitlePhoto"){
        aleator = aleatorio(1,5000);
        url= `https://jsonplaceholder.typicode.com/photos/${aleator}`;
        fetch(url).then(response => response.json()).then(json =>{
            texto.value = json.title;
        });
    }
    if (donde == "ChuckNorris"){
        url= `https://api.chucknorris.io/jokes/random`;
        fetch(url).then(response => response.json()).then(json =>{
            texto.value = json.value;
        });
    }
    
}