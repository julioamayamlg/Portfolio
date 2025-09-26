'use strict';

function borrarDato(nombre) {
    let minutos = 5;
    let segundos = 60;
    let milisegundos = 1000;
    let caducidad = minutos * segundos * milisegundos; // recordad, la caducidad esté en milisegundos
    let fechaActual = new Date(); // me devuelve un objeto fecha, con la fecha y hora actual
    let fechaActualenMilisegundos = fechaActual.getTime(); // me devuelve la fecha actual en milisegundos desde 1970
    fechaActualenMilisegundos = fechaActualenMilisegundos - caducidad;
    fechaActual.setTime(fechaActualenMilisegundos);  // me devuelve el objeto fecha, con la fecha + caducidad
    document.cookie =
        nombre + "=;expires=" +

        fechaActual.toUTCString() + ";path=./;SameSite=Strict;Secure";
    mostrarDatos();
}