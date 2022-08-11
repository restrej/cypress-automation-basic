//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

require('cypress-plugin-tab')

describe("Ejemplo funcion Tab ", () =>{

    it("Type con Tab ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //Instalar un plugin de cypress, para poder usar el tab. con el siguiente comando
        //npm install -D cypress-plugin-tab
        //Luego agregar este comando el parte superior del test require('cypress-plugin-tab')
        cy.get("#firstName").type("Juan Carlos").tab().type("Restrepo").tab().type("restrej@gmail.com")

    })


})//cierre de describe