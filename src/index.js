
import cocktails from "./services/cocktails.json";
import "./components/CardMinimal.js";
import "./components/CocktailDetail";
import { setCocktail } from "./context/cocktailContext";

const search = document.querySelector("#searcher");
const list = document.querySelector(".list");

const fillDefaultCocktails = () => {
  for (let i = 0; i < 9; i++) {
    const container = document.createElement("card-minimal");
    container.cocktail = cocktails.drinks[i];
    list.appendChild(container);
  }
};

(() => {
  fillDefaultCocktails();
})();

const filter = (event) => {
  event.preventDefault();
  const searcher = document.querySelector("#searcher").value;
  list.innerHTML = "";
  const cocktail = searcher.toLowerCase();
  let ocurrence = 0;

  if (cocktail === "") {
    fillDefaultCocktails();
  } else {
    for (const nameCocktail of cocktails.drinks) {
      const name = nameCocktail.strDrink.toLowerCase();
      if (name.startsWith(cocktail)) {
        const container = document.createElement("card-minimal");
        container.cocktail = nameCocktail;
        list.appendChild(container);
        ocurrence++;
      }
    }

    if (ocurrence === 0) {
      list.innerHTML = /* html */`
        <div class="error-container">
          <div class="error">Cóctel no encontrado</div>
          <img class="gif-error" src="/media/duck.gif" alt="duck gif">
        </div>
      `;
    }
  }
};

document.querySelector("form").addEventListener("submit", filter);
search.addEventListener("keyup", filter);

document.body.addEventListener("show-details", (event) => {
  location.pathname = "/details.html";
  setCocktail(event.detail);
});

const overage = document.querySelector(".overage");
const underage = document.querySelector(".underage");
const modal = document.querySelector(".modal");

overage.addEventListener("click", () => {
  localStorage.setItem("overage", true);
  modal.style.display = "none";
});

underage.addEventListener("click", () => {
  location.replace("https://www.google.com/");
});

window.addEventListener("load", () => {
  const overageState = localStorage.getItem("overage");

  if (!overageState) {
    modal.style.display = "grid";
  }
});
