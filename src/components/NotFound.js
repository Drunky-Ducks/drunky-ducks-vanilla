import { LitElement, html, css } from "lit";

class NotFound extends LitElement {
  static get styles() {
    return css`
      .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .error {
      color: #ffc300;
      font-size: 2rem;
      text-align: center;
    }

    .gif-error {
      width: 80%;
      max-width: 300px;
    }
    `;
  }

  squawk() {
    const squawk = new Audio("/audio/squawk-duck.mp3");
    squawk.play();
  }

  render() {
    return html`
    <style>${NotFound.styles}</style>
      <div class="error-container">
          <div class="error">Cóctel no encontrado</div>
          <img @click=${this.squawk} class="gif-error" src="/media/duck.gif" alt="duck gif">
      </div>
    `;
  }
}

customElements.define("not-found", NotFound);
