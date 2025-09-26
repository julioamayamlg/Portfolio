"use strict"

function actualizarDatos(id, dato0, dato1){
    let nombre_ = prompt("Introduce nuevo nombre", `${dato0}`);
    let valor_ = prompt("Introduce nueva edad", `${dato1}`);
    borrarDato(id);
    grabarDato(nombre_, valor_);
    mostrarDatos();
}