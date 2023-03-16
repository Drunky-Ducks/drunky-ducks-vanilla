import { LitElement, html, css } from "lit";

class CocktailDetail extends LitElement {
  static get properties() {
    return {
      cocktail: { type: Object }
    };
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1.1rem;
        color: white;
      }

      .details {
        width: 100%;
        max-width: 500px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        gap: 30px;
        border-top: 5px solid #ffc300;
        border-bottom: 5px solid #ffc300;
        box-shadow: #00000082 0 15px 30px;
      }

      h1 {
        font-size: 3.4rem;
        text-transform: uppercase;
        color: #FFC300;
        margin-bottom: 10px;
      }

      h2 {
        font-size: 1.5rem;
      }

      h3 {
        color: #FFC300;
        font-size: 1.3rem;
        margin-bottom: 10px;
      }

      h1,
      h2,
      h3 {
        text-align: center;
      }

      picture {
        width: 90%;
        max-width: 350px;
        aspect-ratio: 1/1;
      }

      img {
        width: 100%;
        height: 100%;
      }

      ul {
        list-style: none;
        text-align: center;
      }

      p {
        text-indent: 15px;
        padding: 5px;
      }
    `;
  }

  firstUpdated() {
    const list = this.renderRoot.querySelector(".ingredients");
    const cocktail = this.cocktail;

    for (const props in cocktail.strIngredients) {
      const ingredient = document.createElement("li");

      if (cocktail.strMeasures[props]) {
        ingredient.textContent = `${cocktail.strMeasures[props]} ${cocktail.strIngredients[props]}`;
      } else {
        ingredient.textContent = cocktail.strIngredients[props];
      }

      list.appendChild(ingredient);
    }
  }

  render() {
    return html`
      <style>${CocktailDetail.styles}</style>
      <div class="details">
        <div>
          <h1>${this.cocktail.strDrink}</h1>
          <h2>${this.cocktail.strAlcoholic}</h2>
        </div>
        <picture>
          <img src=${this.cocktail.strDrinkThumb} alt="cocktail ${this.cocktail.strDrink.toLowerCase()} image">
        </picture>
        <div class="ingredients-container">
          <h3>Ingredientes:</h3>
          <ul class="ingredients"></ul>
        </div>
        <div>
          <h3>Intrucciones:</h3>
          <p>${this.cocktail.strInstructions}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("cocktail-detail", CocktailDetail);
