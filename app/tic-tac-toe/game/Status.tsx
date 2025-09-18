'use client';
import type {Player} from "../lib/ticTacToe";

type StatusProps = {
    winner: Player | null;
    xIsNext: boolean;
    draw: boolean;
}

export default function Status({winner, xIsNext, draw}: StatusProps) {
    let message: string;

    if (winner){
        message = `Winner: ${winner}`;
    } else if (draw) {
        message = "It's a draw!";
    } else {
        message = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
    return (
        <div className="mb-4 text-lg font-semibold">
            {message}
        </div>
    )
}