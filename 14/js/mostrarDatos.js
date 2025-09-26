'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo"); // referencia al objeto html dónde voy a mostrar los datos

    if (sessionStorage.getItem("sessionAcceso") && JSON.parse(sessionStorage.getItem("sessionAcceso")).length > 0) { // si existe y hay al menos 1
        datosAcceso = JSON.parse(sessionStorage.getItem("sessionAcceso")); // guardo el JSON de la variable localStorage 'acceso' en el array 'datosAcceso'
        cuerpo.innerHTML = "Los datos almacenados son: <br />";

        datosAcceso.forEach(function (datoAcceso) {
            let linea = document.createElement("tr"); // creo una fila
            let campoNombre = document.createElement("td"); // creo una celda para el nombre
            let campoValor = document.createElement("td"); // creo una celda para la clave
            let campoBorrar = document.createElement("td"); // creo una celda para el botón 'borrar'
            let botonBorrar = document.createElement("button"); // creo un botón
            let imagenBorrar = document.createElement("img"); // creo una imagen
            let campoActualizar = document.createElement("td");
            let botonActualizar = document.createElement("button");
            let imagenActualizar = document.createElement("img");
            // DATOS

            campoNombre.innerHTML = datoAcceso.nombre; // escribo el nombre contenido en el array
            campoValor.innerHTML = datoAcceso.valor; // escribo el valor contenida en el array
            // BOTÓN
            botonBorrar.textContent = "Borrar" // etiqueto el botón
            botonBorrar.className = "borrar"; // asigno el botón a una clase
            botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                borrarDato(datoAcceso.nombre); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
            });

            imagenBorrar.src = "./img/delete.svg"; // añado al botón una imagen
            imagenBorrar.width = "22"; // añado al botón los estilos
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle";

            // CREO EL boton ACT
            botonActualizar.innerHTML = "Actualizar";
            botonActualizar.addEventListener("click", function () {
                actualizarDatos(datoAcceso.nombre, datoAcceso.edad);
            });

            // CREO LA imagen ACT
            imagenActualizar.src = "./img/update.svg";
            imagenActualizar.width = "22";
            imagenActualizar.height = "22";
            imagenActualizar.style = "vertical-align: middle";
            // DOM
            linea.appendChild(campoNombre);
            linea.appendChild(campoValor);
            campoBorrar.appendChild(botonBorrar);
            campoBorrar.appendChild(imagenBorrar);
            linea.appendChild(campoBorrar);
            campoActualizar.appendChild(botonActualizar);
            campoActualizar.appendChild(imagenActualizar);
            linea.appendChild(campoActualizar);
            cuerpo.appendChild(linea);
        });
    } else {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
    console.table(datosAcceso);
}
