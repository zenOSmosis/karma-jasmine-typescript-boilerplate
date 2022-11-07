[![ci][ci-image]][ci-url]

[ci-image]: https://github.com/zenosmosis/karma-jasmine-typescript-boilerplate/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/zenOSmosis/karma-jasmine-typescript-boilerplate/actions/workflows/ci.yml


# karma-jasmine-typescript-boilerplate (+ Istanbul & Sinon)

Executes the same unit tests against the same code on a browser as well as Node.js.

Includes built-in support for running in real browsers such as WebKit, Chrome, and Firefox.

This repository serves as a proof-of-concept and nothing more.

![Logo with Example](/assets/banner.jpg) 

## Why not Playwright, Jest, or...?

*Ubiquity: Test code in multiple environments without duplicating test cases or using multiple runners.*

The goals of this project are to execute the testing code directly in the individual environments w/o using a web driver.  This way, the same tests can execute across all major browsers as well as Node.js.

This use case might not be suitable for all projects but makes it better suited for code that is intended to run across all environments: i.e. algorithms, custom WebSocket implementations, etc.

So tests like the following can run regardless of which environment they are in, w/o needing to be eval-ed through a web driver message request.

```js
import {fibonacci, isBrowser} from "../src/index";

describe("basic tests", () => {
  it("determines if running in browser", () => {
    expect(isBrowser()).toBe(typeof window !== undefined);
  });

  it("generates fibonacci", () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
```

Take a look at the [included tests](test) for more examples as well as the [example CI pipeline](.github/workflows/ci.yml).

More information is below regarding [additional considerations for Jest](#misc).

## Running Tests

Note, the default configuration runs the same tests across the environments you choose.

**Browser and Node tests:**

```sh
$ npm run test
```

**Browser-only tests:**

```sh
$ npm run test:browser
```

**Node-only tests:**

```sh
$ npm run test:node
```

## Test Coverage Reporting

Code coverage is provided by [Istanbul](https://github.com/istanbuljs).

Default settings are as follows:

  - Browser code coverage is generated automatically and placed in {root}/coverage as HTML files
  - Node.js test coverage reports are placed in .nyc_output as JSON files

## Configuration

To update the configuration, modify the relevant file(s) for your environment(s):

- Node.js: [jasmine.node.json](jasmine.node.json)
- Browser: [karma.conf.js](karma.conf.js)

## Some Credits

Portions of this were borrowed from:

- https://github.com/piecioshka/boilerplate-jasmine-typescript (for Node.js configuration)
- https://github.com/monounity/karma-typescript/tree/master/packages/karma-typescript (for Karma / browser configuration)
- https://github.com/google/karma-webkit-launcher (for helping fix flaky Safari tests)
- https://www.freecodecamp.org/news/jasmine-unit-testing-tutorial-4e757c2cbf42/ (for helping w/ Jasmine tests)

## Misc / Roadmap

As much as I'd like to try to get Jest to work instead (for running tests in a browser as well), here's a thread that indicates it may be a bit difficult to accomplish: https://github.com/facebook/jest/issues/139

This post shows some polyfills to sort of fake it: https://github.com/tom-sherman/blog/blob/main/posts/02-running-jest-tests-in-a-browser.md

Playwright was also added as a dependency to help locate the WebKit bin path on the host system (see: [Headless Webkit with Playwright](https://github.com/google/karma-webkit-launcher#usage)).

In the future I'd like to add configuration options for [BrowserStack](https://www.browserstack.com/) and potentially [Sauce Labs](https://saucelabs.com/).

## License

[MIT](LICENSE) / Copyright (c) 2022 zenOSmosis and any respective third parties
