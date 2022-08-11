//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe("Primer Reto ", () =>{

    it("Buscar un nombre ", () =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#searchBox").should("be.visible").clear().type("Cierra")
        cy.wait(1000)
        //Metodo para limpiar campos
        cy.get("#searchBox").should("be.visible").clear()
    })


})//cierre de describe