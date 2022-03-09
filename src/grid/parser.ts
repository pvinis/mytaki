import R from 'ramda';
import {BoardSide} from './types';

export function parse(snapshot: string): BoardSide {
  const lines = snapshot.split('\n');

  if (lines === []) {
    throw new Error('Empty snapshot');
  }

  const boardSide: BoardSide = {side: 'bottom', grid: [], legend: ['.']};

  if (lines[0] === '<<BACK' && lines[lines.length - 1] === '<<FRONT') {
    boardSide.side = 'top';
  } else if (lines[0] === '<<FRONT' && lines[lines.length - 1] === '<<BACK') {
    boardSide.side = 'bottom';
  } else {
    throw new Error('Invalid snapshot');
  }

  lines.shift();
  lines.pop();

  boardSide.grid = R.map((line: string) => {
    const chars = line.split('');
    return R.map((char: string) => {
      const index = boardSide.legend.indexOf(char);
      if (index === -1) {
        boardSide.legend.push(char);
        return boardSide.legend.length - 1;
      }

      return index;
    })(chars);
  })(lines);

  return boardSide;
}
