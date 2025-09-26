"use strict"

import {cesto, respila} from '../script.js';

export function ojea() {
    let elemento = cesto.ojear();
    respila.innerHTML = elemento;
}