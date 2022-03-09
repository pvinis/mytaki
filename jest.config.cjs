module.exports = {
	roots: ["<rootDir>/src"],
	testMatch: ["**/*.tests.(ts|tsx)"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
}
