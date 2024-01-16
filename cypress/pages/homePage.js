class home {

    selectorsList() {
        const selectors = {
            addToListButton: "[data-testid='adicionarNaLista']",
            searchProductField: "[data-testid='pesquisar']",
            searchButton: "[data-testid='botaoPesquisar']"
        }

        return selectors

    }

    addProduct(){
        cy.get(this.selectorsList().addToListButton).eq(0).click()
        cy.location('pathname').should('equal', '/minhaListaDeProdutos')
    }

}

export default home
