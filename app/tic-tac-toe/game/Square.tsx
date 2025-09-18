'use client';

import type {Cell} from "../lib/ticTacToe";

type SquareProps = {
    value: Cell;
    onClick: () => void
}

export default function Square({value, onClick}: SquareProps) {
    return(
        <button className="w-16 h-16 border border-gray-300 text-4xl font-bold"
                type="button" onClick={onClick} aria-label={value ? `Square with value ${value}` : 'Empty square'}>
            {value ?? ''}
        </button>
    );
}
