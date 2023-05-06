module.exports=class Customer {
    get customerButtonText(){
        return $('//button[text()="Customer Login"]')
    }
    get userSelectText(){
        return $('//select[@name="userSelect"]')
    }
    get yourNamexpath() {
        return '//option[@ng-repeat="cust in Customers"]/parent::select[@name="userSelect"]/child::option[text()="replace"]'
    }
     async yourNameText(personname) {
        return await $(this.yourNamexpath.replace("replace",personname))
    }
    get loginXpath(){
        return $('//button[text()="Login"]')
    
    }



    async clickCustomerLoginButton(){
        await browser.waitUntil(async ()=> (await (this.customerButtonText)).isExisting(),
        { timeout:60000, timeoutMsg:'elemnent is not displayed even after 25000 sec' }
        )
        await (this.customerButtonText).click()
    }
    async clickUserSelectText(){
        await browser.waitUntil(async ()=> (await this.userSelectText ).isExisting(),{ 
            timeout:60000,timeoutMsg:'elemnent is not displayed even after 25000 sec' })
        await (this.userSelectText).click()
    }
    async selectValueInYourNameDropDown(personname){
        await browser.waitUntil(async ()=> (await this.yourNameText(personname) ).isExisting(),{ 
            timeout:60000,timeoutMsg:'your name dropdown is not displayed even after 25000 sec' })
       await (await this.yourNameText(personname)).click()
    }
    async clickLoginButton(){
        await browser.waitUntil(async ()=> (await this.loginXpath).isExisting(),{ 
            timeout:60000,timeoutMsg:'login button elemnent is not displayed even after 25000 sec' })
        await(this.loginXpath).click()
    }

}