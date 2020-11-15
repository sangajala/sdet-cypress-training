/// <reference types="cypress" />

describe('Products',()=>{

    before('visit home page',()=>{
        //visit home page
        cy.visit('http://localhost:3000/')
    })

    beforeEach('visit home page every tyime',()=>{
        //visit home page
        cy.visit('http://localhost:3000/')
    })

    it('Verify the homepage link is visible ',()=>{
        //click on home link
        cy.contains('React Shopping Cart').click()
        //verify that the dropdown is visible
        cy.get('.filter-sort').should('be.visible')
    })

    it('Verify the Admin link is visible  and navigating to admin page',()=>{
        //click on home link
        cy.contains('Admin').click()
        //verify that the Orders text element is visible
        cy.contains('Orders').should('be.visible')
    })

    it('Verify the footer is visible',()=>{
        //verify that the All rights are reserved. text element is visible
        cy.contains('All rights are reserved.').should('be.visible')
    })

    it.only('Verify atleast one product is visible',()=>{

        cy.get('.button.primary').click()
        //  let x = cy.get('.sidebar').find('button').its('class')
        // let x = cy.get('.sidebar').find('button').c
        
        let x =  cy.get('.sidebar').contains('$29.9 x 1').its('class')
        console.log(x)
        // cy.get('.sidebar').find('div.total > button').should('be.visible')

    })

    it('Verify atleast one product is visible 2',()=>{

        cy.get('.button.primary').click()
       
        cy.xpath('//button[text()="Proceed"]').click()

        cy.get('.sidebar').within(($form)=>{
            
            cy.contains('$29.9 x 1').should('be.visible')
            cy.get('div.total > button').should('be.visible')
        })



        // cy.get('.sidebar').contains('$29.9 x 1').should('be.visible')
        // cy.get('.sidebar').find('div.total > button').should('be.visible'

    })

    it('Verify the footer is text',()=>{
        //verify that the All rights are reserved. text element is visible
        //chai assertion
        cy.get('footer').should('have.text','All rights are reserved.')
        cy.get('footer').should('contain.text','All rights')

    })

    it.only('Verify the footer is text',()=>{
  
        cy.get('footer').should(($text)=>{
            expect($text.text()).to.equal('All rights are reserved.')
        })

    })
})