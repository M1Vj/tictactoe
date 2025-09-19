'use client';
import { useState } from 'react';
import { calculateWinner, isDraw } from '../lib/ticTacToe';
import type { Board, Cell } from '../lib/ticTacToe';
import BoardT from './Board';
import Status from './Status';
import MoveList from './MoveList';

const emptyBoard: Board = Array<Cell>(9).fill(null);

export default function Game() {
    const [history, setHistory] = useState<Board[]>([emptyBoard]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const currentSquares: Board = history[currentMove];
    const xIsNext: boolean = currentMove % 2 === 0;
    const winner = calculateWinner(currentSquares);
    const draw = isDraw(currentSquares);
    const gameOver = winner || draw;

    function handlePlay(index: number) {
        if (gameOver) return;
        if (currentSquares[index] !== null) return;
        const nextSquares = currentSquares.slice() as Cell[];
        nextSquares[index] = xIsNext ? 'X' : 'O';
        const nextHistory = history.slice(0, currentMove + 1);
        const updated = [...nextHistory, nextSquares];
        setHistory(updated);
        setCurrentMove(updated.length - 1);
    }

    function jumpTo(moveIndex: number) {
        setCurrentMove(moveIndex);
    }

    function resetGame() {
        setHistory([emptyBoard]);
        setCurrentMove(0);
    }

    return (
        <div className="mx-auto max-w-3xl p-4">
            <header className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Tic‑Tac‑Toe
                </h1>
                <button
                    type="button"
                    onClick={resetGame}
                    className="rounded-lg px-3 py-1.5 border
                        border-gray-300/70
                        hover:bg-gray-100
                        dark:hover:bg-neutral-800/60
                          transition-colors">
                        Restart
                    </button>

            </header>

            <div className="flex flex-col md:flex-row gap-10">
                <div>
                    <Status winner={winner} xIsNext={xIsNext} draw={draw} />
                    <div className="col-span-2">
                        <BoardT squares={currentSquares} onPlay={handlePlay} gameOver={!!winner || draw} />
                    </div>
                </div>

                <aside>
                    <h2 className="mb-2 text-sm font-medium text-gray-500">Move history</h2>
                    <MoveList history={history} currentMove={currentMove} onJumpTo={jumpTo} />
                </aside>
            </div>
        </div>
    );
}
