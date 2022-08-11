//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
describe("Ejemplo de Type pageUp, pageDown ", () =>{

    it("Type pageUp ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type('{pageup}')
        cy.wait(2000)
    })

    //La funcion only, se utiliza para decirle a cypress que solo me ejecute este test
    it.only("Type pageDown ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
    })


})//cierre de describe