'use client';

import Square from "./Square";
import type { Board } from "../lib/ticTacToe";

type BoardProps = {
    squares: Board;
    onPlay: (index: number) => void
    gameOver: boolean;
}


export default function Board({squares, onPlay, gameOver = false}: BoardProps) {
    return(
        <div className="grid grid-cols-3 gap-2">
            {Array.from({length: 9}, (_, i) => (
                <Square
                    key={i}
                    value={squares[i]}
                    onClick={() => onPlay(i)}
                    disabled={gameOver || squares[i] !== null}
                />
            ))}
        </div>
    );
}
