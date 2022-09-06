class Board {
  board: string[][];
  constructor(s: string, numRows: number) {
    this.board = Array.from(Array(numRows), () => Array(s.length).fill(''));
    this.setInBoard(s);
  }

  setInBoard(s: string) {
    let position = { x: 0, y: 0 };
    let direction = 'down';

    s.split('').forEach((target) => {
      this.board[position.y][position.x] = target;

      if (direction === 'down') {
        if (position.y === this.board.length - 1) {
          direction = 'up';
          position.x += 1;
          position.y -= 1;
        } else {
          position.y += 1;
        }
      } else {
        if (position.y === 0) {
          direction = 'down';
          position.y += 1;
        } else {
          position.x += 1;
          position.y -= 1;
        }
      }
    });
  }

  get convertedString() {
    return this.board.map((row) => row.join('')).join('');
  }
}

export function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const board = new Board(s, numRows);

  return board.convertedString;
}
