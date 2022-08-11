//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

describe("Primer Test con Cypress", () =>{

    it("Esto es un hola mundo desde Cypress", () =>{
        cy.log("Bienvenido a Cypress")
        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.get("#wsf-1-field-21").type("Juan Carlos")
        cy.wait(1000)
        cy.get("#wsf-1-field-22").type("Restrepo")
        cy.wait(1000)
        cy.get("#wsf-1-field-23").type("restrej@gmail.com")
        cy.wait(1000)
        cy.get("#wsf-1-field-24").type("575362388")
        cy.wait(1000)
        cy.get("#wsf-1-field-28").type("demo de la dirección")
        cy.get("#wsf-1-field-27").click()
        cy.wait(4000)

    })


})//cierre de describe