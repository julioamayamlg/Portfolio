"use strict"


const dimension = document.getElementById("dimension");
const salidaMA= document.getElementById("salidaMA");
const salidaMB= document.getElementById("salidaMB");
const salidaR= document.getElementById("salidaR");
const sumar=document.getElementById("sumar");

let matrizA=[];
let matrizB=[];

sumar.addEventListener("click", function(){
    let matrizR = sumarMatrices(matrizA, matrizB);
    salidaR.innerHTML= mostrarMatriz(matrizR);
});
const restar=document.getElementById("restar");
restar.addEventListener("click", function(){
    let matrizR = restarMatrices(matrizA, matrizB);
    salidaR.innerHTML= mostrarMatriz(matrizR);
});
const multiplicar=document.getElementById("multiplicar");
multiplicar.addEventListener("click", function(){
    let matrizR = multiplicarMatrices(matrizA, matrizB);
    salidaR.innerHTML= mostrarMatriz(matrizR);
});
const genera = document.getElementById("generar");
generar.addEventListener("click", function(){
    matrizA=generaMatriz(parseInt(dimension.value));
    matrizA=rellenaMatriz(matrizA);
    salidaMA.innerHTML=mostrarMatriz(matrizA);

    matrizB=generaMatriz(parseInt(dimension.value));
    matrizB=rellenaMatriz(matrizB);
    salidaMB.innerHTML=mostrarMatriz(matrizB);
    salidaR.innerHTML="";
});
