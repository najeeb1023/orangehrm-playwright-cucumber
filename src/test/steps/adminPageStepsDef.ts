import { Given, Then, When } from "@cucumber/cucumber"
import { AdminPage } from "../pages/AdminPage"
import { Browser, Page, chromium, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { Login } from "../pages/LoginPage";




Given('User is already at the website.', async function (){

    
    
    let loginUserFunc = new AdminPage(pageFixture.page)
    await loginUserFunc.goToAdminTab()
    
    
})

When('User clicks on Admin Tab.', async function (){

    console.log('Test ends')
    
    

})

Then('User is able to enter {string}.', async function (usertext: string){
    
    let userDetails = new AdminPage(pageFixture.page)
    await userDetails.enterUserDetails(usertext)

    
})