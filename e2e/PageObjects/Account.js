module.exports=class Account{
    get accountHolderNameXpath() {
        return '//strong[text()= " Welcome "]/child::span[text()="replace"]'
    }
    async accountHolderNameElement(personname) {
        return await $(this.accountHolderNameXpath.replace("replace",personname))
    }
    get accountNumberDropdownElement(){
        return $('//select[@name="accountSelect"]')
    }
    get optionAccountNumberXpath(){
        return '//select[@id="accountSelect"]/child::option[text()="replace"]'
    }
    async accountNumberElement(number){
        return await $(this.optionAccountNumberXpath.replace("replace",number))
    }
    get depositButtonXpath(){
        return '//div[@class="center"]/child::button[contains(text(),"replace")]'
    }
    async depositButtonElement(type){
        return await $(this.depositButtonXpath.replace("replace",type))
    }
    get amountToBeDepositElement(){
        return $('//input[@placeholder="amount"]')
    }
    get amountToGetDepositElement(){
        return $('//button[text()="Deposit"]')
    }
    get depositSucessfulMessageElement() {
        return $('//span[text()="Deposit Successful"]')
    }
    get diaplayAccountNumberElement(){
        return $('//div[@class="center"]/strong[1]')
    }
    get displayBalanceElement(){
        return $('//div[@class="center"]/strong[2]')
    }

    get displayCurrencyElement(){
        return $('//div[@class="center"]/strong[3]')
    }
    get withdrawlButtonElement(){
        return $('//div[@class="center"]/button[3]')
    }
    get enterAmountToWithdrawlElement(){
        return $('//input[@placeholder="amount"]')
    }
    get withdrawlButtonToReduceAmountElement(){
        return $('//button[text()="Withdraw"]')
    }
    get TransactionSucessfulElement(){
        return $('//span[@class="error ng-binding"]')
    }
    get TransactionFailedMessageElement(){
        return $('//span[@class="error ng-binding"]')
    }
    get LogoutButtonElement(){
        return $('//button[text()="Logout"]')
    }


    async checkAccountHolderName(personname) {
      return await (await this.accountHolderNameElement(personname)).getText()
    }
    async clickAccountNumberDropdown(){
        await browser.waitUntil(async()=>await (await this.accountNumberDropdownElement).isDisplayed(), { 
            timeout:60000,
            timeoutMsg:'deposit type not displayed even after 25000 sec'})
        await (await this.accountNumberDropdownElement).click()
    }
    async selectAnyOfAccountHolderNumber(number){
        await browser.waitUntil(async()=>await (await this.accountNumberElement(number)).isDisplayed(), { 
            timeout:60000,
            timeoutMsg:'deposit type not displayed even after 25000 sec'})
       await (await this.accountNumberElement(number)).click()
    }
    async selectTypeOfAction(type){
        await browser.waitUntil(async()=>await (await this.depositButtonElement(type)).isDisplayed(), { 
            timeout:60000,
            timeoutMsg:'deposit type not displayed even after 25000 sec'})
        await(await this.depositButtonElement(type)).click()
    }
    async enterAmountToBeDepositInTextBox(amount){
       return await (await this.amountToBeDepositElement).setValue(amount)
    }
    async clickDepositButton(){
        await browser.waitUntil(async()=>await (await this.amountToGetDepositElement).isDisplayed(), { 
            timeout:60000,
            timeoutMsg:'deposit button is not clickable even after 25000 sec'})
       await (await this.amountToGetDepositElement).click()
    }

        async SuccesfulMessageText(){
           return await (await this.depositSucessfulMessageElement).getText()
        }
        async getBalanceText() {
            return await (await this.displayBalanceElement).getText()
        }
        async getAccountNumberValueText(){
            return await (await this.diaplayAccountNumberElement).getText()
        }
        async clickWithdrawlButton(){
            await browser.waitUntil(async()=>await (await this.withdrawlButtonElement).isDisplayed(), {
                timeout:25000, 
                timeoutMsg:"withdrawlbutton is not displayed"})
            await(await this.withdrawlButtonElement).click()
        }
        async enterWithdrawlAmountText(amount){
           return await (await this.enterAmountToWithdrawlElement).setValue(amount)
        }
        async clickWithdrawlButtonToReduceAmount(){
            await browser.waitUntil(async()=>await (await this.withdrawlButtonToReduceAmountElement).isClickable(), {
            timeout:25000, 
            timeoutMsg:"withdrawlbutton is not displayed"})
           await (await this.withdrawlButtonToReduceAmountElement).click()
        }
        async TextTransactionSucessfulTextMessage() {
           return await (await this.TransactionSucessfulElement).getText()
        }
        async textTransactionFailedMessage(){
            return await (await this.TransactionFailedMessageElement).getText()
        }
        async clickLogoutButton(){
           await (await this.LogoutButtonElement).click()
        }
}