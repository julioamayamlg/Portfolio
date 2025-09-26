'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "Los datos almacenados son: <br />";
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readonly").objectStore(tablaBD);
        canalBD.getAll().onsuccess = function (event) {
            let registros = event.target.result;
            for (let registro of registros) {
                let linea = document.createElement("tr"); // creo una fila
                let campoNombre = document.createElement("td"); // creo una celda para el nombre
                let campoClave = document.createElement("td"); // creo una celda para la clave

                let campoBorrar = document.createElement("td"); // creo una celda para el botón 'borrar'
                let botonBorrar = document.createElement("button"); // creo un botón
                let imagenBorrar = document.createElement("img"); // creo una imagen
                let campoActualizar = document.createElement("td");
                let botonActualizar = document.createElement("button");
                let imagenActualizar = document.createElement("img");

                campoNombre.innerHTML = registro.nombre; // escribo el nombre contenido en el array
                campoClave.innerHTML = registro.edad; // escribo la clave contenida en el array

                botonBorrar.textContent = "Borrar " // etiqueto el botón
                botonBorrar.className = "borrar"; // asigno el botón a una clase
                botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                    borrarDato(registro.id); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                });

                imagenBorrar.src = "./img/delete.svg"; // añado al botón una imagen
                imagenBorrar.width = "22"; // añado al botón los estilos
                imagenBorrar.height = "22";
                imagenBorrar.style = "vertical-align: middle";
                // CREO EL boton ACT
                botonActualizar.innerHTML = "Actualizar ";
                botonActualizar.addEventListener("click", function () {
                    actualizarDatos(registro.id, registro.nombre, registro.edad);
                });

                // CREO LA imagen ACT
                imagenActualizar.src = "./img/update.svg";
                imagenActualizar.width = "22";
                imagenActualizar.height = "22";
                imagenActualizar.style = "vertical-align: middle";

                botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
                campoBorrar.appendChild(botonBorrar); // añado el botón a la celda
                botonActualizar.appendChild(imagenActualizar);
                campoActualizar.appendChild(botonActualizar);
                linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
                linea.appendChild(campoClave); // añado a la línea la celda con la clave
                linea.appendChild(campoBorrar); // añado a la línea la celda con el botón
                linea.appendChild(campoActualizar);
                cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea 
            }
        }
    };
}