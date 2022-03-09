const OFF = "off"
const ERR = "error"


module.exports = {
	rules: {
		semi: [ERR, "never"],
		quotes: [ERR, "double"],
		"capitalized-comments": OFF, // let comments be whatever they want
		"import/extensions": [ERR, "always", {ts: "never", tsx: "never"}], // no need to include `.ts` in imports
		"no-multiple-empty-lines": [ERR, {max: 2}], // let me use 2 empty lines
		"import/order": [ERR, {alphabetize: {order: "asc"}}], // order imports
		"import/newline-after-import": [ERR, {count: 2}], // always leave 2 empty lines below imports
	},
	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx"],
			rules: {
				"@typescript-eslint/semi": [ERR, "never"],
				"@typescript-eslint/quotes": [ERR, "double"],
			},
		},
	],
}

