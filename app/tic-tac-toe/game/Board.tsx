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
        <div
            className="mt-2 block grid grid-cols-3 gap-[var(--gap)] place-items-center"
            style={{
                '--board-size': 'min(90vmin, 28rem)',
                '--gap': '0.75rem',
                '--tile': 'calc((var(--board-size) - (var(--gap) * 2)) / 3)',
            } as React.CSSProperties}
        >
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
