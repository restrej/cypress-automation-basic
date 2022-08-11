//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe("Introduccion a los assert ", () =>{

    it("Demo de los Asserts ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //la función should("be.visible") es para validar si el campo es visible
        cy.get("#firstName").should("be.visible").type("Juan")
        cy.wait(1000)
        cy.get("#lastName").should("be.visible").type("Restrepo")
        cy.wait(1000)
        //La funcion should("be.enabled") es para validar que el campo este habilitado
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("restrej@gmail.com")

    })


})//cierre de describe