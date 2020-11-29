export default class ProductDetailPage{

    getMinSizeButton(){
        return cy.get('.product-details-description').contains('X')
    }
    getMinSizeButton(){
        return cy.get('.product-details-description').contains('XXL')
    }

    getCloseButton(){
        return cy.contains('x')
    }

    getAddToCart(){
        return  cy.get('div.product-price button').eq(1)
    }

    closeTheWindow(){
        this.getCloseButton().click()
    }

    addToCart(){
        this.getAddToCart().click()
    }

}

Cypress.Commands.add("addToCartSriram",()=>{
    const productDetailPage = new ProductDetailPage()
    productDetailPage.getAddToCart().click()
})


