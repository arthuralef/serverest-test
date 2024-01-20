import login from "../pages/loginPage"
import createAccount from "../pages/createAccountPage"

const Chance = require('chance')

const chance = new Chance()
const loginPage = new login()
const createAccountPage = new createAccount()

describe('Teste de novo usuario Serverest', () => {
    it('Criar usuario com a opção de administrador - Sucesso', () =>{

        loginPage.checkpage()

        loginPage.createNewAccount()

        createAccountPage.createNewAccountAdm(chance.first(), chance.email(), chance.cpf())

        createAccountPage.checkpageAdm()
    })
})
