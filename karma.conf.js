module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [{ pattern: "test/**/*.ts" }, { pattern: "src/**/*.ts" }],
    // @see https://npm.io/package/karma-typescript
    karmaTypescriptConfig: {
      // tsconfig: "./tsconfig.json",
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
      exclude: ["example", "dist"],
      include: ["test", "src"],
    },
    preprocessors: {
      "**/*.ts": ["karma-typescript", "coverage"],
    },
    reporters: ["coverage", "verbose", "karma-typescript"],

    browsers: ["ChromeHeadless"],
  });
};
