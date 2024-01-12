class admHome {

    selectorsList() {
        const selectors = {
            userRegistrationButton: "[data-testid='cadastrarUsuarios']",
            listUsersButton: "[data-testid='listarUsuarios']",
            registerProductsButton: "[data-testid='cadastrarProdutos']",
            listProductsButton: "[data-testid='listarProdutos']",
            reportButton: "[data-testid='listarProdutos']"
        }

        return selectors

    }

    checkpage () {
        cy.wait(1000)
        cy.location('pathname').should('equal', '/admin/home')
    }

    userRegistration() {
        cy.get(this.selectorsList().userRegistrationButton).click()
        cy.location('pathname').should('equal', '/admin/cadastrarusuarios')
    }

    listUsers() {
        cy.get(this.selectorsList().listUsersButton).click()
        cy.location('pathname').should('equal', '/admin/listarusuarios')
    }

    registerProducts() {
        cy.get(this.selectorsList().registerProductsButton).click()
        cy.location('pathname').should('equal', '/admin/cadastrarprodutos')
    }

    listProducts() {
        cy.get(this.selectorsList().listProductsButton).click()
        cy.location('pathname').should('equal', '/admin/listarprodutos')
    }

    report() {
        cy.get(this.selectorsList().reportButton).click()
        cy.location('pathname').should('equal', '/admin/relatorios')
    }

}

export default admHome
