"use strict"

// CAPTURAR HTML
const filas = document.getElementById("filas");
const columnas = document.getElementById("columnas");
const crearTabla = document.getElementById("crearTabla");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");
const limpiar = document.getElementById("limpiar");
const resTabla = document.getElementById("resTabla");

crearTabla.addEventListener("click", function () {
  let tabla = document.createElement("table");
  tabla.setAttribute("id", "tabla");
  let cabecera = crearCabecera(parseInt(columnas.value));
  console.log(cabecera);
  tabla.appendChild(cabecera);

  let cuerpo = crearCuerpo(parseInt(filas.value), parseInt(columnas.value));
  tabla.appendChild(cuerpo);

  let pie = crearPie(parseInt(columnas.value));
  tabla.appendChild(pie);
  resTabla.replaceChildren(tabla);
});

limpiar.addEventListener("click", limpia);

rojo.addEventListener("click", function () {
  document.getElementById("tablaCabecera").style.backgroundColor = "red";
});

verde.addEventListener("click", function () {
  document.getElementById("tablaCuerpo").style.backgroundColor = "green";
});

azul.addEventListener("click", function () {
  document.getElementById("tablaPie").style.backgroundColor = "blue";
});