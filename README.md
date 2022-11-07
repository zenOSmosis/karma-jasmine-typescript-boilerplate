[![ci][ci-image]][ci-url]

[ci-image]: https://github.com/zenosmosis/karma-jasmine-typescript-boilerplate/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/zenOSmosis/karma-jasmine-typescript-boilerplate/actions/workflows/ci.yml


# karma-jasmine-typescript-boilerplate

Executes the same unit tests against the same code on a browser as well as Node.js.

Includes built-in support for WebKit, Chrome, and Firefox.

This repository serves as a proof-of-concept and nothing more.

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

## Misc

As much as I'd like to try to get Jest to work instead (for running tests in a browser as well), here's a thread that indicates it may be a bit difficult to accomplish: https://github.com/facebook/jest/issues/139

This post shows some polyfills to sort of fake it: https://github.com/tom-sherman/blog/blob/main/posts/02-running-jest-tests-in-a-browser.md

## License

[MIT](LICENSE) / Copyright (c) 2022 zenOSmosis and any respective third parties
