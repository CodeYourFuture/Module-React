# Set up a React project from scratch

## Project Setup

We keep handing you projects which are already set up. This is great for getting started quickly, but it's important to know how to set up a project yourself and what is actually happening when you run `npm install` and `npm run dev`.

There are thousands of ways to configure projects; we will start with Vite. You're going to set up a React project using Vite. Then you're going to configure Vite to run unit tests, alias paths, ignore your node modules, and document your software.

## Vite

[Vite](https://vitejs.dev/guide/) is a modern build tool for React. It's fast, and it's easy to configure. Create and switch into a new branch `project/from-scratch`

In your terminal, run:

```zsh
npm create vite@latest
```

And choose

```zsh
# Project name:
react-vite-vitest
# Select a framework:
React
#Select a variant:
JavaScript + SWC
```

Look at it go! It's creating a React project for you. When it's done, `cd` into the project:

```zsh
cd react-vite-vitest
```

This will create a new folder called `react-swc` with a React project inside. `cd` into it and run `npm install` to install the dependencies. Then you can start the development server:

```zsh
npm run dev
```

But this configuration is not quite what we want. We want to be able to run unit tests, and we want to be able to import files from the root of the project without having to write `../../` all the time. So let's configure Vite to do those things as well.

## Vitest

[Vitest](https://vitest.dev/) is a test runner for Vite. In your terminal, run:

```zsh
npm install --save-dev vitest
```

### Testing Library

We need to write some tests of the DOM, which doesn't exist in Node or Vitest. The DOM is a browser API. We're going to use [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to help Vitest write our unit tests. In your terminal, run:

```zsh
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

Then add the following lines to `vite.config.js`:

```js
test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["@testing-library/jest-dom", "@testing-library/react"],
  },
```

## Package.json

We want to be able to run `npm run test` to run our unit tests. Add the following lines to `package.json`:

```json
  "scripts": {
    "test": "vitest"
  },
```

Now type `npm run test` in your terminal. To extend and improve these commands, read the `high-score-tables` package.json and steal the ideas.

## Alias Paths

We want to be able to import files from the root of the project without having to write `../../` all the time. We can do this by adding an alias to `vite.config.js`. First, at the top of the file import `path`:

```js
import path from "path";
```

Then add the following lines to `vite.config.js`:

```js
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
```

Read `high-score-tables` for a completed example of `vite.config.js`.

## .gitignore

You know how sometimes you get code review telling you to remove files like /node_modules or .vscode settings? Vite has created a `.gitignore` file for you. Have a look at it and see if you agree with what it's ignoring. You can add more files to ignore if you want.

## README.md

Now you need to update your README.md to explain how to run the project. Vite has created a starter file for you, and you will need to update it with your changes.

A README is how other developers know how to build your application, what it is for, and how to develop it. It's also displayed automatically on GitHub, so it's the first thing people, like hiring managers, see when they visit your project.

You can write this yourself, or you can use AI to help you. You will need to CHECK what the AI writes. For example, I pasted the `high-scores-table` package.json and asked AI to write its readme. Can you spot the mistakes?

# High Score Tables

## About

High Score Tables is a React application that displays high scores from various countries in a table format. It's built using React 18 and leverages Vite for an efficient and fast development experience.

## Installation

To get started with High Score Tables, clone the repository and install the dependencies:

```bash
git clone [your-repo-link]
cd high-score-tables
npm install
```

## Running the Application

You can run the application in development mode with:

```bash
npm run dev
```

This command runs the app in the development mode and opens it in your default browser. If it doesn't open automatically, you can visit [http://localhost:3000](http://localhost:3000) to view it.

## Building for Production

To build the app for production, run:

```bash
npm run build
```

This command builds the app for production to the `dist` folder. It optimizes the build for the best performance.

## Running Tests

You can run tests using:

```bash
npm test
```

For interactive test mode, use:

```bash
npm run test:ui
```

## Linting

To lint your code, run:

```bash
npm run lint
```

## Previewing the Build

After building the app, you can preview the production build with:

```bash
npm run preview
```

## Contributing

Contributions to High Score Tables are welcome. Please ensure you follow the linting guidelines and write tests for new features.

## License

High Score Tables is [MIT licensed](./LICENSE).
