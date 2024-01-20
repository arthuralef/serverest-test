import login from "../pages/loginPage"
import createAccount from "../pages/createAccountPage"
import header from "../pages/headerPage"

const Chance = require('chance')

const chance = new Chance()
const loginPage = new login()
const createAccountPage = new createAccount()
const headerPage = new header()

describe('Teste de login Serverest', () => {
    it('Criar usuario e efetuar login - Sucesso', () =>{

        loginPage.checkpage()

        loginPage.createNewAccount()

        createAccountPage.createNewAccount(chance.first(), chance.email(), chance.cpf())

        headerPage.logout()

        loginPage.createNewAccount()

        createAccountPage.createNewAccountAdm(chance.first(), chance.email(), chance.cpf())

        headerPage.logout()

    })
})
