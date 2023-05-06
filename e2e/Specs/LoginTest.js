const Login =require('../PageObjects/Login')
let loginPageTest=new Login()

describe('homepage',function() {
    it("click on homepage",async function() {
        await browser.url("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
        await loginPageTest.clickHomePageButton()
        console.log(" thispage was sucessfully clicked")
        await expect(await loginPageTest.getHeadingText()).toEqual("XYZ Bank")
        await loginPageTest.clickCustomerLoginButton()
       await loginPageTest.clickHomePageButton()
        await loginPageTest.clickBankMangerLoginButton()
        await browser.pause(5000)
        console.log("-----pull r- to main branch")

    })
}) 