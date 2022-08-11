//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe("Test delete and register panel", () =>{

    it("Este test elimina el panel, lo da de alta, valida pop up y que se haya ingresado al dashboard", () =>{
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
        cy.xpath("//input[contains(@formcontrolname,'activity')]").type("PRE")
        //cy.wait(2000)
        cy.xpath("//span[@class='ng-star-inserted'][contains(.,'Comenzar')]").should("be.visible").click()

        cy.log("Ingreso del código de conexión")
        cy.xpath("//input[contains(@formcontrolname,'connectionId')]").type("AX35000100")
        cy.xpath("//span[contains(.,'Comenzar')]").should("be.visible").click()

        cy.log("Eliminación del panel")
        cy.xpath("//span[contains(.,'Comandos Rápidos Generales')]").click()
        cy.xpath("//span[contains(.,'Eliminar panel')]").should("be.visible").click()
        cy.xpath("//span[@class='mat-button-wrapper'][contains(.,'Eliminar panel')]").should("be.visible").click()
        cy.xpath("//span[contains(.,'Continuar')]").should("be.visible").click()

        cy.log("Validar que se Elimino el Panel")
        cy.xpath("//div[@class='m-mat-snackbar__message'][contains(.,'Panel dado de baja')]").should("have.text","Panel dado de baja")

        cy.log("Reingreso de activity toa y código de conexión")
        cy.xpath("//input[contains(@formcontrolname,'activity')]").type("PRE")
        cy.xpath("//span[@class='ng-star-inserted'][contains(.,'Comenzar')]").should("be.visible").click()
        cy.xpath("//input[contains(@formcontrolname,'connectionId')]").type("AX35000100")
        cy.xpath("//span[contains(.,'Comenzar')]").should("be.visible").click()

        cy.log("Registro del panel")
        cy.xpath("//div[@class='mat-select-value'][contains(.,'Climax')]").should("be.visible").click()
        cy.xpath("//span[@class='mat-option-text'][contains(.,'Ajax')]").click()
        cy.xpath("//*[contains(@formcontrolname, 'serialNumber')]").should("be.visible").type("00121FC0")
        cy.xpath("//span[contains(.,'Validar Datos')]").should("be.visible").click()
        cy.xpath("//span[contains(.,'Continuar')]").click()
        cy.wait(60000)
        

        cy.log("Validar que ingreso al dashboard de instalación")
        cy.xpath("//span[contains(.,'1. Panel de Seguridad')]").should("be.visible")


    })


})//cierre de describe