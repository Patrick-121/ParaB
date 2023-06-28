/// <reference types="cypress" />

describe("Login page", function(){

it ("Navigate to the landing page and login", function (){



cy.visit("https://parabank.parasoft.com/parabank/index.htm")
cy.readFile("cypress\\fixtures\\newUserDetails.json").then((newUserDetails) =>{

cy.get("input[name= 'username']").type(newUserDetails.userName)
cy.get("input[name= 'password']").type(newUserDetails.password)
cy.get("input[value= 'Log In']").click()
cy.contains("Patrick Tshimpuki").should("contain.text", newUserDetails.displayName)

})


})

})


