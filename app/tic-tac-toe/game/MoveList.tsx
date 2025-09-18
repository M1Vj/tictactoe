'use client';

import type {Board} from "../lib/ticTacToe";

type MoveListProps = {
    history: ReadonlyArray<Board>;
    currentMove: number;
    onJumpTo: (moveIndex: number) => void;
}

export default function MoveList({history, currentMove, onJumpTo}: MoveListProps) {
    return (
        <ol className="space-y-2">
            {history.map((_, index) => {
                const isCurrent = index === currentMove;
                const label = index === 0 ? 'Go to game start' : `Go to move #${index}`;
                return (
                    <li key={index}>
                        <button
                            type="button"
                            onClick={() => onJumpTo(index)}
                            aria-current={isCurrent ? 'step' : undefined}

                            className={
                                isCurrent ? 'rounded px-3 py-1 border font-semibold'
                                          : 'rounded px-3 py-1 border hover:bg-gray-100'
                            }
                        >
                            {isCurrent ? <span>Current : {label}</span>: label}

                        </button>
                    </li>
                )
            })}
        </ol>

    );
}