import { Given, Then, When } from "@cucumber/cucumber"
import { AdminPage } from "../pages/AdminPage"
import { Browser, Page, chromium, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { Login } from "../pages/LoginPage";




Given('User is already at the website', async function (){

    
    console.log('Given Successful')
    await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await new Promise(f => setTimeout(f, 1000));
    await pageFixture.page.waitForTimeout(6000)
    let loginUserFunc = new AdminPage(pageFixture.page)
    loginUserFunc.goToAdminTab()
    
    
})

When('User clicks on Admin Tab', async function (){

    console.log('When running 2nd scenario')

    

})

Then('User is redirected to Admin Tab', async function (){
    
   console.log('Then running 2nd scenario')
    
})