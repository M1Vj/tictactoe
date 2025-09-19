'use client';

import { motion } from 'framer-motion';
import type {Board} from "../lib/ticTacToe";

type MoveListProps = {
    history: ReadonlyArray<Board>;
    currentMove: number;
    onJumpTo: (moveIndex: number) => void;
}

const listVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            when: 'beforeChildren'
        },
    },
};

const itemVariants = {
    hidden: {opacity: 0, y: 4},
    visible: {opacity: 1, y: 0},
}

export default function MoveList({history, currentMove, onJumpTo}: MoveListProps) {
    return (
        <motion.ol
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="space-y-2" >
            {history.map((_, index) => {
            const isCurrent = index === currentMove;
            const label = index === 0 ? 'Go to game start' : `Go to move #${index}`;
            return (
                <motion.li key={index}
                           variants={itemVariants}>
                    <button
                        type="button"
                        onClick={()=>onJumpTo(index)}
                        aria-current={isCurrent ? 'step': undefined}
                        className={
                            (isCurrent
                                ? 'font-semibold bg-blue-50 dark:bg-blue-950/30'
                                : 'hover:bg-gray-100 dark:hover:bg-neutral-800/60'
                            ) +
                            ' rounded px-3 py-1 border border-gray-300/70 transition-colors'
                        }>
                        {isCurrent ? <span>Current - {label}</span> : label}
                    </button>
                </motion.li>
            )
            })}
        </motion.ol>
    );
}