/* eslint-disable no-unused-vars */
const OFF = "off"
const WARN = "warn"
const ERR = "error"
/* eslint-enable no-unused-vars */


module.exports = {
	rules: {
		"capitalized-comments": OFF, // let comments be whatever they want
		"import/extensions": [ERR, "always", { ts: "never", tsx: "never" }], // no need to include `.ts` in imports
		"no-multiple-empty-lines": [ERR, { max: 2 }], // let me use 2 empty lines
		"import/order": [ERR, { alphabetize: { order: "asc" } }], // order imports
		"import/newline-after-import": [ERR, { count: 2 }], // always leave 2 empty lines below imports
	},
	overrides: [
		{
			files: ["**/*.js", "**/*.cjs"],
			rules: {
				semi: [ERR, "never"],
				quotes: [ERR, "double"],
				"object-curly-spacing": [ERR, "always"],
			},
		},
		{
			files: ["**/*.ts", "**/*.tsx"],
			rules: {
				"@typescript-eslint/semi": [ERR, "never"],
				"@typescript-eslint/quotes": [ERR, "double"],
				"@typescript-eslint/object-curly-spacing": [ERR, "always"],
			},
		},
	],
}

