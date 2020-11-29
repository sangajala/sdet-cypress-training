import {Given,
    When,
    Then,
    Before,
    After
} from "cypress-cucumber-preprocessor/steps";

import ProductDetailPage from '../../support/PageObjects/ProductDetailPage'

const productDetailPage = new ProductDetailPage()

Before(()=>{
    cy.log(Cypress.env('DBUSER'))
    Cypress.config('pageLoadTimeout',60000)
    cy.log('I am in hook - Before')
})

After(()=>{
    cy.log('I am in hook - After')
})

Given(`I am in home page`,()=>{
    cy.visit("/")
})

When(`I select and item {string} and add it to cart`,(product)=>{
    cy.contains(product).click()
    cy.get('div.product-price button').eq(1).click()
})

When(`I select and item {string}`,(product)=>{
    cy.contains(product).click()
})

When(`I select max size of the products`,()=>{
  
  productDetailPage.getMinSizeButton().click()
  
})
When(`I close the Product`,()=>{
    
    productDetailPage.closeTheWindow()
})

When(`I add item to cart`,()=>{
   
    // productDetailPage.addToCart()
    // cy.addToCartRamana()
    cy.addToCartSriram()
})
// And I select max size of the products
// And I close the Product

When(`I proceed to checkout`,()=>{
    cy.contains('Proceed').click()
})


When(`I fill the checkout details with {string} , {string} ,{string} and {string}`,(title,name,email,address)=>{
    // cy.get('input[name="name"]').type(title)
    cy.get('input[name="name"]').type(name)
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="address"]').type(address)
    cy.get('#terms').check()
    cy.contains('Checkout').click()
})

Then(`I should see {string} message`,(message)=>{
    cy.contains(message).should('be.visible')
})


