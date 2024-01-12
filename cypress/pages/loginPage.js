class login {
    
    selectorsList() {
        const selectors = {
            loginField: "[data-testid='email']",
            passwordField: "[data-testid='senha']",
            loginButton: "[data-testid='entrar']",
            createNewAccountButton: "[data-testid='cadastrar']"
        }

        return selectors
    }

    checkpage() {
        cy.visit('/login')
    }

    createNewAccount() {
        cy.get(this.selectorsList().createNewAccountButton).click()
    }

}

export default login
