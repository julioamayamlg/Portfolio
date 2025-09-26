"use strict"

const texto = document.getElementById("texto");
const salida = document.getElementById("salida");

const palindrono = document.getElementById("palindrono");
palindrono.addEventListener("click", function(){
    salida.innerHTML = esPalindrono(texto.value); 
});

function esPalindrono(txt){             //Quita los espacios del texto y minusculas y compara con el mismo texto al revés en minusculas
    let palabras = txt.split(" ");
    palabras = palabras.join("");
    palabras = palabras.toLowerCase();
    let espejo=volteaTexto(txt);
    espejo = espejo.split(" ");
    espejo = espejo.join("");
    espejo = espejo.toLowerCase();
    console.log(espejo);
    console.log(palabras);
    if(palabras == espejo){
        return "<h2>SI ES PALINDRONO<h2>";
    }else{
        return "<h2>NO ES PALINDRONO<h2>";
    }
}
/* ejemplos testeados
Dabale arroz a la zorra el abad
A luna ese anula
A la catalana banal atacala
A mama Roma le aviva el amor a papa y a papa Roma le aviva el amor a mama
A Mercedes ese de crema
A mi loca Colima
A ti no bonita
Adan no cede con Eva y Yave no cede con nada
*/
function volteaTexto(txt){                  //Devuelve un texto al revés        
    let espejo = "";
    for (var i = txt.length - 1; i >= 0; i--) { 
        espejo += txt[i];
    }
    return espejo;
}