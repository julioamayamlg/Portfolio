"use strict"

const salida = document.getElementById("salida");
const matriculas = document.getElementById("matriculas");

document.getElementById("generar").addEventListener("click", function(){
    let matriculasGeneradas = generaMatricula(matriculas.value);
    mostrarMatriculas(matriculasGeneradas);
});

function aleatorio(inferior, superior) { //Botón aleatorio
    return Math.floor(Math.random() * ((superior + 1) - inferior) + inferior);
};

function generaMatricula(numero) {
    let matriculasGeneradas= [];
    matriculasGeneradas.length = numero;
    for (let i=0;i<numero;i++){
        matriculasGeneradas[i]= "";
        for (let j=0;j<4;j++){ // 4 NUMEROS UTF8 CORRESPONDE 0->48 9->57
            matriculasGeneradas[i] += String.fromCodePoint(aleatorio(48,57));    
        }
        matriculasGeneradas[i] += "-";
        for (let j=0;j<3;j++){ // 3 LETRAS UTF8 CORRESPONDE A->65 y Z->90
            matriculasGeneradas[i] += String.fromCodePoint(aleatorio(65,90));
        }
    }
    return matriculasGeneradas;
};

function mostrarMatriculas(matriculasGeneradas){
    salida.innerHTML = "<h3>Matrículas Generadas</h3>";
    for (let i=0; i<matriculasGeneradas.length; i++){
        salida.innerHTML += `${matriculasGeneradas[i]}<br/>`;
    }
};
