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
        display: block;
        width: 25rem;
        aspect-ratio: 1/1;
        text-align: center;
      }

      img {
        position: relative;
        bottom: -20px;
        width: 80%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        border: 5px solid #FFC300
      }

      h1 {
        background: #202124;
        border: 5px solid #FFC300;
        color: #FFC300;
        border-radius: 7px;
        padding: 20px;
      }

      button {
        background-color:  #FFC300; /* Color de fondo */
        color: black; /* Color del texto */
        padding: 10px 20px; /* Espacio interno del botón */
        border: 1px dashed black; /* Sin borde */
        border-radius: 50%; /* Bordes redondeados */
        cursor: pointer; /* Cambia el cursor al pasar el ratón */
        font-size: 20px;
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
      <h1 @click=${this.goDetails}>${this.cocktail.strDrink} <button type="button">+</button><span></span></h1>
      
    `;
  }
}

customElements.define("card-minimal", CardMinimal);
