Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

//Para que funcionen los comandos de Cypress
/// <reference types="cypress" />

require('cypress-xpath');

describe("Nueva seccion Asserts ", () =>{

    it("Assert contains", () =>{
        cy.visit("http://testingqarvn.com.es/")
        cy.title().should("eq", "TestingQaRvn | Mundo del Testing")
        cy.wait(1000)
        //Tener encuenta que lo que este en el contenido(contains) debe estar dentro del contenido de un padre
        cy.get("#top-menu").contains("Contacto").click()
        

    })

    it("Assert find, eq", () =>{
        cy.visit("https://www.gueritta.com/collections/all")
        cy.title().should("eq", "Productos – Güerittacol")
        cy.wait(1500)
        //Se utiliza cuando se tienen varios elementos dentro de un contenedor y se quiere dar clic en cualquiera
        //con el metodo find() y eq()--> le mando el valor del arrays que quiero darle click en este caso como todo arrays empieza en cero, se esta haciendo click a la 3era posición
        cy.get("#product-grid").find(".card-wrapper").eq(2).click()
    })

    it("Assert find, eq, validando nombre del vestido y el precio", () =>{
        cy.visit("https://www.gueritta.com/collections/all")
        cy.title().should("eq", "Productos – Güerittacol")
        cy.wait(1500)
        //Se utiliza cuando se tienen varios elementos dentro de un contenedor y se quiere dar clic en cualquiera
        //con el metodo find() y eq()--> le mando el valor del arrays que quiero darle click en este caso como todo arrays empieza en cero, se esta haciendo click a la 3era posición
        cy.get("#product-grid").find(".card-wrapper").eq(2).click()

        cy.get(".product__title").then((e)=>{
            //cy.log(e.text())
            //Se aplica la funcion .trim(), para quitar espacios en blanco al inicio y al final del texto
            let estado=e.text().trim()
            cy.log(estado.trim());
            if(estado=="Buzo mangas Quimbayas"){
                cy.log("El vestido es Nuevo")
            }
        })

        cy.xpath("//span[contains(@class,'price-item price-item--regular')]").then((e)=>{
            cy.log(e.text())
            let precio=e.text()
            //Primero se usa la funcion replace(), para quitar espacios en blanco en el precio
            //Luego se le aplica la funcion slice()-->para quitar simbolos a un precio. para esto se ingresa un valor
            //numerico desde donde debe empezar el valor y donde termina, como el simbolo $ esta en la posición 1, entonces se empieza desde 2 hasta la posicion donde termina el valor osea 9, sin contar los decimales (2,9)
            //ya que para este caso ese valor numerico tiene espacios al inicio y al final
            precio=precio.replace(/ /g, "").slice(2,9)
            cy.log(precio)

            if(precio > 95.000){
                cy.log("El vestido sale de nuestro presupuesto, no lo podemos comprar")
                cy.xpath("//span[contains(.,'Catálogo')]").click()
                cy.wait(3000)
            }else{
                cy.log("El vestido está en nuestro presupuesto, continua con la compra")
                cy.xpath("//span[contains(.,'Agregar al carrito')]").click()
                cy.wait(5000)
            }

        })
    })

    it("Assert contains.text y have.text", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("rodrigo")
        cy.get("#userEmail").should("be.visible").type("rodrigo@gmail.com")
        cy.get("#submit").should("be.visible").click()

        //Para validar un texto, para este caso se valida el texto nombre(rodrigo), y se utiliza la función have.text.
        // entonces should("have.text","rodrigo")--> despues de la función se ingresa el texto que quiero validar

        //La diferencia entre contain.text y have.text
        //En have.text tiene que contener todo el texto tal cual, y con el contain.text solo una parte del texto, osea con solo un pedazo del texto lo valida
        cy.get("#name").should("have.text","Name:rodrigo")
        
        //contain.text --> Valida solo con un pedacito que contenga del texto
        cy.get("#name").should("contain.text","rodrigo")
        
    })

    it("Assert have.value más then", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("rodrigo")
        
        //la función have.value --> es para validar el valor exacto. en este caso es el name (rodrigo)
        cy.get("#userName").should("have.value", "rodrigo").then(()=>{
            cy.get("#userEmail").should("be.visible").type("rodrigo@gmail.com")
            cy.get("#submit").should("be.visible").click()
        })

    })

    it("Assert have.class más then", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        //Se valida el campo si es visible, y si contiene la clase mr-sm-2
        cy.get("#userName").should("be.visible").should("have.class", "mr-sm-2").then(()=>{
            cy.get("#userName").type("rodrigo")
        })
        
   
    })

    it("Assert have.class y la función and", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        //Se aplica la función and() que obliga que se tienen que cumplir las dos condiciones. Si no cumple las dos no puede pasar al Then
        //Lo que se valida es que el campo sea visible y que contenga la clase (mr-sm-2). si no tiene esta clase no puede pasar al Then
        cy.get("#userName").should("be.visible").and("have.class", "mr-sm-2").then(()=>{
            cy.get("#userName").type("rodrigo")
        })
   
    })

    it("Assert have.class y la función and", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        //Validaciones negativas: Si quieres que un elemento no este visible, se usa la función (not.be.visible)
        //Si quiero validar que no contenga la clase se usa la función (not.have.class)
        cy.get("#userName").should("be.visible").and("not.have.class", "mr-sm-22").then(()=>{
            cy.get("#userName").type("rodrigo")
        })
   
    })

    it("Assert length y el css", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-pagination-demo.html")
        cy.title().should("eq", "Selenium Easy - Table with Pagination Demo")
        cy.wait(1000)

        //(have.length) ---> Función para validar cuantos elementos tiene una tabla, y validar el largo de un objeto
        cy.get("#myTable >tr >td").should("have.length", 91).and("have.css", "padding", "8px")
   
    })

    it.only("Contains", () =>{
        let tiempo=1000

        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should("eq", "Selenium Easy Demo - Simple Form to Automate using Selenium")
        cy.wait(tiempo)

        //Eliminar ventana emergente
        //con la función force:true --> es para forzar a hacerle click al elemento
        cy.get(".at-cm-no-button").should("be.visible").click({force:true})
        cy.get('.form-group > #user-message').should("be.visible").type("Demo del contenido")

        cy.wait(tiempo)
        cy.contains("[type='button']", "Show Message").should("be.visible").click({force:true})
    
   
    })

  

})//cierre de describe