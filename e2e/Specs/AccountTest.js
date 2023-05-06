const Login=require('../PageObjects/Login')
const Customer=require('../PageObjects/Customer')
const Account=require('../PageObjects/Account')

let loginTest=new Login()
let customerTest=new Customer()
let accountTest=new Account()

describe("account",async function(){

//     it('accountHolderDetails',async function() {
//         await browser.url("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
//         await customerTest.clickCustomerLoginButton()
//         await customerTest.clickUserSelectText()
//         await customerTest.selectValueInYourNameDropDown("Hermoine Granger")
//         await customerTest.clickLoginButton()
//        console.log("-----4----")
//        await expect(await accountTest.checkAccountHolderName("Hermoine Granger")).toEqual("Hermoine Granger")
//        await accountTest.clickAccountNumberDropdown()
//        console.log("-----5----")
//        await accountTest.selectAnyOfAccountHolderNumber("1002")
//        console.log("-----6----")
//        let balanceBeforeDeposit=Number(await accountTest.getBalanceText())
//        await accountTest.selectTypeOfAction("Deposit")
//        console.log("-----7----")
//        let aomountToBeDeposited="1300"
//        await accountTest.enterAmountToBeDepositInTextBox(aomountToBeDeposited)
//        console.log("-----8-----")
//        await accountTest.clickDepositButton()
//        console.log("-----9---")
//        await expect(await accountTest.SuccesfulMessageText()).toEqual("Deposit Successful")
//        console.log("-----10----")
//        let balanceAfterDeposit=Number(await accountTest.getBalanceText())
//        await expect(balanceBeforeDeposit+Number(aomountToBeDeposited)).toEqual(balanceAfterDeposit)
//        console.log("----11---")
//        await browser.pause(7000)
//         await accountTest.clickLogoutButton()
//  })




    // it('withdrawl process',async function(){
    //     await browser.url("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
    //     await customerTest.clickCustomerLoginButton()
    //     await customerTest.clickUserSelectText()
    //     await customerTest.selectValueInYourNameDropDown("Hermoine Granger")
    //     await customerTest.clickLoginButton()
    //    await expect(await accountTest.checkAccountHolderName("Hermoine Granger")).toEqual("Hermoine Granger")
    //    await accountTest.clickAccountNumberDropdown()
    //    await accountTest.selectAnyOfAccountHolderNumber("1002")
    //    await accountTest.selectTypeOfAction("Deposit")
    //    let amountToWithdrawl="1000"
    //    await accountTest.enterAmountToBeDepositInTextBox(amountToWithdrawl)
    //    await accountTest.clickDepositButton()
    //    await expect(await accountTest.SuccesfulMessageText()).toEqual("Deposit Successful")
    //    await accountTest.clickWithdrawlButton()
    //    let beforeWithdrawlBalance=Number(await accountTest.getBalanceText())
    //    await accountTest.enterWithdrawlAmountText(amountToWithdrawl)
    //    await accountTest.clickWithdrawlButtonToReduceAmount()
    //    let balanceAfterwithdrawl=Number(await accountTest.getBalanceText())
    //   await expect(beforeWithdrawlBalance-Number(amountToWithdrawl)).toEqual(balanceAfterwithdrawl)
   //     await accountTest.clickLogoutButton()
    // })
    
    it('withdraw more amount than existing balance',async function(){
        await browser.url("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
        await customerTest.clickCustomerLoginButton()
        await customerTest.clickUserSelectText()
        await customerTest.selectValueInYourNameDropDown("Hermoine Granger")
        await customerTest.clickLoginButton()
       await expect(await accountTest.checkAccountHolderName("Hermoine Granger")).toEqual("Hermoine Granger")
       await accountTest.clickAccountNumberDropdown()
       await accountTest.selectAnyOfAccountHolderNumber("1002")
       let beforeWithdrawlBalance=Number(await accountTest.getBalanceText())
       await accountTest.clickWithdrawlButton()
       await accountTest.enterWithdrawlAmountText(beforeWithdrawlBalance+3)
       await accountTest.clickWithdrawlButtonToReduceAmount()
       await expect(await accountTest.textTransactionFailedMessage()).toEqual("Transaction Failed. You can not withdraw amount more than the balance.")
       await accountTest.clickLogoutButton()
       await browser.pause(7000)
    })




})
