import login from "../pages/loginPage"
import createAccount from "../pages/createAccountPage"
import header from "../pages/headerPage"
import home from "../pages/homePage"
import myListProducts from "../pages/myListProductsPage"

const Chance = require('chance')

const chance = new Chance()
const loginPage = new login()
const createAccountPage = new createAccount()
const headerPage = new header()
const homePage = new home()
const myListProductsPage = new myListProducts()

describe('Teste de funcionalidade Serverest', () => {
    it('Adicionar produto no carrinho e fazer configurações - Sucesso', () => {

        loginPage.checkpage()

        loginPage.createNewAccount()

        createAccountPage.createNewAccount(chance.first(), chance.email(), chance.cpf())

        createAccountPage.checkpage()

        homePage.addProduct()

        myListProductsPage.checkpage()

        myListProductsPage.increaseQuantity()

        myListProductsPage.decreaseQuantity()

        myListProductsPage.clearList()

        headerPage.logout()

        loginPage.checkpage()
    })
    
})
