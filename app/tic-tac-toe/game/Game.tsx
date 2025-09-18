'use client';
import {useState} from 'react';
import {Board, calculateWinner, Cell, isDraw} from "../lib/ticTacToe";
import BoardT from "./Board";
import Status from "./Status";
import MoveList from "./MoveList";

const emptyBoard: Board = Array<Cell>(9).fill(null);

export default function Game() {
    const [history, setHistory] = useState<Board[]>([emptyBoard]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const currentSquares: Board = history[currentMove];
    const xIsNext: boolean = currentMove % 2 === 0;
    const winner = calculateWinner(currentSquares);
    const draw = isDraw(currentSquares);
    const gameOver = winner || draw;

    function handlePlay(index:number) {
        if (gameOver) return;
        if (currentSquares[index] !== null) return;
        const nextSquares = currentSquares.slice() as Cell[];
        nextSquares[index] = xIsNext ? 'X' : 'O';
        const nextHistory = history.slice(0, currentMove + 1);
        const updated = [...nextHistory, nextSquares];
        setHistory(updated);
        setCurrentMove(updated.length - 1);
    }

    function jumpTo(moveIndex:number) {
        setCurrentMove(moveIndex);
    }

    function resetGame() {
        setHistory([emptyBoard]);
        setCurrentMove(0);
    }

    return (
        <div>
            <div>Next player: {xIsNext ? 'X' : 'O'}</div>
            <BoardT squares={currentSquares} onPlay={handlePlay} />
            <Status winner={winner} xIsNext={xIsNext} draw={draw} />
            {gameOver && (
                <div className="mt-3">
                    <button type="button" onClick={resetGame} className="rounded px-3 py-1 border hover:bg-gray-100">
                        Restart
                    </button>
                </div>
            )}
            <MoveList history={history} currentMove={currentMove} onJumpTo={jumpTo} />
        </div>
    )

}
