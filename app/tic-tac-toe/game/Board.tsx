'use client';

import Square from "./Square";
import type {Board} from "../lib/ticTacToe";

type BoardProps = {
    squares: Board;
    onPlay: (index: number) => void
}


export default function Board({squares, onPlay}: BoardProps) {
    return(
        <div>
            <div>
                <Square value={squares[0]} onClick={() => onPlay(0)} />
                <Square value={squares[1]} onClick={() => onPlay(1)} />
                <Square value={squares[2]} onClick={() => onPlay(2)} />
            </div>
            <div>
                <Square value={squares[3]} onClick={() => onPlay(3)} />
                <Square value={squares[4]} onClick={() => onPlay(4)} />
                <Square value={squares[5]} onClick={() => onPlay(5)} />
            </div>
            <div>
                <Square value={squares[6]} onClick={() => onPlay(6)} />
                <Square value={squares[7]} onClick={() => onPlay(7)} />
                <Square value={squares[8]} onClick={() => onPlay(8)} />
            </div>
        </div>
    );
}
