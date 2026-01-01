# React + TypeScript + Vite (Techon Dashboard)

A modern, responsive admin & document management dashboard built with React, TypeScript, and Vite.
Designed with glassmorphism UI, animated backgrounds, and reusable dashboard components.

## Features
Fully responsive (desktop, tablet, mobile)
Fast performance with Vite + HMR
Document expiry tracking (charts & tables)
Added Glassmorphism UI with animated backgorund blobs


## Tech Stack
React 18 , TypeScript, Vite, SCSS (Sass), Recharts, framer motion


## Project Structure
src/
├── components/
│   ├── MainLayout/
    └── MainLayout.scss
│   ├── Header/
│   ├── Sidebar/
│   └── Widget/
│
├── components/ui/
│   ├── StatsCard.tsx
│   ├── ExpiryChart.tsx
│   ├── DocumentsTable.tsx
│   └── AnimatedBlobs.tsx
│   └── Ui.scss
├── data/
│   └── chartData.ts
│
├── styles/
│   └── variables.scss
│   └── style.scss
│   └── index.scss
├── App.tsx
└── main.tsx



## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
