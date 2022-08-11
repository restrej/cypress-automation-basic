import ProyectoUno_Po from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO.cy'

//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

//import 'cypress-file-upload';
//require('@4tw/cypress-drag-drop')
//require('cypress-xpath')
//require('cypress-plugin-tab')

describe("Page objects Models ", () =>{

    const proyectoUno_PO = new ProyectoUno_Po()

    proyectoUno_PO.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        });
    
    it('Test uno', () =>{
        cy.log("hola")

    })
});

