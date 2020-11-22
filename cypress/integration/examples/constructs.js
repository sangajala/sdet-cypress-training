/// <reference types="cypress" />

describe('Smoke Tests',()=>{
    
    
    })
    beforeEach('Check Header',()=>{
        console.log('Before Each')
    })
    after('Logout',()=>{
        console.log('after')
    })
    afterEach('Take Screenshot',()=>{
        console.log('After Each')
    })

    it("Testcase 1",()=>{
        console.log('Testcase 1')
    })

    it.skip("Testcase 2",()=>{
        console.log('Testcase 2')
    })

    it("Testcase 3",()=>{
        console.log('Testcase 3')
    })
})