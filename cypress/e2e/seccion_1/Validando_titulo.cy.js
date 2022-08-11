//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

describe("Seccion 1 Validando el título ", () =>{

    it("Test Validar el título ", () =>{
        cy.visit("https://demoqa.com/text-box")
        //should('eq') es una funcion para validar texto(es como un assert)
        cy.title().should('eq', "ToolsQA")

        cy.log("Ok la función title funcionó bien")

    })


})//cierre de describe