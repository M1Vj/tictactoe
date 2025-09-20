'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Player } from '../lib/ticTacToe';

type StatusProps = {
    winner: Player | null;
    xIsNext: boolean;
    draw: boolean;
};

export default function Status({ winner, xIsNext, draw }: StatusProps) {
    let message: string; let tone: 'neutral' | 'win' | 'draw' = 'neutral';
    if (winner) { tone = 'win'; message = `Winner: ${winner}`; }
    else if (draw) { tone = 'draw'; message = "It's a draw!"; }
    else { message = `Next player: ${xIsNext ? 'X' : 'O'}`; }

    const toneClass =
        tone === 'win'
            ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
            : tone === 'draw'
<<<<<<< HEAD
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30'
                : 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30';
=======
                ? 'bg-amber-500/25 text-amber-700 dark:text-amber-300 border-amber-500/30'
                : 'bg-blue-400/40 text-blue-800 dark:text-blue-400 border-blue-500/30';
>>>>>>> light-mode-bug

    return (
        <div role="status" aria-live="polite" className="mb-4 min-h-[2.25rem]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={message}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className={'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ' + toneClass}
                >
          <span
              className={
                  'inline-block h-2.5 w-2.5 rounded-full ' +
                  (tone === 'win' ? 'bg-emerald-500' : tone === 'draw' ? 'bg-amber-500' : 'bg-blue-500')
              }
          />
                    {message}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}