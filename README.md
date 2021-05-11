# webpack5-issue-repro

Minimal repro for `Uncaught TypeError: __webpack_require__.r is not a function` error with Webpack 5. This error happens when you have multiple runtime chunks loaded on the same page. This error did not happen in Webpack 4.

**Repro steps:**

1. `$ npm i --global pnpm`
2. `$ pnpm i`
3. `$ cd packages/app/`
4. `$ npm start`
5. Go to `http://localhost:8080/` and open DevTools to see the logged error.
