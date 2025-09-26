"use strict"

import {PRENDAS, respila, cesto} from '../script.js';
import {generaAleatorioEnteros} from './aleatorio.js';

export function paraLavar() {
    let prenda = PRENDAS[generaAleatorioEnteros(1, PRENDAS.length) - 1];
    cesto.apilar(prenda);
    cesto.mostrar(respila);
}