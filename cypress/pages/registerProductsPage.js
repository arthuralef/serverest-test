class registerProducts {

    selectorsList() {
        const selectors = {
            productNameField: "[data-testid='nome']",
            priceField: "[data-testid='preco']",
            describeField: "[data-testid='descricao']",
            quantityField: "[data-testid='quantity']",
            productImage: "[data-testid='imagem']",
            registerButton: "[data-testid='cadastarProdutos']"
        }

        return selectors

    }

    newRegisterProducts(productName, price, describe, quantity) {
        cy.get(this.selectorsList().productNameField).type(productName)
        cy.get(this.selectorsList().priceField).type(price)
        cy.get(this.selectorsList().describeField).type(describe)
        cy.get(this.selectorsList().quantityField).type(quantity)
        cy.get(this.selectorsList().registerButton).click()
    }

    checkpage() {
        cy.location('pathname').should('equal', '/admin/listarprodutos')
    }
}

export default registerProducts