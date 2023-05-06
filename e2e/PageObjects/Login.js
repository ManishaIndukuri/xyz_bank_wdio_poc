module.exports=class Login{
    get clickHomePageButtonXpath() {
        return $('//button[text()="Home"]')
    }
    get getHeadingTextXpath() {
        return $('//strong[text()="XYZ Bank"]')
    }
    get customerLoginButtonElement(){
        return $('//button[text()="Customer Login"]')
    }
    get bankMangerLoginButtonElement(){
        return $('//button[text()="Bank Manager Login"]')
    }

    async clickHomePageButton(){
        await browser.waitUntil(async ()=>await(await this.clickHomePageButtonXpath).isExisting() , {
            timeout: 50000,
            timeoutMsg: 'expected text to be different after 5s'
        }) 
     await(await this.clickHomePageButtonXpath).click()
    }
    async getHeadingText(){
        return await (await this.getHeadingTextXpath).getText()
    }
    async clickCustomerLoginButton(){
        await browser.waitUntil(async ()=> await(await this.customerLoginButtonElement).isExisting(),{
            timeout:5000,
            timeoutMsg:'expected text to be different after 5s'
        })
        await (await this.customerLoginButtonElement).click()
    }
    async clickBankMangerLoginButton(){
        await browser.waitUntil(async ()=>await(await this.bankMangerLoginButtonElement).isDisplayed(),{
            timeout:5000,
            timeoutMsg:'expected text to be different after 5s'
            })
        await (await (this.bankMangerLoginButtonElement)).click()
    }
}

  