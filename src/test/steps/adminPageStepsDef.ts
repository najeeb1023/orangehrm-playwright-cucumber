import { Given, Then, When } from "@cucumber/cucumber"
import { AdminPage } from "../pages/AdminPage"
import { Browser, Page, chromium, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { Login } from "../pages/LoginPage";




Given('User is already at the website', async function (){

    
    console.log('Given Successful')
    //await new Promise(f => setTimeout(f, 1000));
    let loginUserFunc = new AdminPage(pageFixture.page)
    loginUserFunc.goToAdminTab()
    
    
})

When('User clicks on Admin Tab', async function (){

    console.log('Tests running successfully.')

    

})

Then('User is redirected to Admin Tab', async function (){
    
   console.log('Tests finished.')
    
})