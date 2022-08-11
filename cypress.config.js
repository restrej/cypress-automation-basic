const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Se agrega este comando chromeWebSecurity, Para evitar los errores de origen cruzado
  chromeWebSecurity: false,
  e2e: {
    //async setupNodeEvents(on, config) {
      //const bundler = createBundler({
        //Plugins: [createEsbuildPlugin(config)],
      //}),

      //on("file:preprocessor", bundler);
      //await addCucumberPreprocessorPlugin(on,config);

      //return config;
    //},
  }
     
});
