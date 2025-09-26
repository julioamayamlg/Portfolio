"use strict"

async function carga() {
    let url = `https://chiquitadas.es/api/quotes/avoleorrr`;
    const resultado = await solicitud(url);
    mostrar(resultado);
}
