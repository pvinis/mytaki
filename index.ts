import * as R from "ramda"


const Player = (minionA, minionB, minionC) => ({
	m: { a: minionA, b: minionB, c: minionC, EMPTY: 0 },
})

const bottomPlayer = Player(1, 2, 3)

const { m } = bottomPlayer

const Grid = (config, initialGrid) => {
	let grid = initialGrid

	return {
		print: () => R.join("\n", grid),
		fix() {
			grid = [
				[m.a, m.b, m.a, m.EMPTY],
				[m.c, m.c, m.EMPTY, m.EMPTY],
				[m.EMPTY, m.EMPTY, m.EMPTY, m.EMPTY],
			]
		},
	}
}

const bottom = Grid({ rows: 3, columns: 4 }, [
	[m.a, m.b, m.EMPTY, m.EMPTY],
	[m.c, m.c, m.a, m.EMPTY],
	[m.EMPTY, m.EMPTY, m.EMPTY, m.EMPTY],
])

console.log(bottom.print())

bottom.fix()

console.log(bottom.print())
