const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: 'cypress/Integration/examples/*.js',
    viewportHeight: 900,
    viewportWidth: 1500,
  },
});
