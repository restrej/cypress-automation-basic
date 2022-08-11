//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />


describe("Referencias a Windows", () =>{

    it("Windows propiedad charset", () =>{
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq', 'The Number Game')
        cy.wait(1500)
        //document() --> función para validar que permite ñ, caracteres especiales
        //desde el ducuemto se valida el funcionamiento de un dato especifico
        cy.document().should("have.property", "charset").and('eq','UTF-8')

    })


})//cierre de describe