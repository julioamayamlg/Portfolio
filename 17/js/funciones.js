"use strict"

function disp(que) {                        //MUESTRA EN EL DISPLAY LA TECLA PULSADA
    if (display.innerHTML !== "0") {
        if (que !== ".") {                  //HAY NUMEROS Y METO MAS NUMEROS
            display.innerHTML = display.innerHTML + que;
        }
        if (que == "." && esdecimal == 0) { //COMA Y EL NUMERO QUE HAY NO ES DECIMAL
            esdecimal = 1;
            display.innerHTML = display.innerHTML + que;
        }
    } else {                                //DISPLAY CERO
        if (que !== ".") {
            display.innerHTML = que;        //METE NUMERO SIN CERO DELANTE SI NO PULSO LA COMA
        } else {
            if (esdecimal == 0) {           //SI PULSO LA COMA LA AÑADE AL NUMERO Y LO CONVIERTE EN DECIMAL (SIEMPRE QUE NO FUERA DECIMAL)
                display.innerHTML = display.innerHTML + que;
                esdecimal = 1;
            }
        }
    }
}

function cambiasigno(num) {                 //CAMBIA EL SIGNO DEL NUMERO EN PANTALLA
    return num * (-1);
}

function operacion(num, oper) {              //BOTONES DE OPERACION
    numero1 = num;
    opera = oper;
    esdecimal = 0;
    display.innerHTML = "0";
    if(oper == "raiz"){                     //RAIZ SOLO NECESITA 1 OPERANDO
        console.log(num, oper);
        if (parseFloat(num)>0) {
            return Math.sqrt(parseFloat(num));
        }else{
            return "ERROR";
        }
    }
    if(oper =="inverso"){                   //INVERSO SOLO NECESITA 1 OPERANDO
        console.log(num, oper);
        return 1 / parseFloat(num);
    }
}
function porcentaje(num1, num2, oper){       //PORCENTAJE
    console.log(num1, num2, oper, "porcentaje");
    let percent = (parseFloat(num1) * parseFloat(num2)) / 100
    switch (oper){
        case "multiplicacion":
            return percent;
            break;
        case "suma":
            return parseFloat(num1) + percent;
            break;
        case "resta":
            return parseFloat(num1) - percent;
            break;
        default:
    }
}
function calcula(num1, num2, oper) {            //SUMA RESTA MULTIPLICACION DIVISION
    console.log(num1, num2, oper);
    switch (oper) {
        case "suma":
            return parseFloat(num1) + parseFloat(num2);
            break;
        case "resta":
            return parseFloat(num1) - parseFloat(num2);
            break;
        case "multiplicacion":
            return parseFloat(num1) * parseFloat(num2);
            break;
        case "division":
            return parseFloat(num1) / parseFloat(num2);
            break;
        default:
    }
}