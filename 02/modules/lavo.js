"use strict"

import { cesto, respila } from "../script.js";

export function lavo() {
    let elemento;
    elemento = cesto.desapilar();
    cesto.mostrar(respila);
    respila.innerHTML += `La prenda lavada es ${elemento}`;
    //console.log(`La prenda lavada es ${elemento}`);
}