const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: "cypress/reports",
    charts : true,
    reportPageTitle: "MostlyAI report",
    embeddedScreenshots: true,
    inlineAssets: true
  },

  video: false,
  e2e: {
      baseUrl: "https://demoqa.com/automation-practice-form",
      defaultCommandTimeout: 60000,
      requestTimeout: 60000,
      pageLoadTimeout: 60000,
      responseTimeout: 60000,
      numTestsKeptInMemory: 5,
      watchForFileChanges: false,
      chromeWebSecurity: false,
      viewportWidth: 1440,
      viewportHeight: 1000,
      video: false,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
  },
});
