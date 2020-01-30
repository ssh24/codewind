module.exports = function(config) {
  config.set({
    mutator: "typescript",
    packageManager: "npm",
    reporters: ["clear-text", "dashboard"],
    dashboard: { project: 'github.com/ssh24/codewind', version: 'stryker-mutation', module: 'my-module', baseUrl: 'https://dashboard.stryker-mutator.io/api/reports', reportType: 'full' },
    testRunner: "mocha",
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    tsconfigFile: "tsconfig.json",
    transpilers: ["typescript"],
    files: ["src/**/*.ts"],
    mutate: ["src/controllers/projectEventsController.ts"],
    fileLogLevel: 'trace',
    mochaOptions: {
      opts: "test/mocha.opts",
      spec: ["test/unit-test/unit.test.ts"]
    }
  });
};
