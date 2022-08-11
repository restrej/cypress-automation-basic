//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe("Test update security panel", () =>{

    it("Este test actualiza la sección de panel de seguridad", () =>{
        cy.visit("https://pre-smartis-manager.prosegur.cloud/#/dasboardIoT")
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

        cy.log("Ingreso del número activity")
        cy.get("#mat-input-0").type("PRE")
        //cy.wait(2000)
        cy.xpath("//span[@class='ng-star-inserted'][contains(.,'Comenzar')]").should("be.visible").click()

        cy.log("Ingreso del código de conexión")
        cy.get("#mat-input-1").type("AX12000000")
        cy.xpath("//span[contains(.,'Comenzar')]").should("be.visible").click()

        cy.log("Acutalización de configuración del panel")
        cy.xpath("//div[@class='db-option-name ng-star-inserted'][contains(.,'1. Panel de Seguridad')]").should("be.visible").click()
        cy.xpath("//span[@class='mat-content'][contains(.,'ConfiguraciÃ³n Hub')]").should("be.visible").click()
        cy.log("Modificar el código de conexión")
        //cy.wait(8000)
        cy.get("#undefined_connectionCode").clear()
        cy.get("#undefined_connectionCode").type("AX12000001")
        //cy.wait(8000)
        cy.get("#undefined_connectionCode").clear()
        //cy.wait(8000)
        cy.get("#undefined_connectionCode").type("AX12000000")
        //cy.wait(2000)
        cy.xpath("(//span[@class='mat-button-wrapper'][contains(.,'Guardar')])[1]").should("be.visible").click()

        cy.log("Validar que se guardo correctamente la configuración del panel")
        cy.xpath("//div[@class='m-mat-snackbar__message'][contains(.,'Se ha actualizado correctamente la configuración del panel')]").should("have.text","Se ha actualizado correctamente la configuración del panel")

        cy.log('Validación de estado en histórico de comandos')
        cy.xpath("//span[contains(text(),'Históricos')]").should("be.visible").click()
        cy.xpath("//span[contains(text(),'Histórico de Comandos')]").should("be.visible").click()

        cy.wait(1000)
        cy.xpath("(//mat-cell[@class='mat-cell cdk-column-status mat-column-status ng-star-inserted'][contains(.,'OK')])[1]").should("have.text","OK")
        

    })


})//cierre de describe