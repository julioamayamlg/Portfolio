'use strict';

mostrarDatos();
// DATOS
const nombre = document.getElementById("nombre");
const valor = document.getElementById("valor");
// GUARDAR
const guardar = document.getElementById("guardar");
guardar.addEventListener("click", function () {
    grabarDato(nombre.value, valor.value);
});
// BORRAR
const borrar = document.getElementById("borrar");
borrar.addEventListener("click", function () {
    borrarDato(nombre.value);
});

