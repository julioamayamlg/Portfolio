"use strict"

let resultado = "";
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const salida = document.getElementById("salida");

let operaciones = Array.from(document.getElementsByClassName("operaciones"));
for (let operacion of operaciones){
    operacion.addEventListener("click", function(){
        resultado = resolver (parseFloat(op1.value), operacion.value, parseFloat(op2.value));
        salida.innerHTML = resultado;
    })
}
