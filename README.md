[![npm package](https://img.shields.io/npm/v/flip-card-wc.svg)](https://www.npmjs.com/package/flip-card-wc)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jeffreyquan/flip-card-wc)

# Flip Card Web Component

`flip-card-wc` is a card web component that can flip on hover or on click. It can be used in any library/framework
or in plain HTML.

Features:

- Card that flips on hover
- Card that flips on click

## Demo

<!--
```
<custom-element-demo>
  <template>
    <script src="http://unpkg.com/flip-card-wc/dist/main.js"></script>
    <custom-style>
      <style is="custom-style">
        .card {
          --flip-card-height: 300px;
          --flip-card-background-color-front: LightSkyBlue;
          --flip-card-background-color-back: salmon;
          --flip-card-box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
            0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
        }

        .card__details {
          height: var(--flip-card-height);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        }
      </style>
    </custom-style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<flip-card class="card" variant="click">
  <div class="card__details" slot="front">
    <p>Hello</p>
  </div>
  <div class="card__details" slot="black">
    <p>World</p>
  </div>
</flip-card>
```

### HTML

Visit the following [link](https://flip-card-wc.netlify.app/) for an example of usage in plain HTML.

### React

Visit this [Code Sandbox](https://codesandbox.io/s/flip-card-wc-5i248) for an example of usage in React.

## Installation

### Option 1 - HTML

Add the following script tag to your `index.html`:

```
<script src="http://unpkg.com/flip-card-wc/dist/main.js"></script>
```

### Option 2 - React, Angular or Vue

Install the package to your project:

```
npm install flip-card-wc
```

Add the following in your entry file e.g. `index.js`:

```
import "flip-card-wc"
```

## Usage

Use the `flip-card` tag and define two inner elements, one with `slot="front"` and one with `slot="back"`.

Add `variant="hover"` or `variant="click"` to the `flip-card` tag. If nothing is added, the flip card will default to flipping on hover.

```html
<flip-card variant="hover" class="trivia-card">
  <div slot="front"><!-- ADD CONTENT FOR FRONT OF CARD HERE --></div>
  <div slot="back"><!-- ADD CONTENT FOR BACK OF CARD HERE --></div>
</flip-card>
```

### Props

| Prop      | Type                 | Default   | Description                          |
| --------- | -------------------- | --------- | ------------------------------------ |
| `variant` | `"hover" \| "click"` | `"hover"` | The mechanism of how the card flips. |

### Styling

`flip-card-wc` utilises CSS variables that help style the component. These can be overridden to adjust the styling. The amount of styling is intentionally lean to allow the user to focus on styling the content of the card (i.e the front and back).

To override the CSS variables, it is recommended to add a class to the `flip-card` tag and define the CSS variables in that class. The values used below are the `default` values.

```css
.trivia-card {
  --flip-card-height: 100px;
  --flip-card-transition-duration: 800ms;
  --flip-card-border-radius: 4px;
  --flip-card-box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  --flip-card-background-color-front: white;
  --flip-card-background-color-back: white;
}
```

## Contributing

If you would like to contribute, please follow the instructions below:

1. Fork the repo
2. Run `npm install`
3. Create a feature branch: `git checkout -b feature/feature-name`
4. Commit your changes: `git commit -am "Added feature`
5. Push to the branch: `git push origin feature/feature-name`
6. Submit a Pull Request

## Development

Run the following commands after cloning the repo.

```sh
npm install
npm run start
```

Make changes in the `style.scss` and the `FlipCard.ts` file in the `src` directory.

## License

MIT
