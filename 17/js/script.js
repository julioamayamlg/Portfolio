"use strict"

let numero1 = 0;
let numero2 = 0;
let esdecimal = 0;
let opera;

const display = document.getElementById("calculator_display");
document.getElementById("1").addEventListener("click", function(){
    disp("1");
});
document.getElementById("2").addEventListener("click", function(){
    disp("2");
});
document.getElementById("3").addEventListener("click", function(){
    disp("3");
});
document.getElementById("4").addEventListener("click", function(){
    disp("4");
});
document.getElementById("5").addEventListener("click", function(){
    disp("5");
});
document.getElementById("6").addEventListener("click", function(){
    disp("6");
});
document.getElementById("7").addEventListener("click", function(){
    disp("7");
});
document.getElementById("8").addEventListener("click", function(){
    disp("8");
});
document.getElementById("9").addEventListener("click", function(){
    disp("9");
});
document.getElementById("0").addEventListener("click", function(){
    disp("0");
});
document.getElementById("coma").addEventListener("click", function(){
    disp(".");
});
document.getElementById("clear").addEventListener("click", function(){
    display.innerHTML = "0";
    esdecimal=0;
});
document.getElementById("signo").addEventListener("click", function(){
    display.innerHTML = cambiasigno(display.innerHTML);
});
document.getElementById("suma").addEventListener("click", function(){
    operacion(display.innerHTML, "suma");
});
document.getElementById("resta").addEventListener("click", function(){
    operacion(display.innerHTML, "resta");
});
document.getElementById("multiplicacion").addEventListener("click", function(){
    operacion(display.innerHTML, "multiplicacion");
});
document.getElementById("division").addEventListener("click", function(){
    operacion(display.innerHTML, "division");
});
document.getElementById("raiz").addEventListener("click", function(){
    display.innerHTML = operacion(display.innerHTML, "raiz");
});
document.getElementById("inverso").addEventListener("click", function(){
    display.innerHTML = operacion(display.innerHTML, "inverso");
});
document.getElementById("porcentaje").addEventListener("click", function(){
    display.innerHTML = porcentaje(numero1, display.innerHTML, opera);
});
document.getElementById("calcula").addEventListener("click", function(){
    display.innerHTML = calcula(numero1, display.innerHTML, opera);
});