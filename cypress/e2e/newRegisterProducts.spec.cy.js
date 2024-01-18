import login from "../pages/loginPage"
import createAccount from "../pages/createAccountPage"
import header from "../pages/headerPage"
import registerProducts from "../pages/registerProductsPage"
import listUsers from "../pages/listUsersPage"

const Chance = require('chance')

const chance = new Chance()
const loginPage = new login()
const createAccountPage = new createAccount()
const headerPage = new header()
const registerProductsPage = new registerProducts()
const listUsersPage = new listUsers()

describe('primeiro teste', () => {
    it('tente serverest', () =>{

        loginPage.checkpage()

        loginPage.createNewAccount()

        createAccountPage.createNewAccountAdm(chance.first(), chance.email(), chance.cpf())

        createAccountPage.checkpageAdm()

        headerPage.registerProductsPath()

        registerProductsPage.newRegisterProducts(chance.animal(), chance.natural({min: 5, max: 250}) , chance.sentence({ words: 10 }), chance.natural({min:1, max: 50}))

        registerProductsPage.checkpage()

        listUsersPage.deleteUser()
    })
})
