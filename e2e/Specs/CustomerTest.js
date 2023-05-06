const Customer = require('../PageObjects/Customer')
let customerTest= new Customer()

describe('customer',function(){
    it("customer login",async function(){
        await browser.url("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
        await customerTest.clickCustomerLoginButton()
        await customerTest.clickUserSelectText()
        console.log("-----1-----")
        await customerTest.selectValueInYourNameDropDown("Hermoine Granger")
        console.log("-----2----")
        await customerTest.clickLoginButton()
        await browser.pause(10000)




    })
})
