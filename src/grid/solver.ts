import { range, reverse } from "ramda"
import { BoardSide } from "./types"
import { allEqual } from "./utils"


export function solve({ side, grid: originalGrid, legend }: BoardSide) {
	// convert to bottom to solve
	const grid = side === "bottom" ? originalGrid : reverse(originalGrid)

	// detect attacks
	for (const col of range(0, grid[0].length)) {
		if (grid[0][col] === 0) {
			continue
		}

		if (allEqual(grid[0][col], grid[1][col], grid[2][col])) {
			// boom, heres an attack, lets change it to a new letter
			// first we will try the same letter but upper case
			const possiblyNewChar = legend[grid[0][col]].toUpperCase()
			if (legend.includes(possiblyNewChar)) {
				// need to find another letter
				// a while?
			}

			legend.push(possiblyNewChar)
			grid[0][col] = legend.length - 1
			grid[1][col] = legend.length - 1
			grid[2][col] = legend.length - 1
		}
	}

	return {
		side,
		grid: side === "bottom" ? grid : reverse(grid),
		legend,
	}
}

