"use strict"

const salida = document.getElementById("salida");
const peso1 = document.getElementById("peso1");
const peso2 = document.getElementById("peso2");
const pesox = document.getElementById("pesox");
const primera = ['Alavés','Almería','Athletic Bilbao', 'Atlético Madrid', 'FC Barcelona', 'Betis', 'Cádiz', 'Celta Vigo', 'Getafe', 'Girona', 'Granada', 'Las Palmas', 'Mallorca', 'Osasuna', 'Rayo Vallecano', 'Real Madrid', 'Real Sociedad', 'Sevilla', 'Valencia', 'Villareal'];
const segunda = ['Albacete', 'Alcorcón', 'Andorra', 'Burgos','Cartagena', 'Eibar', 'Elche', 'Eldense', 'Espanyol', 'Huesca', 'Leganés', 'Levante', 'Mirandés', 'Oviedo', 'Racing Santander', 'Racing Ferrol', 'Valladolid', 'Zaragoza', 'Amorebieta', 'Sporting', 'Tenerife', 'Villareal B'];

document.getElementById("generar").addEventListener("click", function () {
    let resultados = [];
    resultados = generaQuiniela();
    mostrarQuiniela(resultados);
});

function aleatorio(inferior, superior) {
    return Math.floor(Math.random() * ((superior + 1) - inferior) + inferior);
};

function generaQuiniela() {
    let resultados = [];

    for (let i = 0; i < 15; i++) {
        let num = aleatorio(0,100);
        if (num <= parseInt(peso1.value)) {
            resultados[i]=1;
        }
        else if (num <= parseInt(peso1.value) + parseInt(pesox.value)) {
            resultados[i]='X';
        }
        else {
            resultados[i]=2;
        }
    }
    let equipos1 = [];
    while(equipos1.length < 20 ){    //20 equipos para los 10 partidos de 1a división en el array equipos1
      let numero = aleatorio(0,19);  //20 equipos
      var existe = false;
      for(var i=0;i<equipos1.length;i++){
        if(equipos1[i] == numero){
            existe = true;
            break;
        }
      }
      if(!existe){
        equipos1[equipos1.length] = numero;
      }
    }

    let equipos2 = [];
    while(equipos2.length < 10 ){   //10 equipos para los 5 partidos de 2a división en el array equipos2
      let numero = aleatorio(0,21); //22 equipos
      var existe = false;
      for(i=0;i<equipos2.length;i++){
        if(equipos2[i] == numero){
            existe = true;
            break;
        }
      }
      if(!existe){
        equipos2[equipos2.length] = numero;
      }
    }
    let cruces = [];
    cruces[0]= `<h5>${primera[equipos1[0]]} vs ${primera[equipos1[1]]} -> ${resultados[0]}</h5>`;
    cruces[1]= `<h5>${primera[equipos1[2]]} vs ${primera[equipos1[3]]} -> ${resultados[1]}</h5>`;
    cruces[2]= `<h5>${primera[equipos1[4]]} vs ${primera[equipos1[5]]} -> ${resultados[2]}</h5>`;
    cruces[3]= `<h5>${primera[equipos1[6]]} vs ${primera[equipos1[7]]} -> ${resultados[3]}</h5>`;
    cruces[4]= `<h5>${primera[equipos1[8]]} vs ${primera[equipos1[9]]} -> ${resultados[4]}</h5>`;
    cruces[5]= `<h5>${primera[equipos1[10]]} vs ${primera[equipos1[11]]} -> ${resultados[5]}</h5>`;
    cruces[6]= `<h5>${primera[equipos1[12]]} vs ${primera[equipos1[13]]} -> ${resultados[6]}</h5>`;
    cruces[7]= `<h5>${primera[equipos1[14]]} vs ${primera[equipos1[15]]} -> ${resultados[7]}</h5>`;
    cruces[8]= `<h5>${primera[equipos1[16]]} vs ${primera[equipos1[17]]} -> ${resultados[8]}</h5>`;
    cruces[9]= `<h5>${primera[equipos1[18]]} vs ${primera[equipos1[19]]} -> ${resultados[9]}</h5>`;
    cruces[10]= `<h5>${segunda[equipos2[0]]} vs ${segunda[equipos2[1]]} -> ${resultados[10]}</h5>`;
    cruces[11]= `<h5>${segunda[equipos2[2]]} vs ${segunda[equipos2[3]]} -> ${resultados[11]}</h5>`;
    cruces[12]= `<h5>${segunda[equipos2[4]]} vs ${segunda[equipos2[5]]} -> ${resultados[12]}</h5>`;
    cruces[13]= `<h5>${segunda[equipos2[6]]} vs ${segunda[equipos2[7]]} -> ${resultados[13]}</h5>`;
    cruces[14]= `<h5>${segunda[equipos2[8]]} vs ${segunda[equipos2[9]]} -> ${resultados[14]}</h5>`;
    return cruces;
};

function mostrarQuiniela(quiniela) {
    salida.innerHTML = "<h3>Quiniela Generada</h3>";
    for (let i = 0; i < 15; i++) {
        salida.innerHTML += `${quiniela[i]}`;
    }
};