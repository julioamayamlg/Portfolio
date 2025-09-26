"use strict"

import {taller, rescola } from '../script.js';

export function reparo() {
    let coche;
    if (taller.vacio()){
        rescola.innerHTML = "TALLER VACÍO, ERES LIBRE";
    }else{
        coche = taller.desencolar();
        taller.mostrar(rescola);
    }
}