class createNewAccount {

    selectorsList() {
        const selectors = {
            nameField: "[data-testid='nome']",
            emailField: "[data-testid='email']",
            passwordField: "[data-testid='password']",
            checkBox: "[data-testid='checkbox']",
            createNewAccountButton: "[data-testid='cadastrar']",
            enterButton: "[data-testid='entrar']"
        }

        return selectors
    }

    createNewAccountAdm(username, email, password) {
        cy.get(this.selectorsList().nameField).type(username)
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().checkBox).click()
        cy.get(this.selectorsList().createNewAccountButton).click()
    }

    createNewAccount(username, email, password) {
        cy.get(this.selectorsList().nameField).type(username)
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().createNewAccountButton).click()
    }

    checkpageAdm() {
        cy.wait(1000)
        cy.location('pathname').should('equal', '/admin/home')
    }

    checkpage() {
        cy.wait(1000)
        cy.location('pathname').should('equal', '/home')
    }
}

export default createNewAccount
