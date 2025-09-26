"use strict"

function mostrar(resultado) {
    imageThumb.src = resultado.drinks[0].strDrinkThumb;
    salidaTipoCocktail.innerHTML = "";
    salidaTipoCocktail.innerHTML = `<strong>El tipo de cocktail es:</strong> ${resultado.drinks[0].strAlcoholic}`;
    salidaInstruction.innerHTML = "";
    salidaIngredient.innerHTML = "";
    salidaMeasure.innerHTML = "";
    salidaInstruction.innerHTML += `<strong>Instructions:</strong> ${resultado.drinks[0].strInstructions}<br />`;
    let ingredient = "";
    let measure = "";
    for (let i = 1; i <= 15; i++) { // 15 es el número máximo de ingredientes y medidas
        ingredient = `strIngredient${i}`;
        measure = `strMeasure${i}`;
        if (resultado.drinks[0][ingredient] !== null) {
            salidaIngredient.innerHTML += `<strong>Ingredient</strong> ${i}: ${resultado.drinks[0][ingredient]}<br />`;
            salidaMeasure.innerHTML += `<strong>Measure:</strong> ${resultado.drinks[0][measure]}<br />`;
        }
    }
}
