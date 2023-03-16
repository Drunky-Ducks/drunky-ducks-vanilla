const setCocktail = (data) => {
  sessionStorage.setItem("cocktail", JSON.stringify(data));
};

const getCocktail = () => sessionStorage.cocktail;

export { setCocktail, getCocktail };
