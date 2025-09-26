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

nombre.addEventListener("change", function () {
    valorInput = nombre.value;
}); // Listener (evento de escucha para el evento 'click')
saluda.addEventListener("click", function () {
    saludar(valorInput);
}); // Listener (evento de escucha para el evento 'click')
despide.addEventListener("click", function () {
    despedir(valorInput);
}); // Listener (evento de escucha para el evento 'click')

