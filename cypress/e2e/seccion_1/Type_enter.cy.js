//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

describe("Funciones para type ", () =>{

    it("type --> ENTER ", () =>{
        cy.visit("https://www.google.com/")
        cy.title().should('eq', "Google")
        cy.wait(1500)
        
        //funcion para escribir un texto y luego dar ENTER
        cy.get("[name='q']").type("cypress io {enter}")
        cy.wait(1000)
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3").click()

    })


})//cierre de describe