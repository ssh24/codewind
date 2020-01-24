module.exports = function(config) {
  config.set({
    mutator: "typescript",
    packageManager: "npm",
    reporters: ["clear-text", "progress", "dashboard"],
    testRunner: "mocha",
    transpilers: ["typescript"],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts"],
    fileLogLevel: 'trace',
    mochaOptions: {
      opts: "test/mocha.opts",
      spec: ["test/unit-test/unit.test.ts"]
    }
  });
};
