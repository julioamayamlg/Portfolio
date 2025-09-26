"use strict"

import {reslista, listaTareas} from '../script.js';
import {generaAleatorioEnteros} from './aleatorio.js';

export function eliminarLista(){
    listaTareas.eliminar(generaAleatorioEnteros(0, listaTareas.tamano()-1));
    listaTareas.mostrar(reslista);
}