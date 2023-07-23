const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zs6tdh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
