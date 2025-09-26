"use strict"

function inicio() {
    function saludar() {
        const nombre = document.getElementById("nombre");
        const salida = document.getElementById("salida");
        salida.innerHTML = `Hola, ${nombre.value}`;
    }
    
    function despedir() {
        const nombre = document.getElementById("nombre");
        const salida = document.getElementById("salida");
        salida.innerHTML = `Adios, ${nombre.value}`;
    }
    
    const saluda = document.getElementById("saluda");
    const despide = document.getElementById("despide");
    
    saluda.onclick = function () {
        saludar();
    }; // handler (manejador para el evento 'click')
    despide.onclick = function () {
        despedir();
    }; // handler (manejador para el evento 'click')
}

window.onload = inicio; // handler (manejador para el evento de carga del HTML)

