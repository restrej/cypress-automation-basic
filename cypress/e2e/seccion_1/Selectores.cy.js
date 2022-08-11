//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe("Tipos de Selectores ", () =>{

    it("Selector por id ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //Los selectores por id, siempre deben empezar por #
        cy.get("#userName").should("be.visible").type("Juan Carlos")
        cy.get("#userEmail").should("be.visible").type("restrej@gmail.com")

    })

    it("Selector por Atributo ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //Los selectores por atributo, siempre se deben poner en corchetes y comillas simples
        cy.get("[placeholder='Full Name']").should("be.visible").type("Juan Carlos Restrepo")

    })

    it("Selector por Xpath ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        
        //Para utilizar el selector por Xpath, se debe instalar un plugin npm install -D cypress-xpath
        //Luego se agrega el siguiente comando al inicio del test require('cypress-xpath');
        //Y se usa la función cy.xpath
        cy.xpath("//*[@id='userName']").should("be.visible").type("Juan Carlos Restrepo")
        cy.wait(1000)
        //otra alternativa es usar una herramienta, que es una extension de chrome que se llama TruePath para loca xpath
        cy.xpath("//input[contains(@placeholder,'name@example.com')]").should("be.visible").type("restrej@gmail.com")
        //otra extension de chrome es Relative XPath Helper y CSS and XPath checker para buscar cuantas veces esta el elemento
        cy.wait(1000)
        cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").type("Demo de la dirección")

    })

    it("Selector por Xpath funcion (And, Or) ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //Identificar Xpath por (And, Or)
        cy.xpath("//input[@id='userName' or @type='text']").should("be.visible").type("Juan Carlos Restrepo")
        cy.wait(1000)
        cy.xpath("//input[@id='userName' and @type='text']").should("be.visible").type("Juan Carlos")

    })

    it("Selector Xpath por Texto ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //Identificar Xpath por Texto
        cy.xpath("//div[text()='Text Box']").should("be.visible")

    })

    it.only("Selector Xpath por Contains ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //Identificar Xpath por Texto
        cy.xpath("//span[contains(text(), 'Text Box')]").should("be.visible")

    })

    it("Selector por Contains ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        //Si se indentifica un elemento del DOM por class se usa punto
        //contains se usa como un assert
        cy.get(".custom-control-label").contains("Female").click
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click
    
    })



})//cierre de describe