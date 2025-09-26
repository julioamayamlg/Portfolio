"use strict"

const texto = document.getElementById("texto");
const palabra = document.getElementById("palabra");
const salida = document.getElementById("salida");

const buscar = document.getElementById("buscar");
buscar.addEventListener("click", function(){
    let coincidencias = buscaTexto(texto.value, palabra.value);
    if (coincidencias != 0) {
        salida.innerHTML=`<h2>La palabra "${palabra.value}" aparece ${coincidencias} veces.</h2>`
    }else {
        salida.innerHTML=`<h2>Palabra "${palabra.value}" no encontrada en el texto.</h2>`
    }
    
});

function buscaTexto(txt, word){     //busca en un texto txt la palabra word devolviendo las coincidencias
    let coincidencias= 0;
    txt = minusculas(txt);
    let palabras = txt.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] == word){
            coincidencias = coincidencias + 1;
        }
    }
    return coincidencias;
}

function minusculas(texto) {         //Todo minúsculas
    return texto.toLowerCase();
}