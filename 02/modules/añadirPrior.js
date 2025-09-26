"use strict"

import {tareas, reslistaprior, listaTareas} from '../script.js';
import {generaAleatorioEnteros} from './aleatorio.js';

export function añadirPrior(){
    let tarea = tareas[generaAleatorioEnteros(1, tareas.length) - 1];
    listaTareas.introducir(tarea,generaAleatorioEnteros(0, listaTareas.tamano()-1));
    listaTareas.mostrar(reslistaprior);
}