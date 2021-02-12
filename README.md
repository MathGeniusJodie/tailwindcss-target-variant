# tailwindcss-target-variant

adds variant for the `:target` pseudo-class

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