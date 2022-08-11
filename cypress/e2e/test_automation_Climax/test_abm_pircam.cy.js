//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe("Test ABM Pircam", () =>{

    it("Este test enrola una pircam, actualiza el nombre y la elimina, valida cada popup: Creación, actualización y eliminación", () =>{
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
        cy.get("#mat-input-1").type("CL35000106")
        cy.xpath("//span[contains(.,'Comenzar')]").should("be.visible").click()

        cy.log("Creación (Enrolamiento) de una pircam")
        cy.xpath("//span[contains(.,'3. Dispositivos de Detección')]").should("be.visible").click()
        cy.log("Click en agregar dispositivos")
        cy.xpath("//span[@class='mat-button-wrapper'][contains(.,'Agregar')]").should("be.visible").click()
        cy.log("Click en dropdown")
        cy.xpath("(//div[contains(@class,'mat-select-arrow')])[2]").should("be.visible").click()
        cy.log("Selección de dispositivo")
        cy.get('#mat-option-12 > .mat-option-text > span').click()
        cy.log("Ingreso de Serial")
        cy.xpath("//*[contains(@formcontrolname, 'serialNumber')]").should("be.visible").type("0080923E0001-6A8D")
        cy.xpath("//span[@class='mat-button-wrapper'][contains(.,'Agregar')]").should("be.visible").click()
        cy.log("Agregar nombre Pircam")
        cy.xpath("//input[contains(@ng-reflect-id,'1_name')]").type("ALARMA")
        cy.xpath("//span[contains(.,'Guardar')]").should("be.visible").click()
        
        cy.log("Validar que se guardo el dispostivo Pircam")
        cy.xpath("//div[@class='m-mat-snackbar__message'][contains(.,'Se actualizó correctamente la zona:ALARMA')]").should("have.text","Se actualizó correctamente la zona:ALARMA")

        cy.log("Actualización de una pircam")
        cy.xpath("//span[@class='mat-button-wrapper'][contains(.,'Editar')]").should("be.visible").click()
        cy.xpath("//span[contains(.,'Guardar')]").should("be.visible").click()

        cy.log("Validar que se guardo el dispostivo Pircam")
        cy.xpath("//div[@class='m-mat-snackbar__message'][contains(.,'Se actualizó correctamente la zona:ALARMA')]").should("have.text","Se actualizó correctamente la zona:ALARMA")
        cy.wait(1000)
        cy.log("Eliminaciòn de una pircam")
        cy.xpath("//span[contains(.,'Eliminar')]").should("be.visible").click()
        cy.xpath("//span[contains(.,'Continuar')]").should("be.visible").click()

        cy.log("Validar que se elimino el dispostivo Pircam")
        cy.xpath("//div[@class='m-mat-snackbar__message'][contains(.,'Se ha eliminado correctamente la zona:ALARMA')]").should("have.text","Se ha eliminado correctamente la zona:ALARMA")

        cy.log('Validación de estado en histórico de comandos')
        cy.xpath("//span[contains(text(),'Históricos')]").should("be.visible").click()
        cy.xpath("//span[contains(text(),'Histórico de Comandos')]").should("be.visible").click()

        cy.wait(1000)
        cy.log("status delete")
        cy.xpath("(//mat-cell[@class='mat-cell cdk-column-status mat-column-status ng-star-inserted'][contains(.,'OK')])[1]").should("have.text","OK")
        cy.log("status update")
        cy.xpath("(//mat-cell[@class='mat-cell cdk-column-status mat-column-status ng-star-inserted'][contains(.,'OK')])[2]").should("have.text","OK")
        cy.log("status create")
        cy.xpath("(//mat-cell[@class='mat-cell cdk-column-status mat-column-status ng-star-inserted'][contains(.,'OK')])[3]").should("have.text","OK")

    })


})//cierre de describe