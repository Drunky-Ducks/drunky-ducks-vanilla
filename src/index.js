import "./components/CocktailDetail.js";
import "./components/CardMinimal.js";

const cocktail = {
  strDrink: "Mojito",
  strAlcoholic: "No alcoholico",
  strDrinkThumb: "https://img2.goodfon.com/wallpaper/nbig/b/a7/mojito-lime-fresh-mint-6900.jpg",
  strIngredients: ["Ostia para Pedro"],
  strMeasures: ["1"],
  strInstructions: "Con la mano abierta"
};

const card = document.createElement("card-minimal");

card.cocktail = cocktail;

document.body.appendChild(card);

document.body.addEventListener("show-details", (event) => {
  const cocktail = event.detail;
  document.body.innerHTML = "";
  const container = document.createElement("cocktail-detail");
  container.cocktail = cocktail;
  document.body.appendChild(container);
});
