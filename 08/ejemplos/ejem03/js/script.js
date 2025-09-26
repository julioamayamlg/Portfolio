"use strict"

const texto = document.getElementById("texto");
const salida = document.getElementById("salida");

const stats = document.getElementById("stats");
stats.addEventListener("click", function(){
    let palabras = palabrasTexto(texto.value);
    let vocales = vocalesTexto(texto.value);
    let consonantes = consonantesTexto(texto.value);
    salida.innerHTML=`<h2>Hay ${palabras} palabras, ${consonantes} consonantes y ${vocales} vocales.</h2>` 
});

function palabrasTexto(txt){    //Devuelve las palabras de un texto 
    txt = minusculas(txt);      //En un lugar de la mancha de cuyo nombre no quiero acordarme
    let palabras = txt.split(" ");
    return palabras.length;
}

function vocalesTexto(txt){     //Devuelve las vocales de un texto
    let vocales = 0;
    txt = minusculas(txt);
    let caracteres = txt.split("");
    for (let i = 0; i < caracteres.length; i++) {
        if (caracteres[i] == 'a' || caracteres[i] == 'e' || caracteres[i] == 'i' || caracteres[i] == 'o' || caracteres[i] == 'u') {
            vocales = vocales +1;
        }
    }
    return vocales;
}

function consonantesTexto(txt){     //Devuelve las consonantes de un texto
    let consonantes = 0;
    txt = minusculas(txt);
    let caracteres = txt.split("");
    for (let i = 0; i < caracteres.length; i++) {
        if (!(caracteres[i] == " " || caracteres[i] == 'a' || caracteres[i] == 'e' || caracteres[i] == 'i' || caracteres[i] == 'o' || caracteres[i] == 'u')) {
            consonantes = consonantes + 1;
        }
    }
    return consonantes;
}

function minusculas(txt) {    //Todo minúsculas
    return txt.toLowerCase();
}