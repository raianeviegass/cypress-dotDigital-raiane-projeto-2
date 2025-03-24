const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.mercadolivre.com.br/',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    retries: 2,
  },
  reporter: 'mochawesome',
  reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: "relatorio-final-testes",
      overwrite: false,
      html: true,
      json: false,
  }

});