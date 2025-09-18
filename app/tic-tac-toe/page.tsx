import React from 'react';
import Game from './game/Game';

export default function TicTacToe()
{
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-2xl shadow p-6 border">
                <Game />
            </div>
        </div>
    )
}