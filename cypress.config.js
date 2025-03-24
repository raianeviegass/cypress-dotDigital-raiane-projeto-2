const { defineConfig } = require('cypress');  // Importar defineConfig corretamente

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.mercadolivre.com.br/',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    retries: 1,
    screenshotsFolder: './reports/screenshots',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './reports',
    reportFilename: 'relatorio-final-testes',
    overwrite: true,
    html: true,
    json: true,
  }
});