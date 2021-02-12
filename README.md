# tailwindcss-target-variant

adds variant for the `:target` pseudo-class

https://github.com/MathGeniusJodie/tailwindcss-target-variant
https://www.npmjs.com/package/tailwindcss-target-variant

# usage

in tailwind.config.css

```js
module.exports = {
	plugins: [
		targetVariant,
	],
	variants: {
		display: ["target"],
	},
};
```

in html

```html
<div class="hidden target:block"></div
```