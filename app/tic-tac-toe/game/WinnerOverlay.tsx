'use client';



// AI GENERATED CODE



import { AnimatePresence, motion } from 'framer-motion';
import type { Player } from '../lib/ticTacToe';
import { useEffect } from 'react';

export type WinnerOverlayProps = {
  open: boolean;
  winner: Player | null;
  draw: boolean;
  onRestart: () => void;
  onClose?: () => void;
};

export default function WinnerOverlay({ open, winner, draw, onRestart, onClose }: WinnerOverlayProps) {
  const title = winner ? `Winner: ${winner}` : draw ? "It's a draw!" : '';
  const tone: 'win' | 'draw' = winner ? 'win' : 'draw';

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose?.();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          aria-hidden={!open}
          className="fixed inset-0 z-50 grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -8, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="relative w-full max-w-sm rounded-2xl border border-gray-300/70 bg-white/90 dark:bg-neutral-900/80 shadow-xl backdrop-blur p-6 text-center"
          >
            <div
              className={[
                'mx-auto mb-3 inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium',
                tone === 'win'
                  ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                  : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30',
              ].join(' ')}
            >
              {tone === 'win' ? 'Game Over' : 'Draw'}
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-1 text-gray-600 dark:text-gray-300">{title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Great match! Want to play another round?</p>

            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={onRestart}
                autoFocus
                className="rounded-lg px-3 py-2 text-sm font-medium border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
              >
                Restart
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-3 py-2 text-sm font-medium border border-gray-300/90 hover:bg-gray-100 dark:hover:bg-neutral-800/60 transition-colors text-gray-600 dark:text-gray-300"
              >
                Keep viewing
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
