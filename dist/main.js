var css_248z = ":host {\n  display: block; }\n\n.flip-card {\n  position: relative;\n  perspective: 100rem;\n  height: var(--flip-card-height, 100px); }\n  .flip-card__side {\n    height: var(--flip-card-height, 100px);\n    transition: all 0.8s ease;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    border-radius: 4px;\n    overflow: hidden;\n    box-shadow: var(--flip-card-box-shadow, 0 15px 40px rgba(0, 0, 0, 0.15)); }\n    .flip-card__side--front {\n      background-color: var(--flip-card-background-color-front, white); }\n    .flip-card__side--back {\n      background-color: var(--flip-card-background-color-back, white);\n      transform: rotateY(180deg); }\n  .flip-card:hover .flip-card__side--front.hover {\n    transform: rotateY(-180deg); }\n  .flip-card:hover .flip-card__side--back.hover {\n    transform: rotateY(0); }\n\n.clicked--front {\n  transform: rotateY(-180deg); }\n\n.clicked--back {\n  transform: rotateY(0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBRTs7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNDQUFzQyxFQUFFO0VBQ3hDO0lBQ0Usc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHdFQUF3RSxFQUFFO0lBQzFFO01BQ0UsZ0VBQWdFLEVBQUU7SUFDcEU7TUFDRSwrREFBK0Q7TUFDL0QsMEJBQTBCLEVBQUU7RUFDaEM7SUFDRSwyQkFBMkIsRUFBRTtFQUMvQjtJQUNFLHFCQUFxQixFQUFFOztBQUUzQjtFQUNFLDJCQUEyQixFQUFFOztBQUUvQjtFQUNFLHFCQUFxQixFQUFFIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmZsaXAtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGVyc3BlY3RpdmU6IDEwMHJlbTtcbiAgaGVpZ2h0OiB2YXIoLS1mbGlwLWNhcmQtaGVpZ2h0LCAxMDBweCk7IH1cbiAgLmZsaXAtY2FyZF9fc2lkZSB7XG4gICAgaGVpZ2h0OiB2YXIoLS1mbGlwLWNhcmQtaGVpZ2h0LCAxMDBweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWZsaXAtY2FyZC1ib3gtc2hhZG93LCAwIDE1cHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTsgfVxuICAgIC5mbGlwLWNhcmRfX3NpZGUtLWZyb250IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsaXAtY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLWZyb250LCB3aGl0ZSk7IH1cbiAgICAuZmxpcC1jYXJkX19zaWRlLS1iYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsaXAtY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLWJhY2ssIHdoaXRlKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XG4gIC5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZF9fc2lkZS0tZnJvbnQuaG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTsgfVxuICAuZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmRfX3NpZGUtLWJhY2suaG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTsgfVxuXG4uY2xpY2tlZC0tZnJvbnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7IH1cblxuLmNsaWNrZWQtLWJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7IH1cbiJdfQ== */";

var template = "<div class=\"flip-card\">\n  <div class=\"flip-card__side flip-card__side--front\">\n    <div><slot name=\"front\"></div>\n  </div>\n  <div class=\"flip-card__side flip-card__side--back\">\n    <div>\n      <slot name=\"back\">\n    </div>\n  </div>\n</div>\n";

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
    connectedCallback() {
        if (!this.hasAttribute("variant")) {
            this.variant = "hover";
        }
        this.attachEventListeners();
    }
    static get observedAttributes() {
        return ['variant'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (oldVal !== newVal) {
            this.attachEventListeners();
        }
    }
    get variant() {
        return this.getAttribute("variant");
    }
    set variant(newValue) {
        if (newValue) {
            this.setAttribute("variant", newValue);
        }
    }
    attachEventListeners() {
        const cardFront = this._shadowRoot.querySelector(".flip-card__side--front");
        const cardBack = this._shadowRoot.querySelector(".flip-card__side--back");
        if (this.variant === "click") {
            if (cardFront) {
                cardFront.style.cursor = "pointer";
            }
            if (cardBack) {
                cardBack.style.cursor = "pointer";
            }
            cardFront === null || cardFront === void 0 ? void 0 : cardFront.classList.remove("hover");
            cardBack === null || cardBack === void 0 ? void 0 : cardBack.classList.remove("hover");
            cardFront === null || cardFront === void 0 ? void 0 : cardFront.addEventListener('click', function (event) {
                cardFront === null || cardFront === void 0 ? void 0 : cardFront.classList.add("clicked--front");
                cardBack === null || cardBack === void 0 ? void 0 : cardBack.classList.add("clicked--back");
            });
            cardBack === null || cardBack === void 0 ? void 0 : cardBack.addEventListener('click', function (event) {
                cardFront === null || cardFront === void 0 ? void 0 : cardFront.classList.remove("clicked--front");
                cardBack === null || cardBack === void 0 ? void 0 : cardBack.classList.remove("clicked--back");
            });
        }
        if (this.variant === "hover") {
            cardFront === null || cardFront === void 0 ? void 0 : cardFront.classList.add("hover");
            cardFront === null || cardFront === void 0 ? void 0 : cardFront.classList.remove("clicked--front");
            cardBack === null || cardBack === void 0 ? void 0 : cardBack.classList.add('hover');
            cardBack === null || cardBack === void 0 ? void 0 : cardBack.classList.remove('clicked--back');
        }
    }
}
window.customElements.define("flip-card", FlipCard);
//# sourceMappingURL=main.js.map
