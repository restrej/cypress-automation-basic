//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

require('cypress-xpath');

describe("Nueva seccion Checkbox ", () =>{

    it("check uno", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        //Para los Checkbox se utiliza el metodo .check(), o tambien .click()
        //Se puede agregar un assert de tipo .should("be.checked") para validar que fueron clickeados o checkeados
        cy.get("[type='checkbox']").check().should("be.checked")
        cy.wait(2000)
        //El metodo uncheck() es para decirle que no los checkee y luego con should("not.be.checked") 
        //para que verifique y nos mande la notificación
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    })

    it("check por seleccion", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        cy.get("#isAgeSelected").check().should("be.checked")
        cy.xpath("(//input[contains(@type,'checkbox')])[5]").check()

    })

    it("check por seleccion con click", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)
        
        cy.get("#isAgeSelected").click()
        cy.xpath("(//input[contains(@type,'checkbox')])[5]").click()

    })

    it.only("Radios Button", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html")
        cy.title().should("eq", "Selenium Easy Demo - Radio buttons demo for Automation")
        cy.wait(1000)

        cy.get('.panel-body > :nth-child(3) > input').check()

    })


})//cierre de describe