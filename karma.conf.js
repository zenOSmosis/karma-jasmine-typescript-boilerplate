// Note: Playwright is used here solely to obtain the webkit executable path
// @see https://github.com/zenOSmosis/karma-webkit-launcher#headless-webkit-with-playwright
const playwright = require("playwright");
process.env.WEBKIT_BIN = process.env.WEBKIT_HEADLESS_BIN =
  playwright.webkit.executablePath();

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "jasmine-sinon", "karma-typescript"],
    files: [{ pattern: "test/**/*.ts" }, { pattern: "src/**/*.ts" }],
    // @see https://npm.io/package/karma-typescript
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        sourceMap: true,
      },
      coverageOptions: {
        instrumentation: false,
        sourceMap: true,
      },
      bundlerOptions: {
        sourceMap: true,
      },
      exclude: ["dist"],
      include: ["test", "src"],
    },
    preprocessors: {
      "**/*.ts": ["karma-typescript", "coverage"],
    },
    reporters: ["coverage", "verbose", "karma-typescript"],

    browsers: ["ChromeHeadless", "FirefoxHeadless", "WebkitHeadless"],
    // browsers: ["Chrome", "Firefox", "Webkit"],
  });
};
