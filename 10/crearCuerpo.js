"use strict"

function crearCuerpo(filas, columnas) {
    let cuerpo = document.createElement("tbody");
    cuerpo.setAttribute("id", "tablaCuerpo");
    for (let i = 0; i < filas; i++) {
        let filas = document.createElement("tr");
        if ((i % 2)==0) {
            filas.setAttribute("id", "tablaCuerpo_par");
        } else {
            filas.setAttribute("id", "tablaCuerpo_impar");
        }
        for (let j = 0; j < columnas; j++) {
            let contenido = document.createTextNode("b");
            let columnas = document.createElement("td");
            columnas.setAttribute("class", "columna");
            columnas.appendChild(contenido);
            filas.appendChild(columnas);
        }
        cuerpo.appendChild(filas);
    }
    return cuerpo;
}