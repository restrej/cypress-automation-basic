//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

const cypress = require('cypress');

require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe("Login spain instalador", () =>{

    it("Login spain", () =>{
        cy.log(`Running against ${Cypress.env('environment')} environment`)
        cy.visit('/')
        cy.log("Click en modulo del instalador")
        cy.xpath("//i[@class='icon icon-ic_modulo_instalacion']").should("be.visible").click()
        //cy.wait(1000)
        cy.log("Despliegue de dropdown de países")
        cy.xpath("//div[@class='mat-select-value'][contains(.,'España')]").should("be.visible").click()
        //cy.wait(1000)
        cy.log("Selección ESPAÑA")
        cy.xpath("(//span[contains(.,'España')])[3]").should("be.visible").click()
        //cy.wait(1000)

        cy.log("Despliegue de dropdown de provider")
        cy.xpath("(//div[contains(@class,'mat-select-value')])[2]").should("be.visible").click()
        cy.log("Click en connection provider")
        cy.xpath("//span[@class='m-login-input'][contains(.,'Cognito')]").should("be.visible").click()
        //cy.wait(1000)
        cy.log("Click en ENTRAR (al modulo del instalador)")
        cy.xpath("//span[contains(text(),'Entrar')]").should("be.visible").click()

        cy.log("Ingreso con usuario de Cognito")
        cy.xpath("(//input[contains(@id,'signInFormUsername')])[2]").should("be.visible").type("smartis_automation")
        cy.log("Ingreso con contraseña de Cognito")
        cy.xpath("(//input[contains(@id,'signInFormPassword')])[2]").should("be.visible").type("Prosegur2022$")
        //cy.wait(1000)
        
        cy.log("Click en signIn para Cognito (al modulo del instalador)")
        cy.xpath("(//input[contains(@name,'signInSubmitButton')])[2]").should("be.visible").click()


    })


})//cierre de describe