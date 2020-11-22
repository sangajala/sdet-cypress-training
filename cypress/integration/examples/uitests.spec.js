/// <reference types="cypress" />
///<reference types="cypress-iframe" />


describe('UI tests',()=>{
    before('visit home page',()=>{
        //visit home page
        // cy.visit('http://localhost:3000/')
        // cy.get('.button.primary').click()
       
        // cy.xpath('//button[text()="Proceed"]').click()
    })

    it('Test type commands',()=>{
     
      

        cy.get(':nth-child(1) > input').type('test@test.com').should('have.value','test@test.com')
        cy.get(':nth-child(1) > input').type('{ctrl}',{ release: false })
        cy.get(':nth-child(1) > input').type('{a}',{ parseSpecialCharSequences: true })
        cy.get(':nth-child(2) > input').type('{ctrl}{v}').should('have.value','test@test.com')

    })

    it('Test type commands +',()=>{
     

        cy.get(':nth-child(1) > input').type('test@test.com').should('have.value','test@test.com')
        cy.get(':nth-child(1) > input').type('{ctrl}',{ release: false })
        cy.get(':nth-child(1) > input').type('{ctrl}a',{ parseSpecialCharSequences: false })
    

    })

    it('Test select commands +',()=>{
     
      

        cy.get('.title').select('Mr')

        cy.get('.title').should('have.value','mr')
        cy.get('.title').should('contain.text','Mr')
    

    })

    it('Test select commands - read values and select one',()=>{
     
       

        // cy.get('.title').find('option').then(($element)=>{
        //     console.log($element)
        // })


        // let len = cy.get('.title option').its('length')
        // cy.get('.title').click({force: true})
        cy.get('.title option').then($elements => {

            //1. Find elements
                // We use jquery
            //2. cy.wrap( will convert jquery to cypress element)

            //3. We cant interact with hidden element

            // cy.wrap($elements[0]).click()
            //4. Randam value - Math.floor(Math.random() * Math.floor(array.length));
            //5. let x in $elements 
            var array = new Array()
            var i = 0;
            for(let x in $elements){
                if($elements[i])
                array[i] = $elements[i].text
                i=i+1;
            }
            console.log(array)
            let index = Math.floor(Math.random() * Math.floor(array.length));
             cy.get('.title').select(array[index])
        }
            
            // cy.wrap($elements[3]).click( {force: true})
            // {cy.wrap($elements[Math.floor(Math.random() * Math.floor(len))]).click()
            )




             
        
    

    })

    it('Check box',()=>{

            cy.get('#terms').check()
            cy.get('#terms').should('be.checked')
            cy.get('#terms').uncheck()
            cy.get('#terms').should('not.be.checked')
    })

    it('Advanced click',()=>{

        cy.get('.product img').dblclick()
        cy.get('.close-modal').click()
    })

it('Advanced click with options',()=>{

    cy.get('.product img').click('left',{waitForAnimations:true})

    cy.get('.product img').click(100,50)

    })

    it('Scrolll into',()=>{

        cy.get('.product img').scrollIntoView()
    
    
        })

    it('Scroll ',()=>{

        cy.get('.product img').scrollTo('right')

        cy.get('.product img').scrollTo(250,250)

        cy.get('.product img').scrollTo('10%','25%')
        cy.get('.product img').scrollTo('right',{duration:2000})
    
        })


        it('Trigger ',()=>{

            cy.get('.product img').trigger('click')
        
            })


            it('Right click ',()=>{

                cy.visit('https://www.quirksmode.org/dom/events/tests/contextmenu.html#')

                cy.contains('This link').rightclick()
            
                })




        it('Alerts', function (){
            // launch the url
            cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
            // click on submit button to produce the alert pop up
            cy.get('input[type="submit"]').click();
            
            cy.on('window:alert',(txt)=>{

                console.log(txt)
                expect(txt).to.contains('Your full name cannot be blank.');
             })


            });


           

                it('Confirmation', function (){
               
                    // click on submit button to produce the alert pop up
                    cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm");
                    // click on submit button to produce the confirmation alert pop up
                    cy.get('button[name="submit"]').click();
                    // firing window: alert event with on() method
                    cy.on('window:confirm',(txt)=>{
                       
                       expect(txt).to.contains('You are submitting information to an external page');
                       return false
                    })
        
                    });


                    it.only('iframe', function (){
               
                        // click on submit button to produce the alert pop up
                        cy.visit("https://www.tutorialspoint.com/html/html_iframes.htm");
            
                        // cy.frameLoaded()

                        cy.frameLoaded('.result')

                         cy.wait(1000)
        

                        cy.contains('Home').should('be.visible')


                        });



    it("should handle the alerts automatically", () => 
    {   
        cy.on("uncaught:exception", (err, runnable) => {    
             return false;   
            });  
          cy.visit("https://chercher.tech/practice/popups");
            //window:confirm is the event which get fired on alert open
            cy.on("window:confirm", (str) => {
                    return false; 
                 });
            cy.get('[name="confirmation"]').click(); 
        })


                       
                       
                    })

    

    

