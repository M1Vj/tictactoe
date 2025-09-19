'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Player } from '../lib/ticTacToe';

type StatusProps = {
    winner: Player | null;
    xIsNext: boolean;
    draw: boolean;
};

export default function Status({ winner, xIsNext, draw }: StatusProps) {
    let message: string;
    if (winner) message = `Winner: ${winner}`;
    else if (draw) message = "It's a draw!";
    else message = `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div role="status" aria-live="polite" className="mb-4 min-h-[1.5rem]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={message}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="text-lg font-semibold"
                >
                    {message}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}