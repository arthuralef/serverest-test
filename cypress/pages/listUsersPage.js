class listUsers {

    selectorsList() {
        const selectors = {
            toEditButton: ".center .btn-info",
            deleteButton: ".btn-danger[type='button']"
        }

        return selectors

    }

    editUser() {
        cy.get(this.selectorsList().toEditButton).eq(2).click()
    }

    deleteUser() {
        cy.get(this.selectorsList().deleteButton).eq(2).click()
    }

    checkpage() {
        cy.wait(1000)
        cy.location('pathname').should('equal', '/admin/listarusuarios')
    }

}

export default listUsers
