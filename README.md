# React Without Surprises: Building Predictable Applications

A hands-on React workshop project about building predictable applications. It pairs runnable examples (including intentionally problematic versions and their refactors) with presentation material and a written example bank.

## Requirements

- Node.js 20.19+ or 22.12+ (required by Vite 8)
- npm (the repository includes `package-lock.json`)

## Install and Run

From the repository root, install the locked dependencies and start the Vite development server:

```sh
npm i
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). The app opens on the user-search solution. Use the sidebar to switch between the interactive examples.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run api` | Start the mocked data API. |
| `npm run build` | Type-check the project and create a production build in `dist/`. |
| `npm run check` | Run TypeScript, Oxlint, and formatting checks. |
| `npm run check:ts` | Run the TypeScript check. |
| `npm run check:lint` | Run Oxlint. |
| `npm run check:format` | Check formatting with Oxfmt. |
| `npm run fix` | Apply lint and formatting fixes. |
| `npm run fix:lint` | Apply Oxlint fixes. |
| `npm run fix:format` | Format files with Oxfmt. |

Run `npm run check` before committing changes. Fix commands may modify files, so review the resulting diff.

## Stack and Dependencies

- **React 19** and **React DOM** provide the component UI and browser rendering.
- **TypeScript 7** supplies static type checking.
- **Vite 8** provides the development server and production build, with the React plugin.
- **React Compiler** is enabled through the Babel/Rolldown plugin configuration in `vite.config.ts`.
- **TanStack Query 5** is used for server-state/data-fetching examples.
- **Zustand 5** is used in one of the app-layout state-management solutions.
- **Oxlint** and **Oxfmt** provide linting and formatting.

The application dependencies are in `dependencies`; build and development tools are in `devDependencies` in `package.json`.

<!-- ## Repository Guide

- `src/01-state-management-surprises/` contains the todo, profile-form, cart exercise, and app-layout examples. `bad-version`/`bad-example` folders show the problematic approach; `solution` folders show refactors.
- `src/02-effects-surprises/` contains message-board and data-fetching examples, with bad and solution versions.
- `src/App.tsx` selects and displays examples inside the shared application layout. The interactive app currently includes state-management and effects examples; additional subjects are represented in the workshop material.
- `src/03-component-surprises/notes.md` and `src/04-data-flow-architecture-surprises/notes.md` contain notes for topics under development.
- `react-without-surprises-examples.md` is a written example bank with explanations and code snippets.
- `presentation/presentation.md` and `presentation/react-without-surprises-slides.md` are Marp presentation sources. Marp CLI is not included in the npm scripts or project dependencies; install/use it separately if you want to render slides. -->
