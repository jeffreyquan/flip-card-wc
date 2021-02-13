var css_248z = ".flip-card {\n  height: 100px;\n  width: 100px;\n  background-color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCLEVBQUUiLCJmaWxlIjoic3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsaXAtY2FyZCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XG4iXX0= */";

var template = "<div class=\"flip-card\"></div>\n";

const flipCardTemplate = document.createElement("template");
flipCardTemplate.innerHTML = `
<style>${css_248z}</style>
${template}
`;
class FlipCard extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(flipCardTemplate.content.cloneNode(true));
    }
}
window.customElements.define("flip-card", FlipCard);
//# sourceMappingURL=main.js.map
