"use strict"

function crearPie(dimension) {
    let pie = document.createElement("tfoot");
    pie.setAttribute("id", "tablaPie");
    for (let i = 0; i < dimension; i++) {
        let contenido = document.createTextNode("c");
        let columnas = document.createElement("td");
        columnas.appendChild(contenido);    
        pie.appendChild(columnas);
    }
    return pie;
}