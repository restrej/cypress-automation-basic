//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

require('cypress-xpath');

describe("Nueva seccion Selects ", () =>{

    it("Select uno", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)
        
        //Con el metodo .select, se selecciona del combo box el valor que requiero, para este caso es
        // Friday y Saturday
        //Luego se valida con un assert que se aplica con el metodo should("have.value") 
        //para validar el valor value de ese elemento
        cy.get("#select-demo").should("be.visible").select("Friday").should("have.value","Friday")
        cy.wait(4000)
        cy.get("#select-demo").should("be.visible").select("Saturday").should("have.value","Saturday")

    })

    it("Select dos", () =>{
        cy.visit("https://www.google.com/")
        cy.title().should("eq", "Google")
        cy.wait(1000)

        cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
        cy.get(".MUFPAc > :nth-child(2) > a").click()

    })

    it.only("Opción Multi-select", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)

        cy.get("#multi-select").should("be.visible").select(["California","Ohio","Washington"]).then(()=>{
            cy.get("#printMe").should("be.visible").click()

        })

    })


})//cierre de describe