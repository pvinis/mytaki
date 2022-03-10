export function allEqual(...values: unknown[]): boolean {
	const [first, ...rest] = values

	for (const value of rest) {
		if (value !== first) {
			return false
		}
	}

	return true
}
