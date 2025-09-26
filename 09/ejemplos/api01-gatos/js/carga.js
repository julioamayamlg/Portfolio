"use strict"

async function carga() {
    let url = "https://meowfacts.herokuapp.com/";
    const resultado = await solicitud(url);
    mostrar(resultado);
}
