import login from "../pages/loginPage"

const Chance = require('chance')

const chance = new Chance()
const loginPage = new login()

describe('primeiro teste', () => {
    it('tente serverest', () =>{

        loginPage.checkpage()

        loginPage.createNewAccount()
    })
})