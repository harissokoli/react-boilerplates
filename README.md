# React Boilerplates

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![React 18](https://img.shields.io/badge/React-18-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6)
![Vite](https://img.shields.io/badge/Vite-4-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4)

Starter templates for React + TypeScript apps. Every template shares the same base and
differs only in how it manages state. Each template lives on its own branch.

## Templates

| Branch | State management |
| --- | --- |
| [`redux`](../../tree/redux) | Redux Toolkit |
| [`zustand`](../../tree/zustand) | Zustand |
| [`context`](../../tree/context) | React Context API |
| [`query`](../../tree/query) | React Context + TanStack React Query |

## What every template includes

- **Vite 4** with **React 18** and **TypeScript**
- **Tailwind CSS** with PostCSS
- **React Router 6** with auth and guest route guards
- An API client layer (`src/api`) with error handling
- **i18n** setup with English and Albanian resources
- Reusable form fields and hooks (`useForm`, `useDebounce`, `useIsLoggedIn`)
- **ESLint**, **Prettier** and **Husky** pre-commit hooks

## Getting started

Clone the branch you want into a new folder:

```bash
git clone -b zustand https://github.com/harissokoli/react-boilerplates.git my-app
cd my-app
rm -rf .git && git init
npm install
npm run dev
```

Or use [create-template](https://github.com/harissokoli/create-template), an interactive CLI
that does the same for you.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |

## License

Released under the [MIT License](LICENSE).
