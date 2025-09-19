'use client';

import { motion } from 'framer-motion';
import type { Cell } from '../lib/ticTacToe';

// Square renders a single cell in the board. It shows the current mark ('X' | 'O')
// and handles hover/tap animation. It supports a disabled state.

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
                'text-3xl md:text-5xl font-bold',
                // interactions
                'transition-colors focus:outline-none',
                'focus-visible:ring-2 focus-visible:ring-blue-500/70',
                'hover:bg-gray-50 dark:hover:bg-neutral-800/70',
                // disabled state
                'disabled:opacity-60 disabled:cursor-not-allowed',
            ].join(' ')}
        >
            {value ?? ''}
        </motion.button>
    );
}
