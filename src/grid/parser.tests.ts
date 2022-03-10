import mls from "multilines"
import { parse } from "./parser"


describe("parser", () => {
	it("base", () => {
		expect(parse(mls`
			|<<BACK
			|<<FRONT
			`),
		).toStrictEqual({
			side: "top", grid: [], legend: ["."],
		})
	})

	it("basics", () => {
		expect(parse(mls`
			|<<BACK
			|....
			|....
			|....
			|<<FRONT
		`)).toStrictEqual({
			side: "top",
			grid: [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			legend: ["."],
		})
		expect(parse(mls`
			|<<BACK
			|....
			|....
			|.a..
			|<<FRONT
		`)).toStrictEqual({
			side: "top",
			grid: [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 1, 0, 0],
			],
			legend: [".", "a"],
		})
		expect(parse(mls`
			|<<BACK
			|....
			|....
			|aabb
			|<<FRONT
		`)).toStrictEqual({
			side: "top",
			grid: [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 1, 2, 2],
			],
			legend: [".", "a", "b"],
		})
		expect(parse(mls`
			|<<FRONT
			|.y..y...
			|.y..y...
			|.g..y...
			|........
			|........
			|........
			|<<BACK
		`)).toStrictEqual({
			side: "bottom",
			grid: [
				[0, 1, 0, 0, 1, 0, 0, 0],
				[0, 1, 0, 0, 1, 0, 0, 0],
				[0, 2, 0, 0, 1, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
			],
			legend: [".", "y", "g"],
		})
		expect(parse(mls`
			|<<FRONT
			|.y..g...
			|.y..g...
			|.y..g...
			|........
			|........
			|........
			|<<BACK
		`)).toStrictEqual({
			side: "bottom",
			grid: [
				[0, 1, 0, 0, 2, 0, 0, 0],
				[0, 1, 0, 0, 2, 0, 0, 0],
				[0, 1, 0, 0, 2, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
			],
			legend: [".", "y", "g"],
		})
	})

	it("allows for a forced legend, for tests", () => {
		expect(parse(mls`
			|<<FRONT
			|.y..y...
			|.y..y...
			|.g..y...
			|........
			|........
			|........
			|<<BACK
		`, ".yYgf")).toStrictEqual({
			side: "bottom",
			grid: [
				[0, 1, 0, 0, 1, 0, 0, 0],
				[0, 1, 0, 0, 1, 0, 0, 0],
				[0, 3, 0, 0, 1, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
			],
			legend: ".yYgf".split(""),
		})
		expect(parse(mls`
			|<<FRONT
			|.Y......
			|.Y......
			|.Y......
			|........
			|........
			|........
			|<<BACK
		`, ".yY")).toStrictEqual({
			side: "bottom",
			grid: [
				[0, 2, 0, 0, 0, 0, 0, 0],
				[0, 2, 0, 0, 0, 0, 0, 0],
				[0, 2, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
			],
			legend: ".yY".split(""),
		})
	})
})
