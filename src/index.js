
import cocktails from "./services/cocktails.json";
import "./components/CardMinimal.js";
import "./components/CocktailDetail";

const search = document.querySelector("#search");
const result = document.querySelector(".container");
const list = document.querySelector(".list");

(() => {
  for (let i = 0; i < 9; i++) {
    const container = document.createElement("card-minimal");
    container.cocktail = cocktails.drinks[i];
    list.appendChild(container);
  }
})();

const filter = (event) => {
  event.preventDefault();
  const searcher = document.querySelector("#searcher").value;
  result.innerHTML = "";
  const cocktail = searcher.toLowerCase();

  for (const nameCocktail of cocktails.drinks) {
    const name = nameCocktail.strDrink.toLowerCase();
    if (name === cocktail) {
      result.innerHTML = "";
      const container = document.createElement("card-minimal");
      container.cocktail = nameCocktail;
      result.appendChild(container);
    }

    if (result.innerHTML === "") {
      result.innerHTML += `
      <div class="error">Cóctel no encontrado</div>
      <img class="gif-error" src="/media/duck.gif" alt="duck gif">
      `;
    }
  }
};

search.addEventListener("click", (e) => filter(e));
search.addEventListener("keyup", (e) => filter(e));
document.body.addEventListener("show-details", (event) => {
  const cocktail = event.detail;
  result.innerHTML = "";
  const container = document.createElement("cocktail-detail");
  container.cocktail = cocktail;
  result.appendChild(container);
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
