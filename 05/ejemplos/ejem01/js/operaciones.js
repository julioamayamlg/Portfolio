"use strict"

function suma(op1, op2){
    return op1 + op2;
}
function resta(op1, op2){
    return op1 - op2;
}
function multiplica(op1, op2){
    return op1 * op2;
}
function divide(op1, op2){
    return op1 / op2;
}
function parteEntera(valor){
    return parseInt(valor);
}
function parteDecimal(valor){
    return parseFloat("0." + valor.toString().split(".")[1]).toFixed(2);
}

function resolver(op1, operador, op2){
    let resultado= "";
    switch (operador) {
        case "+":
            resultado = suma (op1, op2);
            console.log("SUMA");
            break;
        case "-":
            resultado = resta (op1, op2);
            console.log("RESTA");
            break;
        case "*":
            resultado = multiplica (op1, op2);
            console.log("MULTI");
            break;
        case "/":
            resultado = divide (op1, op2);
            console.log("DIVISION");
            break;
        case "._":
            resultado = parteDecimal(salida.innerHTML);
            console.log("ENTERO");
            break;
        case "_.":
            resultado = parteEntera(salida.innerHTML);
            console.log("DECIMAL");
            break;
        default:
    }
    return resultado;
}