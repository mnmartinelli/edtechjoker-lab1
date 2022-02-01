import { html, css, LitElement } from 'lit';


export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 25px;
        background: lightgrey;
      }
      .planet {
        color: var(--planet-color, blue);
      }
    `;
  }

  //declare and initalize variables
  static get properties() {
    return {
      greeting: { type: String },
      planet: { type: String },
    };
  }

  //create object
  constructor() {
    super();
    this.greeting = 'Hey there,';
    this.planet = 'World!';
  }


  //event lister for togglePlanet
  render() {
    return html`
      <span @click=${this.togglePlanet}
        >${this.greeting}
        <span class="planet">${this.planet}</span>
      </span>
    `;
  }
  //Event handler
  togglePlanet() {
    this.planet = this.planet === 'World' ? 'Mars' : 'World';
  }
}

customElements.define('my-element', HelloWorld);