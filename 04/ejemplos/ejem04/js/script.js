"use strict"

let valorInput = "";

function saludar(nombre) {
    const salida = document.getElementById("salida");
    salida.innerHTML = `Hola, ${nombre}`;
}

function despedir(nombre) {
    const salida = document.getElementById("salida");
    salida.innerHTML = `Adios, ${nombre}`;
}

const nombre = document.getElementById("nombre");
const saluda = document.getElementById("saluda");
const despide = document.getElementById("despide");

nombre.addEventListener("keyup", function () {
    valorInput = nombre.value;
    saludar(valorInput);
}); // Listener (evento de escucha para el evento 'KEYUP')
nombre.addEventListener("blur", function () {
    despedir(valorInput);
}); // Listener (evento de escucha para el evento 'BLUR')

