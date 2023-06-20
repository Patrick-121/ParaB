/// <reference types="cypress" />
    describe("Navigate to the home page", function() {
        it("Navigate to the landing page and log in", function() {
            cy.visit("https://parabank.parasoft.com/parabank/index.htm")
            cy.contains("Register").click ()
            cy.get("input[id='customer.firstName']").type("Patrick")
            cy.get("input[id='customer.lastName']").type("Tshimpuki")
            cy.get("input[id='customer.address.street']").type("Phoenix Road")
            cy.get("input[id='customer.address.city']").type("London")
            cy.get("input[id='customer.address.state']").type("Greater London")
            cy.get("input[id='customer.address.zipCode']").type("00501-99950")
            cy.get("input[id='customer.phoneNumber']").type("012343433333")
            cy.get("input[id='customer.ssn']").type("123-45-6789")
            cy.get("input[id='customer.username']").type("Pat_Tshim_123")
            cy.get("input[id='customer.password']").type("Icecream1")
            cy.get("input[id='repeatedPassword']").type("Icecream1")
            cy.get("input[value='Register']").click()
        })
    })