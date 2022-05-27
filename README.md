# README

The project is built on WebDriverIO, a Javascript based test automation framework built over nodeJs with Axios to support API automation too.

It uses modern languages, tools, and libraries that are well-known in the testing world:

- [JavaScript](https://www.javascript.com/): The world's most popular programming language of the Web.
- [WDIO](https://webdriver.io/): a popular JavaScript test automation framework that runs on Node. js
- [Mocha](https://mochajs.org/): a feature-rich JavaScript test framework running on Node. js and in the browser, making asynchronous testing simple and fun.
- [Axios](https://axios-http.com/): a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.


## Development environment

[Visual Studio Code](https://code.visualstudio.com/) is the recommended code editor, because:

- It's free;
- Available in Windows, Linux and macOS;
- Great extensions for WDIO, and Docker;
- This project already includes all the configurations for a productive environment.

IntelliJ WebStorm, or IDEA Ultimate, are also good choices, but are paid, so it's a matter of choice!

### Visual Studio Code

Start by downloading and installing Visual Studio Code in your machine.

Then install the following extensions:

- [Node.js](https://nodejs.org/en/download/)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Java8](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html)

## Running the tests

Start by running `npm install`, using the provided `nvmw` command:

     ***`npm install`***

Then you can open the WDIO Test Runner to execute the tests, and see them running:

     npm run wdio


This repository also contains a `Dockerfile`, so tests will run in [Docker]

## Writing new tests

Test cases must go into the `test/specs` folder, with the `.js` extension. The plugins in VS Code should provide syntax highlighting and step completion, making the writing of test easier.

Page object that are meant to be used by any test, must go into the `WDIO/test/pageobjects/` folder, with the `.js` (JavaScript) extension.

## Test data
Test data must go into the `test/testdata` folder, with the `.js` extension. This can also be provided as json files.

## Running tests
You can open the WDIO Test Runner (***`npm test`***) to execute all test.
Execute ***`npm run report`*** to generate allure report
