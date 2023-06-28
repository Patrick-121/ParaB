/// <reference types="cypress" />

describe("Checkoutpage", function(){

    it ("Navigate to the landing page and checkout page", function (){
    
    cy.visit("https://luma.enablementadobe.com/content/luma/us/en.html")
    cy.contains("Shop Now").click()
    cy.get("a[href='/content/luma/us/en/products/gear/fitness/sprite-yoga-straps.html']").click()
    cy.get("button[itemprop='addToCartButton']").click()
    cy.get("a[class='btn btn-primary btn-action pull-right']").click()
    cy.get("a[class='btn btn-primary btn-action cq-dd-linkTo btn-checkout']").click()
    cy.get("input[name='shipping.firstname']").type("Patrick")
    cy.get("input[name='shipping.lastname']").type("Tshimpuki")
    cy.get("input[name='shipping.street1']").type('Adelaide Road')
    cy.get("input[name='shipping.street2']").type('London')
    cy.get("input[name='shipping.city']").type("Greater London")
    cy.get("input[name='shipping.zip']").type("NW3 3NY")
    cy.get("input[name='shipping.firstname']")
    })
    
    })