import { getCocktail } from "./context/cocktailContext";
import "./components/CocktailDetail.js";

const cocktail = JSON.parse(getCocktail());

const container = document.createElement("cocktail-detail");
container.cocktail = cocktail;
document.querySelector(".container").appendChild(container);
