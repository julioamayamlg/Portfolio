"use strict"

const texto = document.getElementById("texto");
const salida = document.getElementById("salida");

const voltear = document.getElementById("voltear");
voltear.addEventListener("click", function(){
    salida.value = volteaTexto(texto.value); 
});

//En un lugar de la mancha de cuyo nombre no quiero acordarme
function volteaTexto(txt){                  //Devuelve un texto al revés        
    let espejo = "";
    for (var i = txt.length - 1; i >= 0; i--) { 
        espejo += txt[i];
    }
    return espejo;
}