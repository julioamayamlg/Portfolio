"use strict"

import {Pila} from './classes/Pila.js';
import {Cola} from './classes/Cola.js';
import { Lista } from './classes/Lista.js';
import { paraLavar } from './modules/paraLavar.js';
import { lavo } from './modules/lavo.js';
import { ojea } from './modules/ojea.js';
import { paraReparar } from './modules/paraReparar.js'
import { reparo } from './modules/reparo.js';
import { ultimoCoche } from './modules/ultimoCoche.js';
import { añadirLista } from './modules/añadirLista.js';
import { eliminarLista } from './modules/eliminarLista.js';
import { añadirPrior } from './modules/añadirPrior.js';
import { eliminarPrior } from './modules/eliminarPrior.js';

export const PRENDAS = ['CAMISA',
    'PANTALÓN',
    'CAMISETA',
    'CALZONCILLO',
    'CALCETINES',
    'CHAQUETA',
    'BUFANDA',
    'SUDADERA',
    'CHALECO',
    'ABRIGO'];
export const cesto = new Pila();

export const COCHES = ['12345-ABC',
    '23456-BCD',
    '34567-CDE',
    '45678-DEF',
    '56789-EFG',
    '67890-FGH',
    '78901-GHI',
    '89012-HIJ',
    '90123-IJK',
    '98765-JKL'];

export const taller = new Cola();

export const tareas =[ '7-ESTUDIAR',
    '2-LEER PERIÓDICO',
    '1-VER TV',
    '5-COMPRAR',
    '3-COLADA',
    '6-COCINAR',
    '5-PLANCHAR',
    '4-GIMNASIO'];

export const listaTareas = new Lista();

document.getElementById("introducir").addEventListener("click", paraLavar);
document.getElementById("obtener").addEventListener("click", lavo);
document.getElementById("ojear").addEventListener("click", ojea);
export const respila = document.getElementById("resPila");

document.getElementById("llegada").addEventListener("click", paraReparar );
document.getElementById("atender").addEventListener("click", reparo);
document.getElementById("ultimo").addEventListener("click", ultimoCoche);
export const rescola = document.getElementById("resCola");

document.getElementById("añadirLista").addEventListener("click", añadirLista);
document.getElementById("eliminarLista").addEventListener("click", eliminarLista);
export const reslista = document.getElementById("resLista");

document.getElementById("añadirPrior").addEventListener("click", añadirPrior);
document.getElementById("eliminarPrior").addEventListener("click", eliminarPrior);
export const reslistaprior = document.getElementById("resListaPrior");