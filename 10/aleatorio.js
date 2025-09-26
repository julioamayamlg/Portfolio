"use strict"

function generaAleatorioEnteros(inferior, superior) {
    return Math.floor(Math.random() * ((superior + 1) - inferior) + inferior); // INCLUYE EL RANGO SUPERIOR
}

function generaAleatorioLetras() {
    let resultado;
    let inferior = 65;
    let superior = 122;

    resultado = generaAleatorioEnteros(inferior, superior);
    while (resultado > 90 && resultado < 97) {
        resultado = generaAleatorioEnteros(inferior, superior);
    }
    return resultado;
}
