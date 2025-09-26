"use strict"

window.addEventListener('load', function(){
    let numero= "";
    function leer() {
        const numero = document.getElementById("numero");
        return Number(numero.value);
    }
    function binario() {
        const salida = document.getElementById("salida");
        numero = numero.toString(2);
        salida.innerHTML= `El número transformado a binario es: ${numero}`;
    }
    function octal() {
        const salida = document.getElementById("salida");
        numero = numero.toString(8);
        salida.innerHTML= `El número transformado a octal es: ${numero}`;
    }
    function hexadecimal() {
        const salida = document.getElementById("salida");
        numero = numero.toString(16);
        salida.innerHTML= `El número transformado a hexadecimal es: ${numero}`;
    }
    const abinario = document.getElementById("binario");
    abinario.addEventListener('click', function(){
        numero= leer();
        binario();
    })
    const aoctal = document.getElementById("octal");
    aoctal.addEventListener('click', function(){
        numero= leer();
        octal();
    })
    const ahexadecimal = document.getElementById("hexadecimal");
    ahexadecimal.addEventListener('click', function(){
        numero= leer();
        hexadecimal();
    })
});
