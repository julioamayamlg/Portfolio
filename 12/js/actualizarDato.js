"use strict"

function actualizarDatos(dato0, dato1){
    let nombre_ = prompt("Introduce nuevo nombre", `${dato0}`);
    let valor_ = prompt("Introduce nuevo valor", `${dato1}`);
    borrarDato(dato0);
    grabarDato(nombre_, valor_);
    mostrarDatos();
}