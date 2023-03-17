import { LitElement, html, css } from "lit";

class CardMinimal extends LitElement {
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
      }

      :host{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 400px;
        text-align: center;
        filter: drop-shadow(2px 2px 5px black) drop-shadow(-2px -2px 5px black)
      }

      img {
        position: relative;
        bottom: -15px;
        width: 80%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        border: 5px solid #40bfc1;
        box-shadow: 2px 2px 5px black, -2px -2px 5px black;
      }

      div {
        width: 80%;
        background: #202124;
        border: 5px solid #40bfc1;
        color: #FFC300;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 20px;
      }

      h1 {
        cursor: pointer;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        background-color:  #40bfc1; /* Color de fondo */
        color: black; /* Color del texto */
        padding: 10px; /* Espacio interno del botón */
        border: 1px solid black; /* Sin borde */
        border-radius: 50%; /* Bordes redondeados */
        cursor: pointer; /* Cambia el cursor al pasar el ratón */
        font-size: 1.3rem;
        font-weight: bold;
      }

    `;
  }

  goDetails() {
    const event = new CustomEvent("show-details", { detail: this.cocktail, bubbles: true });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <style>${CardMinimal.styles}</style>
      <img @click=${this.goDetails} src=${this.cocktail.strDrinkThumb} alt="cocktail ${this.cocktail.strDrink.toLowerCase()} image">
      <div>
        <h1 @click=${this.goDetails}>${this.cocktail.strDrink}</h1>
        <span @click=${this.goDetails}>ℹ</span>
      </div>

    `;
  }
}

customElements.define("card-minimal", CardMinimal);
