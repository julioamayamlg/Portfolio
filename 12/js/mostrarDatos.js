'use strict';

function mostrarDatos() {
    const cuerpo = document.getElementById("cuerpo");
    let datos = document.cookie.split(";");
    if (document.cookie.length > 0) { // SI HAY ALGO QUE MOSTRAR, LO MUESTRO
        cuerpo.innerHTML = "Los datos almacenados son: <br />";
        for (let dato of datos) { // PARA CADA dato DE datos [nombre1=valor1, nombre2=valor2...]
            // CREO tr, td Y boton
            let linea = document.createElement("tr");
            let campoNombre = document.createElement("td");
            let campoValor = document.createElement("td");
            let campoBorrar = document.createElement("td");
            let botonBorrar = document.createElement("button");
            let imagenBorrar = document.createElement("img");
            let campoActualizar = document.createElement("td");
            let botonActualizar = document.createElement("button");
            let imagenActualizar = document.createElement("img");

            // ME QUEDO CON LOS DATOS (nombre, valor)
            dato = dato.split("=");
            campoNombre.innerHTML = dato[0];
            campoValor.innerHTML = dato[1];

            // CREO EL boton BORRAR
            botonBorrar.innerHTML = "Borrar";
            botonBorrar.addEventListener("click", function () {
                borrarDato(dato[0]);
            });

            // CREO LA imagen
            imagenBorrar.src = "./img/delete.svg";
            imagenBorrar.width = "22";
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle";

            // CREO EL boton ACT
            botonActualizar.innerHTML = "Actualizar";
            botonActualizar.addEventListener("click", function () {
                actualizarDatos(dato[0], dato[1]);
            });

            // CREO LA imagen ACT
            imagenActualizar.src = "./img/update.svg";
            imagenActualizar.width = "22";
            imagenActualizar.height = "22";
            imagenActualizar.style = "vertical-align: middle";

            // INSERTO EN EL DOM
            linea.appendChild(campoNombre);
            linea.appendChild(campoValor);
            campoBorrar.appendChild(botonBorrar);
            campoBorrar.appendChild(imagenBorrar);
            linea.appendChild(campoBorrar);
            campoActualizar.appendChild(botonActualizar);
            campoActualizar.appendChild(imagenActualizar);
            linea.appendChild(campoActualizar);
            cuerpo.appendChild(linea);
        };
    } else { // SI NO HAY NADA QUE MOSTRAR, NO MUESTRO NADA
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
}
