/// <reference types="cypress" />

describe("Login page", function(){

it ("Navigate to the landing page and login", function (){

cy.visit("https://parabank.parasoft.com/parabank/index.htm")
cy.get("input[name= 'username']").type("Pat_Tshim_123")
cy.get("input[name= 'password']").type("Icecream1")
cy.get("input[value= 'Log In']").click()
})

})


