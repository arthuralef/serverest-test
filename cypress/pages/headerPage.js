class header {

    selectorsList() {
        const selectors = {
            homeHeaderButton: "[data-testid='home']",
            userRegistrationHeaderButton: "[data-testid='cadastrar-usuarios']",
            listUsersHeaderButton: "[data-testid='listar-usuarios']",
            registerProductsHeaderButton: "[data-testid='cadastrar-produtos']",
            listProductsHeaderButton: "[data-testid='cadastrar-produtos']",
            reportHeaderButton: "[data-testid='link-relatorios']",
            logoutButton: "[data-testid='logout']",
        }

        return selectors

    }

    homePath() {
        cy.get(this.selectorsList().homeHeaderButton).click()
        cy.location('pathname').should('equal', '/admin/home')
    }

    userRegistrationPath() {
        cy.get(this.selectorsList().userRegistrationHeaderButton).click()
        cy.location('pathname').should('equal', '/admin/cadastrarusuarios')
    }

    listUsersPath() {
        cy.get(this.selectorsList().listUsersHeaderButton).click()
        cy.location('pathname').should('equal', '/admin/listarusuarios')
    }

    registerProductsPath() {
        cy.get(this.selectorsList().registerProductsHeaderButton).click()
        cy.location('pathname').should('equal', '/admin/cadastrarprodutos')
    }

    listProductsHeaderPath() {
        cy.get(this.selectorsList().listProductsHeaderButton).click()
        cy.location('pathname').should('equal', '/admin/listarprodutos')
    }

    reportHeaderPath() {
        cy.get(this.selectorsList().reportHeaderButton).click()
        cy.location('pathname').should('equal', '/admin/relatorios')
    }

    logout() {
        cy.wait(1000)
        cy.get(this.selectorsList().logoutButton).click()
        cy.location('pathname').should('equal', '/login')
    }

}

export default header
