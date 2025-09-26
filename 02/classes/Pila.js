"use strict"

import {Lista} from './Lista.js'

export class Pila extends Lista {
    constructor() {
        super();
    }
    apilar(elemento) {
        super.introducir(elemento, super.tamano()); 
    }
    desapilar() {
        return super.eliminar(super.tamano()-1);
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
    ojear() {
        return super.elemento(super.tamano()-1)
    }
}