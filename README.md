# Angular e2e-testing using Playwright and @ng-apimock

You often need to provide data to support application development.
This project uses [ng-apimock](https://ngapimock.org/) to provide mock data.
It allows the developing and testing without the real APIs running.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13 and [Node.js](https://nodejs.org/en/about/releases) version 14.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.

The next scripts should be executed in a console inside the root directory:

- `start` - Runs the application.
- `models` - Generates the entities sources.
- `check` - Runs all checks.
- `lint` - Runs several static code analysis.
- `lint:fix` - Applies lint rules to source code.
- `test` - Runs the unit tests.
- `test:watch` - Runs the unit tests in watch mode.
- `e2e` - Runs the e2e tests.
- `e2e:watch` - Runs the e2e tests in watch mode.
- `build` - Builds the dist files.

For more details, read the [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) documentation.

## Development server

Use `npm run serve` for a dev server. Navigate to <http://localhost:4200/>.
The app will automatically reload if you change any of the source files.

If you create REST APIs and need to build a front-end application that consumes the APIs, the [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification) can be used to generate the models and web client in an Angular application using [ng-openapi-gen](https://www.npmjs.com/package/ng-openapi-gen) Node.js module.
Use `npm rum models` to generate the example used in this project.

This project uses [ng-apimock](https://ngapimock.org/) to provide mock data.
You can access the development interface for `ng-apimock` navigating to `http://localhost:3000/endpoints`.
The `ng-apimock` server is automatically started with `start` command but you can run separately by running `npm run server`.
You can change `ng-apimock` configuration opening [server.js](e2e/server/server.js) file.

## Linting and formatting code

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.

Use `npm run lint` to analyze your code.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save.

## Running unit tests

Unit tests are responsible for testing of individual methods or classes by supplying input and making sure the output is as expected.

Use `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
Use `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

You can see the HTML coverage report opening the [index.html](build/coverage/lcov-report/index.html) file in your web browser.
Code coverage measures and reports the number of executed code lines covered by automated tests.

## Running end-to-end tests

The end-to-end tests are responsible for testing scenarios on the product itself, by controlling the browser or the website, regardless of the internal structure to ensure expected behavior.

Use `npm run e2e` to execute the end-to-end tests via [Playwright](https://playwright.dev/).
Use `npm run e2e:watch` to keep executing your tests while watching for file changes in the background.

You can see the HTML report opening the [index.html](build/e2e/index.html) file in your web browser.
When tests fail, a screenshot is attached.

## Debugging

You can debug the client-side Angular code, adding breakpoints, inspect variables and see the call stack of the client-side Angular application.
These functionalities are provided natively or based on plugins.
[Angular DevTools](https://angular.io/guide/devtools/) is a Chrome extension that provides debugging and profiling capabilities for Angular applications.

You can use our IDE for debugging unit and end-to-end tests.
Also, you can debug tests with `debugger` keyword if you run `npm run test:debug` or `npm run playwright:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.
The same is valid when you run `npm run test:debug` script.
These functionalities are provided natively or based on plugins.

## Build

Use `npm run build` to build the project. The build artifacts will be stored in the `dist/app/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
