"use strict"

import {taller, rescola, COCHES} from '../script.js';
import { generaAleatorioEnteros } from './aleatorio.js';

export function paraReparar() {
    let coche = COCHES[generaAleatorioEnteros(1, COCHES.length) - 1];
    taller.encolar(coche);
    taller.mostrar(rescola);
}