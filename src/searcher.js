const searcher = document.querySelector("#searcher").value;
const search = document.querySelector("#search");
const result = document.querySelector("#result");

const filter = () => {
  result.innerHTML = "";
  const cocktail = searcher.toLowerCase();

  for (let nameCocktail of cocktails) {
    let name = nameCocktail.name.toLowerCase();

    if (name.indexOf(cocktail) !== 1) {
      result.innerHTML += `
      <div>${nameCocktail.name}</div>`;
    }

    if (result.innerHTML === "") {
      result.innerHTML += `
      <div>Coctel no encontrado</div>`;
    }
  }
};

search.addEventListener("click", filter);
search.addEventListener("keyup", filter);

filter();
