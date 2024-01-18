class myListProducts {

    selectorsList() {
        const selectors = {
            homePageButton: "[data-testid='paginaInicial']",
            addToCartButton: "[data-testid='adicionar carrinho']",
            clearListButton: "[data-testid='limparLista']",
            productDecreaseButton: "[data-testid='product-decrease-quantity']",
            productIncreaseButton: "[data-testid='product-increase-quantity']"
        }

        return selectors

    }

    checkpage() {
        cy.wait(1000)
        cy.location('pathname').should('equal', '/minhaListaDeProdutos')
    }

    increaseQuantity() {
        cy.get(this.selectorsList().productIncreaseButton).click()
    }

    decreaseQuantity() {
        cy.get(this.selectorsList().productDecreaseButton).click()
    }

    addToCart() {
        cy.get(this.selectorsList().addToCartButton).click()
    }

    clearList() {
        cy.get(this.selectorsList().clearListButton).click()
    }
    
}

export default myListProducts
