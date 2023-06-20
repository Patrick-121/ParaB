/// <reference types="cypress" />
describe ("Navigate to home page",function() {

it ("Navigate to login page and contact us page", function(){
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    cy.contains("Contact Us").click()
    cy.get("input[id = 'name']").type("Patrick Tshimpuki")
    cy.get("input[id = 'email']").type("ptshimpuki.yahoo.co.uk")
    cy.get("input[id = 'phone']").type("null")
    cy.get("textarea[id = 'message']").type("This is a test message")
    cy.get("input[value = 'Send to Customer Care']").click()
})
})