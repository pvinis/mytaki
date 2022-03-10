import { allEqual } from "./utils"


describe("allEqual", () => {
	it("works", () => {
		expect(allEqual(1, 1, 1, 1)).toBe(true)
		expect(allEqual(0, 0, 0)).toBe(true)
		expect(allEqual(0, 1, 0)).toBe(false)
		expect(allEqual(2, 0, 0, 2)).toBe(false)
	})
})
