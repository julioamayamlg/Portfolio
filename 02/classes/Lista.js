"use strict"

export class Lista {
    constructor() {
        this.lista = new Array();
    }
    introducir(elemento, indice) {
        return this.lista.splice(indice, 0, elemento);
    }
    eliminar(indice) {
        return this.lista.splice(indice, 1);
    }
    mostrar(donde) {
        donde.innerHTML = this.lista;
    }
    vacio() {
        return (this.lista.length == 0);
    }
    tamano() {
        return this.lista.length;
    }
    elemento(indice) {
        let elemento = this.lista[indice];
        return elemento;
    }
}