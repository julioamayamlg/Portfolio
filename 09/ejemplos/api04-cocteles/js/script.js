"use strict"

const tipoCocktail =  document.getElementById("tipoCocktail");
tipoCocktail.addEventListener("change", carga);

const cargar = document.getElementById("cargar");
cargar.addEventListener("click", carga);

const imageThumb = document.getElementById("imageThumb");
const salidaTipoCoctail = document.getElementById("salidaTipoCocktail");
const salidaInstruction = document.getElementById("salidaInstruction");
const salidaIngredient = document.getElementById("salidaIngredient");
const salidaMeasure = document.getElementById("salidaMeasure");