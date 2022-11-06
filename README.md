[![ci][ci-image]][ci-url]

[ci-image]: https://github.com/zenosmosis/karma-jasmine-typescript-boilerplate/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/zenOSmosis/karma-jasmine-typescript-boilerplate/actions/workflows/ci.yml


# karma-jasmine-typescript-boilerplate

Executes the same unit tests against the same code on a browser as well as Node.js.

This repository serves as a proof-of-concept and nothing more.

Portions of this were borrowed from:

- https://github.com/piecioshka/boilerplate-jasmine-typescript (for Node.js configuration)
- https://github.com/monounity/karma-typescript/tree/master/packages/karma-typescript (for Karma / browser configuration)


## Configuration

To modify the configuration, modify the relevant file(s) for your environment(s):

- Node.js: jasmine.node.json
- Browser: karma.conf.js