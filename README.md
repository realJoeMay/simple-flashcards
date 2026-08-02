# Simple Flashcards

A small React + TypeScript math flashcard app built with Vite and Tailwind CSS.

The app currently walks through a fixed set of multiplication problems, tracks incorrect attempts, and shows a summary when practice is complete.

## Features

- Landing page with a start action
- Multiplication practice flow
- Immediate feedback for incorrect answers
- Mistake tracking per problem
- Results page with total problems, problems with mistakes, and total mistakes

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- Prettier
- Vitest

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - type-check and build the production bundle
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint
- `npm run format` - format files with Prettier
- `npm run format:check` - check formatting without writing changes
- `npm run test` - run Vitest in watch mode
- `npm run test:run` - run Vitest once

## Project Structure

```text
src/
  App.tsx                 App-level page state
  main.tsx                React entry point
  index.css               Global styles
  pages/
    LandingPage.tsx       Start screen
    PracticePage.tsx      Flashcard practice flow
    ResultsPage.tsx       Practice summary
docs/
  architecture.md
  requirements.md
  roadmap.md
```

## Current Limitations

- The problem set is hard-coded in `src/pages/PracticePage.tsx`.
- Practice covers multiplication only.
- Progress is not persisted across page reloads.
- The docs files are placeholders.
