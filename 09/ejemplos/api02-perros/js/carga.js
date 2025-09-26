"use strict"

async function carga() {
    let url = `https://dog.ceo/api/breed/${razas.value}/images/random`;
    const resultado = await solicitud(url);
    mostrar(resultado);
}
