# Tic‑Tac‑Toe (Next.js)

A simple, polished Tic‑Tac‑Toe game built with Next.js (App Router), React, and Tailwind CSS. The home page redirects to the game at `/tic-tac-toe`.

## Preview
- Local dev: http://localhost:3000
- Game route: http://localhost:3000/tic-tac-toe

## Features
- Classic Tic‑Tac‑Toe gameplay (X starts)
- Winner and draw detection
- Move history with time travel
- Restart button and winner overlay
- Responsive UI with subtle visuals

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Getting Started
Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. The root route (`/`) will redirect to `/tic-tac-toe`.

### Available Scripts
- `npm run dev` — start the development server (Turbopack)
- `npm run build` — build the app (Turbopack)
- `npm run start` — start the production server
- `npm run lint` — run ESLint

## Project Structure (high level)
```
app/
├─ page.tsx                  # Redirects to /tic-tac-toe
└─ tic-tac-toe/
   ├─ page.tsx               # Game page shell and layout
   ├─ game/
   │  ├─ Game.tsx            # Main game logic & state
   │  ├─ Board.tsx           # 3x3 board component
   │  ├─ Square.tsx          # Single cell
   │  ├─ Status.tsx          # Turn/winner/draw status
   │  ├─ MoveList.tsx        # Move history & time travel
   │  └─ WinnerOverlay.tsx   # Overlay shown on game over
   └─ lib/
      └─ ticTacToe.ts        # Winner/draw helpers & types
```

## Notes
- The project was initialized with `create-next-app` and adapted to host the game.
- Feel free to customize styles or extend gameplay rules as you like.
