import login from "../pages/loginPage"
import createAccount from "../pages/createAccountPage"
import header from "../pages/headerPage"
import listUsers from "../pages/listUsersPage"
import admHome from "../pages/admHomePage"

const Chance = require('chance')

const chance = new Chance()
const loginPage = new login()
const createAccountPage = new createAccount()
const headerPage = new header()
const listUsersPage = new listUsers()
const admHomePage = new admHome()

describe('Teste de funcionalidade Serverest', () => {
    it('tente serverest', () => {

        loginPage.checkpage()

        loginPage.createNewAccount()

        createAccountPage.createNewAccountAdm(chance.first(), chance.email(), chance.cpf())

        admHomePage.checkpage()

        headerPage.listUsersPath()

        listUsersPage.editUser()

        listUsersPage.deleteUser()
    })
    
})
