import {BoardSide} from './types';

export function solve({side, grid, legend}: BoardSide) {
  const grid = GridParser(grid);

  return {side, grid, legend};
}
