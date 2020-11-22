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


    it('Verify atleast one product is visible',()=>{

        cy.get('.button.primary').click()
        cy.get('.sidebar').find('button').should('be.visible')

        cy.get('.sidebar').contains('$29.9 x 1').should('be.visible')

        cy.get('.sidebar').find('div.total > button').should('be.visible')
        cy.xpath('//button[text()="Proceed"]').click()

        // cy.wait(1000).then(()=>{
        //     console.log('1')
        // });
        cy.wait(1000)
        cy.log('1')
        cy.wait(1000)
        cy.log('2')


    })

    it('Verify the attributes',()=>{

        cy.get('.button.primary').click()
        cy.get('.sidebar').find('buttonsadsd').should('be.visible')

        cy.get('.sidebar').contains('$29.9 xas 1').should('have.length',1)
        cy.get('.sidebar').contains('$29.9 x 1').should('have.text','$29.9  x 1 Remove')



    })

    var text;

    it.only('Explicit assertions',()=>{
        cy.get('.button.primary').click()
        cy.contains('Proceed').click()
        cy.get("input[name='email']").type('test@test.com')
        cy.get("input[name='name']").type('test user')
        cy.get("input[name='address']").type('test address,london')
        cy.contains('Checkout').click()
        cy.get('.close-modal').click()
        cy.contains('Admin').click()

        cy.get('table').find('tr').last().find('td:nth(1)')
        .then(($element)=>{
            text = $element.text()
            console.log(text)
            let date = new Date();
            // let currentDate = date.getFullYear()+'-'+((String(date.getMonth()).length==1)(0)?'0'+(date.getMonth()+1):(date.getMonth()+1))+'-'+date.getDate()
            let currentDate = new Date().toISOString().slice(0,10)

            console.log('date'+currentDate)
            expect(text).to.include(currentDate)
            //assert
        })





    })


})