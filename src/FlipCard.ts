import style from "./style.css";
import template from "./template.html";

const flipCardTemplate = document.createElement("template");

flipCardTemplate.innerHTML = `
<style>${style}</style>
${template}
`

class FlipCard extends HTMLElement {
  private _shadowRoot: ShadowRoot;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });

    this._shadowRoot.appendChild(flipCardTemplate.content.cloneNode(true))

  }
}

window.customElements.define("flip-card", FlipCard);
