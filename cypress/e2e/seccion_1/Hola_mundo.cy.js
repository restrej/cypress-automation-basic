Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe("Bienvenido al curso de Cypress sección 1", () =>{

    it("Mi primer test -> Hola mundo", () =>{
        cy.log("Hola mundo")
        cy.wait(4000)

    })

    it("Segundo test -> campo name", () =>{
        cy.visit("https://demoqa.com/text-box")

        cy.get("#userName").type("Rodrigo")
        cy.wait(4000)

    })


})//cierre de describe