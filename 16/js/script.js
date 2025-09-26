"use strict"

const foto = document.getElementById("foto");
const aa =document.getElementById("1");
aa.addEventListener("click", function(){
    mostrarFoto(0);
});
const ab=document.getElementById("2");
ab.addEventListener("click", function(){
    mostrarFoto(1);
});
const ac=document.getElementById("3");
ac.addEventListener("click", function(){
    mostrarFoto(2);
});
const ad=document.getElementById("4");
ad.addEventListener("click", function(){
    mostrarFoto(3);
});
const ae=document.getElementById("5");
ae.addEventListener("click", function(){
    mostrarFoto(4);
});
const af=document.getElementById("6");
af.addEventListener("click", function(){
    mostrarFoto(5);
});
const ag=document.getElementById("7");
ag.addEventListener("click", function(){
    mostrarFoto(6);
});
const ah=document.getElementById("8");
ah.addEventListener("click", function(){
    mostrarFoto(7);
});
document.getElementById("prev").addEventListener("click", function(){
    if (actual==0){
        actual=7;
    }else{
        actual= actual-1;
    }
    console.log(actual);
    mostrarFoto(actual);
});

document.getElementById("next").addEventListener("click", function(){
    if (actual==7){
        actual=0;
    }else{
        actual= actual+1;
    }
    console.log(actual);
    mostrarFoto(actual);
});

let fotos = [];
let actual=0;
init();
async function init() {
    const url = `https://picsum.photos/v2/list`;
    let resultado = await solicitud(url);
    for (let i=0;i<8;i++) {
        fotos[i]=resultado[i].download_url;
    }
    console.log(resultado);
    aa.src=fotos[0];
    ab.src=fotos[1];
    ac.src=fotos[2];
    ad.src=fotos[3];
    ae.src=fotos[4];
    af.src=fotos[5];
    ag.src=fotos[6];
    ah.src=fotos[7];

}
async function solicitud(url) {
    let resultado = await fetch(url);
    return resultado.json();
}
function mostrarFoto(id){
    foto.src = fotos[id];
    actual=id;
}