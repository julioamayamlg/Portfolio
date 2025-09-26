"use strict"

import {Lista} from './Lista.js'

export class Cola extends Lista {
    constructor() {
        super();
    }
    encolar(elemento) {
        super.introducir(elemento, super.tamano()); // this.cola.unshift(elemento);
    }
    desencolar() {
        return super.eliminar(0); // return this.cola.pop();
    }
    mostrar(donde) {
        super.mostrar(donde);
    }
    vacio() {
        super.vacio();
    }
    tamano() {
        super.tamano();
    }
    ultimo() {
        return super.elemento(0);
    }
}