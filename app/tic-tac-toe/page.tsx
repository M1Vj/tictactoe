import React from 'react';
import Game from './game/Game';

export default function TicTacToe()
{
    return (
        <main className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
            </div>
            <div className="grid place-items-center p-4">
                <section className="w-full max-w-3xl rounded-2xl border border-white/20 bg-white/60 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/50">
                    <div className="p-5 md:p-8">
                        <Game />
                    </div>
                </section>
            </div>
        </main>
    );
}