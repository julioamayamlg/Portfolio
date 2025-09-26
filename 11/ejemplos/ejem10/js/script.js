"use strict"

const salida = document.getElementById("salida");
const jugada = document.getElementById("jugada");
const objeto= ['Piedra ✊', 'Papel ✋', 'Tijeras ✌️', 'Lagarto 🦎', 'Spock 🖖'];
let cpu, player;

document.getElementById("jugar").addEventListener("click", function () {
    let resultado = jugar();
    mostrarResultado(resultado, cpu, player);
});

function jugar(){
    let i;
    for (i=0; i<document.juego.jugada.length; i++) {
        if (document.juego.jugada[i].checked) {
            break;
        }
    }
    player = document.juego.jugada[i].value;
    cpu=aleatorio(0,4);
    if (player == cpu) {
        return 'Empate !';
    }else if(player == 0){      //PIEDRA
        if (cpu == 1 || cpu==4){//papel o spock pierde
            return 'Perdiste, Cpu Gana';
        }else{
            return 'Jugador Gana';
        }
    }else if(player == 1){      //PAPEL
        if (cpu == 2 || cpu==3){//tijeras o lagarto pierde
            return 'Perdiste, Cpu Gana';
        }else{
            return 'Jugador Gana';
        }
    }else if(player == 2){      //TIJERAS
        if (cpu == 0 || cpu==4){//piedra o spock pierde
            return 'Perdiste, Cpu Gana';
        }else{
            return 'Jugador Gana';
        }
    }else if(player == 3){      //LAGARTO
        if (cpu==0 || cpu==2){  //piedra o tijeras pierde
            return 'Perdiste, Cpu Gana';
        }else{
            return 'Jugador Gana';
        }
    }else if(player == 4){      //SPOCK
        if (cpu==3 || cpu==1){  //lagarto o papel pierde
            return 'Perdiste, Cpu Gana';
        }else{
            return 'Jugador Gana';
        }
    }
}

function mostrarResultado(resultado, cpu, player){
    salida.innerHTML ="";
    salida.innerHTML += `<h1>Jugador: ${objeto[player]}</h1>`
    salida.innerHTML += `<h1>Cpu: ${objeto[cpu]}</h1>`
    salida.innerHTML += `<h1>${resultado}</h1>`
}

function aleatorio(inferior, superior) {
    return Math.floor(Math.random() * ((superior + 1) - inferior) + inferior);
};
