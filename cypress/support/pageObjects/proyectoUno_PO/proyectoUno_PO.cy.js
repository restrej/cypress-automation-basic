class ProyectoUno_Po{

    visitHome(){
        let tiempo=1000
        before(() =>{
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html'),
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(tiempo)
    
        })
        
    }

}//final

export default ProyectoUno_Po;