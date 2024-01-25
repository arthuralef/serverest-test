import login from "../pages/loginPage"
import createAccount from "../pages/createAccountPage"
import header from "../pages/headerPage"

const Chance = require('chance')

const chance = new Chance()
const loginPage = new login()
const createAccountPage = new createAccount()
const headerPage = new header ()

describe('Teste de novo usuario Serverest', () => {
    it('Criar usuario - Sucesso', () =>{

        loginPage.checkpage()

        loginPage.createNewAccount()

        createAccountPage.createNewAccount(chance.first(), chance.email(), chance.cpf())

        createAccountPage.checkpage()

        headerPage.logout()

    })

    it('Criar Usuario - Falha', () =>{

        loginPage.checkpage()

        loginPage.createNewAccount()

        createAccountPage.createNewAccount(chance.first(), chance.cpf(), chance.cpf())
        
    })
})
