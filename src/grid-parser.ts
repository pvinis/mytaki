import R from 'ramda'


export const GridParser = (snapshot: string) => {
	let lines = snapshot.split('\n')
	lines.shift()
	lines.pop()

	if (lines === []) return []

	return R.map((line: string) => {
		const chars = line.split('')
		return R.map((char: string) => {
			return char === '.' ? 0 : 1
		})(chars)
	})(lines)
}
