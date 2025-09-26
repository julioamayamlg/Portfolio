"use strict"

const texto = document.getElementById("texto");
let resultado = "";

const cargar = document.getElementById("bodypost");
cargar.addEventListener("click", function(){
    cargaApi("BodyPost");
});

const carga2 = document.getElementById("titlephoto");
carga2.addEventListener("click", function(){
    cargaApi("TitlePhoto");
});

const carga3 = document.getElementById("chuck");
carga3.addEventListener("click", function(){
    cargaApi("ChuckNorris");
});

const botones = document.querySelectorAll(".botones");      //captura los botones
for (let boton of botones){
    boton.addEventListener("click", function(){             //listener evento click
        texto.value=resolver(boton.value,texto.value);
    })
}

const azar = document.getElementById("azar");               //boton azar con listener
azar.addEventListener("click", function(){
    texto.value= resolver(botones[aleatorio(1,10)-1].value, texto.value);
});

const auto = document.getElementById("auto");               //boton auto con listener
auto.addEventListener("click", repetir);

const parar = document.getElementById("parar");             //boton parar con listener
auto.addEventListener("click", para);

const rapido = document.getElementById("rapido");           //boton rapido con listener
auto.addEventListener("click", masRapido);

const lento = document.getElementById("lento");             //boton lento con listener
auto.addEventListener("click", masLento);

function resolver(boton, text){
    switch (boton){
        case "A-Z":
            resultado = mayusculas(text);
            break;
        case "a-z":
            resultado = minusculas(text);
            break;
        case "A_":
            resultado = primeraMay(text);
            break;
        case "_Z":
            resultado = ultimaMay(text);
            break;
        case "a_":
            resultado = primeraMin(text);
            break;
        case "_z":
            resultado = ultimaMin(text);
            break;
        case "AEIOU":
            resultado = vocalesMay(text);
            break;
        case "aeiou":
            resultado = vocalesMin(text);
            break;
        case "ABC":
            resultado = consonantesMay(text);
            break;
        case "abc":
            resultado = consonantesMin(text);
            break;       
    }
    console.log(resultado);
    return resultado;
}