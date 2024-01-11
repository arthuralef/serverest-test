class userRegistration {

    selectorsList() {
        const selectors = {
            namefield: "[data-testid='nome']",
            emailField: "[data-testid='email']",
            passwordField: "[data-testid='password']",
            checkBox: "[data-testid='checkbox']",
            newCreadeAccount: "[data-testid='cadastrarUsuario']"
        }

        return selectors

    }

    newUserRegistrationAdm(username, email, password) {
        cy.get(this.selectorsList().namefield).type(username)
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().checkBox).click()
        cy.get(this.selectorsList().newCreadeAccount).click()

    }

    newUserRegistration(username, email, password) {
        cy.get(this.selectorsList().namefield).type(username)
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().newCreadeAccount).click()

    }

    checkpageCreateAccount() {
        cy.location('pathname').should('equal', '/admin/listarusuarios')
    }
    
}

export default userRegistration