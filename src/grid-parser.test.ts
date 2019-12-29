import mls from 'multilines'

import { GridParser } from "./grid-parser";


test('base', () => {
	expect(GridParser(mls`
		|<<BACK
		|<<FRONT
	`)).toStrictEqual([
	]);
  });

test('basics', () => {
	expect(GridParser(mls`
		|<<BACK
		|....
		|....
		|....
		|<<FRONT
	`)).toStrictEqual([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);
	expect(GridParser(mls`
		|<<BACK
		|....
		|....
		|.a..
		|<<FRONT
	`)).toStrictEqual([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 0, 0],
	]);
	expect(GridParser(mls`
		|<<BACK
		|....
		|....
		|aabb
		|<<FRONT
	`)).toStrictEqual([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
	]);
  });
