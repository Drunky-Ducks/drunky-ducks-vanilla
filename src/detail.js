import { getCocktail } from "./context/cocktailContext";
import { fillFooterIcons } from "./modules/fillFooterIcons";

import "./components/CocktailDetail.js";

fillFooterIcons();

const cocktail = JSON.parse(getCocktail());

const container = document.createElement("cocktail-detail");
container.cocktail = cocktail;
document.querySelector(".container").appendChild(container);
