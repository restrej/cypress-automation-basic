//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

describe("Opciones de Click ", () =>{

    it("Click Sencillo ", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.get("#wsf-1-field-21").type("Juan Carlos")
        cy.wait(1000)
        cy.get("#wsf-1-field-22").type("Restrepo")
        cy.wait(1000)
        cy.get("#wsf-1-field-27").should("be.visible").click()

    })

    //Funcion que sirve para hacer un click forzado
    it.only("Click Force true ", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.get("#wsf-1-field-21").type("Juan Carlos")
        cy.wait(1000)
        cy.get("#wsf-1-field-22").type("Restrepo")
        cy.wait(1000)
        cy.get("#wsf-1-field-27").should("be.visible").click({force: true})

    })


})//cierre de describe