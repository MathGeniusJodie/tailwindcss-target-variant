const plugin = require("tailwindcss/plugin");
module.exports = plugin(({ addVariant, e }) => {
	addVariant("target", ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.${e(`target${separator}${className}`)}:target`;
		});
	});
});

