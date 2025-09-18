export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = ReadonlyArray<Cell>;
export type History = ReadonlyArray<Board>;

export const WINNING_COMBINATIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

export function calculateWinner(board: Board): Player | null {
    for (const [a,b,c] of WINNING_COMBINATIONS) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}