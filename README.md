[![ci][ci-image]][ci-url]

[ci-image]: https://github.com/zenosmosis/karma-jasmine-typescript-boilerplate/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/zenOSmosis/karma-jasmine-typescript-boilerplate/actions/workflows/ci.yml


# karma-jasmine-typescript-boilerplate (+ Istanbul & Sinon)

Test TypeScript code in real browsers and Node.js.

Designed for code that is intended to run across all environments: i.e. algorithms, custom WebSocket implementations, etc.

Includes built-in support for Node.js, WebKit (i.e. Safari), Chrome, and Firefox.

Don't just assume your code will run in all browsers as well as Node.js; prove it with test results.

Write once; test anywhere.

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


![Logo with Example](/assets/banner.jpg) 

## Why not Playwright, Jest, or...?

If developing code that can run in a browser as well as Node.js, it is important to be able to unit test in the same environments the code is designed to run in.

Playwright doesn't give you the ability to run unit tests directly in Node.js, and JavaScript can only be evaluated on the client like:

```js
const result = await page.evaluate(data => {
  window.myApp.use(data);
}, data);
```

Jest, on the other hand, can execute unit tests in Node.js and you can polyfill browser APIs but you don't get the guaranteed results of how that code will execute in various browsers.

### How this project is different

When run in a browser environment, the imported modules in the test code are transpiled to run directly in the browser, so you can test individual modules the same way as you test them in Node.js.

This code runs the same regardless of running in Node.js or the browser.

```js
it("determines if running in browser", () => {
  expect(isBrowser()).toBe(typeof window !== undefined);
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

By default, code coverage is enabled and HTML reports are available in {root}/coverage.

![Code Coverage Directory Structure](/assets/coverage-directory-structure.png) 

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

## Troubleshooting

If Playwright tests don't automatically clean up after themselves and you're on a Unix-type system (i.e. Mac or Linux) try running the following:

```sh
$ sudo killall Playwright
```

## License

[MIT](LICENSE) / Copyright (c) zenOSmosis and any respective third parties
