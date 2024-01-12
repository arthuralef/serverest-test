class listProducts {

    selectorsList() {
        const selectors = {
            toEditButton: ".btn-info[type='button']",
            deleteButton: ".btn-danger[type='button']"
        }

        return selectors

    }

    editUser() {
        cy.get(this.selectorsList().toEditButton).eq(0).click()
    }

    deleteUser() {
        cy.get(this.selectorsList().deleteButton).eq(0).click()
    }

}

export default listProducts
