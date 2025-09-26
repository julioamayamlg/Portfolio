"use strict"

async function carga() {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
    let resultado = await solicitud(url);
    while (resultado.drinks[0].strAlcoholic !== tipoCocktail.value){
        console.log(resultado);
        resultado = await solicitud(url);
    }
    mostrar(resultado);
}