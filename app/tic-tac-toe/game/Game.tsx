'use client';
import {useState} from 'react';
import type {Board, Cell} from "../lib/ticTacToe";
import BoardT from "./Board";

const emptyBoard: Board = Array<Cell>(9).fill(null);

export default function Game() {
    const [history, setHistory] = useState<Board[]>([emptyBoard]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const currentSquares: Board = history[currentMove];
    const xIsNext: boolean = currentMove % 2 === 0;

    function handlePlay(index: number) {}

    return (
    <div>
        <div>Next player: {xIsNext ? 'X' : 'O'}</div>
        <BoardT squares={currentSquares} onPlay={handlePlay} />
    </div>
    )

}