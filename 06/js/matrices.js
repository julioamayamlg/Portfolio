"use strict"

function aleatorio(min, max) {
    if (min>max) {
        let temp=min;
        min = max;
        max = temp;
    }
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function generaMatriz(dimension){
    let matriz= [];
    for (let i=0;i<dimension;i++){
        matriz[i]=[];
    }
    for (let i=0;i<dimension;i++){
        for (let j=0;j<dimension;j++){
            matriz[i][j]= 0;
        }
    }
    return matriz;
}
function rellenaMatriz(matriz){
    for (let i=0;i<matriz.length;i++){
        for (let j=0;j<matriz.length;j++){
            matriz[i][j]= aleatorio(10,99);
        }
    }
    return matriz;
}
function mostrarMatriz(matriz){
    let cadena = "<table>";
    for (let i=0;i<matriz.length;i++){
        cadena += "<tr>";
        for (let j=0;j<matriz.length;j++){
            cadena += `<td><h2>${matriz[i][j]}<h2></td>`;
        }
        cadena += "</tr>";
    }
    cadena += "</table>";
    return cadena;
}

function sumarMatrices(matrizA, matrizB){
    let matrizR = generaMatriz(matrizA.length);

    for (let i=0;i<matrizA.length; i++){
        for (let j=0;j<matrizA.length; j++){
            matrizR[i][j]= matrizA[i][j]+matrizB[i][j];
        }
    }
    return matrizR;
}

function restarMatrices(matrizA, matrizB){
    let matrizR = generaMatriz(matrizA.length);

    for (let i=0;i<matrizA.length; i++){
        for (let j=0;j<matrizA.length; j++){
            matrizR[i][j]= matrizA[i][j]-matrizB[i][j];
        }
    }
    return matrizR;
}

function multiplicarMatrices(matrizA, matrizB){
    let matrizR = generaMatriz(matrizB.length);
    for (let i=0; i<matrizB.length;i++){
        for (let j=0; j<matrizB.length; j++){
            for(let k=0; k<matrizB.length; k++){
                matrizR[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    return matrizR;
}