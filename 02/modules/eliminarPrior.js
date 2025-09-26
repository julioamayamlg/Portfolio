"use strict"

import {reslistaprior, listaTareas} from '../script.js';

export function eliminarPrior(){
    let tamaño = listaTareas.tamano();
    let mayor = 0;
    let mayorpos = 0;
    let palabras = [];
    for (let i=0; i<tamaño; i++){
        palabras = listaTareas.elemento(i).split("-");
        if (palabras[0] > mayor){
            mayor = palabras[0];
            mayorpos = i;
        }
    }
    listaTareas.eliminar(mayorpos);
    listaTareas.mostrar(reslistaprior);
}