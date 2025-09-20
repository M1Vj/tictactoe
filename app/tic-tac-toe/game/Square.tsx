'use client';

import { motion } from 'framer-motion';
import type { Cell } from '../lib/ticTacToe';

type SquareProps = {
    value: Cell;
    onClick: () => void;
    disabled?: boolean;
};

export default function Square({ value, onClick, disabled }: SquareProps) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={value ? `Square with value ${value}` : 'Empty square'}
            whileHover={disabled ? undefined : { scale: 1.04 }}
            whileTap={disabled ? undefined : { scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className={[
                // size & layout
                'w-[var(--tile)] h-[var(--tile)] grid place-items-center',
                // visuals
                'rounded-xl border border-gray-300/70 shadow-sm',
                'bg-white/80 dark:bg-neutral-900/60 backdrop-blur',
<<<<<<< HEAD
                'text-5xl md:text-7xl font-bold',
=======
                'text-5xl md:text-7xl font-bold text-gray-700 dark:text-gray-300',
>>>>>>> light-mode-bug
                // interactions
                'transition-colors focus:outline-none',
                'focus-visible:ring-2 focus-visible:ring-blue-500/70',
                'hover:bg-gray-50 dark:hover:bg-neutral-800/70',
                // disabled state
                'disabled:opacity-60 disabled:cursor-not-allowed',
            ].join(' ')}
        >
            {value ?? '\u00A0'}
        </motion.button>
    );
}
