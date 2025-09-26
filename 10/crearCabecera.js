"use strict"

function crearCabecera(dimension) {
    let cabecera = document.createElement("thead");
    cabecera.setAttribute("id", "tablaCabecera");
    for (let i = 0; i < dimension; i++) {
        let contenido = document.createTextNode("a");
        let columnas = document.createElement("td");
        columnas.appendChild(contenido);    
        cabecera.appendChild(columnas);
    }
    return cabecera;
}