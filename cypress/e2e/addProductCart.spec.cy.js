import login from "../pages/loginPage"
import createAccount from "../pages/createAccountPage"
import header from "../pages/headerPage"
import home from "../pages/homePage"

const Chance = require('chance')

const chance = new Chance()
const loginPage = new login()
const createAccountPage = new createAccount()
const headerPage = new header()
const homePage = new home()

describe('primeiro teste', () => {
    it('tente serverest', () =>{

        loginPage.checkpage()

        loginPage.createNewAccount()

        createAccountPage.createNewAccount(chance.first(), chance.email(), chance.cpf())

        createAccountPage.checkpage()

        homePage.addProduct()

    })
})