'use strict';

function mostrarDatos() {
    const cuerpo = document.getElementById("cuerpo");

    // SI EXISTE UNA ESTRUCTURA DE 'localStorage' Y TIENE ALGO
    if (localStorage.getItem("localDatos") && JSON.parse(localStorage.getItem("localDatos")).length > 0) { 
        cuerpo.innerHTML = "Los datos almacenados son: <br />";
        datos = JSON.parse(localStorage.getItem("localDatos"));
        for (let dato of datos) { // PARA CADA dato DE datos [nombre1=valor1, nombre2=valor2...]
             // CREO tr, td y boton e imagen
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
            campoNombre.innerHTML = dato.nombre;
            campoValor.innerHTML = dato.edad;

            // CREO EL boton BORRAR Y AÑADO UN EVENTO PARA QUE BORRE POR EL nombre
            botonBorrar.innerHTML = "Borrar";
            botonBorrar.addEventListener("click", function () {
                borrarDato(dato.nombre);
            });

            // CREO LA imagen
            imagenBorrar.src = "./img/delete.svg";
            imagenBorrar.width = "22";
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle";

            // CREO EL boton ACT
            botonActualizar.innerHTML = "Actualizar";
            botonActualizar.addEventListener("click", function () {
                actualizarDatos(dato.nombre, dato.edad);
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
