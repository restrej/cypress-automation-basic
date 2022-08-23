//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

//const cypress = require('cypress');

require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

 describe("Login spain instalador", () =>{

    it("Login spain", () =>{
        cy.log(`Running against ${Cypress.env('environment')} environment`)
        cy.visit('/');
        cy.login();

    })

})//cierre de describe