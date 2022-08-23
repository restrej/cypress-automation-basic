// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

require('cypress-xpath');

Cypress.Commands.add('login', () => {
  cy.log(`Iniciar sesión en ${Cypress.env('environment') ? Cypress.env('environment') : 'local'} environment`) 
    
    if (Cypress.env('environment') === 'pre') {
      Cypress.env('user', Cypress.env('prelogUser'))
    } else if (Cypress.env('environment') === 'prod') {
      Cypress.env('user', Cypress.env('prodUser'))
    } else if (Cypress.env ('environment') === 'dev') {
      Cypress.env('user', Cypress.env('devUser'))
    }

    cy.visit('/login')

    //cy.visit(Cypress.env('environment'))
    cy.log("Click en modulo del instalador")
    cy.xpath("//i[@class='icon icon-ic_modulo_instalacion']").should("be.visible").click()
    //cy.wait(1000)
    cy.log("Despliegue de dropdown de países")
    cy.xpath("//div[@class='mat-select-value'][contains(.,'España')]").should("be.visible").click()
    //cy.wait(1000)
    cy.log("Selección ESPAÑA")
    cy.xpath("(//span[contains(.,'España')])[3]").should("be.visible").click()
    //cy.wait(1000)

    cy.log("Despliegue de dropdown de provider")
    cy.xpath("(//div[contains(@class,'mat-select-value')])[2]").should("be.visible").click()
    cy.log("Click en connection provider")
    cy.xpath("//span[@class='m-login-input'][contains(.,'Cognito')]").should("be.visible").click()
    //cy.wait(1000)
    cy.log("Click en ENTRAR (al modulo del instalador)")
    cy.xpath("//span[contains(text(),'Entrar')]").should("be.visible").click()

    cy.log("Ingreso con usuario de Cognito")
    cy.xpath("(//input[contains(@id,'signInFormUsername')])[2]").should("be.visible").type(Cypress.env('user').username, { log: false })
    cy.log("Ingreso con contraseña de Cognito")
    cy.xpath("(//input[contains(@id,'signInFormPassword')])[2]").should("be.visible").type(Cypress.env('user').password, { log: false })
    //cy.wait(1000)
    
    cy.log("Click en signIn para Cognito (al modulo del instalador)")
    cy.xpath("(//input[contains(@name,'signInSubmitButton')])[2]").should("be.visible").click()

  })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })