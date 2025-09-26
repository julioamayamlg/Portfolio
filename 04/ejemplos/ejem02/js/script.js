"use strict"

let nombre = "";

window.addEventListener('load', function () {
    function grabar() {
        const nombre = document.getElementById("nombre");
        return nombre.value;
    }

    function saludar() {
        const salida = document.getElementById("salida");
        salida.innerHTML = `Hola, ${nombre}`;
    }

    function despedir() {
        const salida = document.getElementById("salida");
        salida.innerHTML = `Adios, ${nombre}`;
    }

    const graba = document.getElementById("graba");
    const saluda = document.getElementById("saluda");
    const despide = document.getElementById("despide");

    graba.addEventListener("click", function () {
        nombre = grabar()
    }); // Listener (evento de escucha para el evento 'click')
    saluda.addEventListener("click", saludar); // Listener (evento de escucha para el evento 'click')
    despide.addEventListener("click", despedir); // Listener (evento de escucha para el evento 'click')
});
