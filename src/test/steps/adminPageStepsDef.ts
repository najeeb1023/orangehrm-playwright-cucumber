import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber"
import { AdminPage } from "../pages/AdminPage"
import { Browser, Page, chromium, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { Login } from "../pages/LoginPage";




Given('User is already at the website.', async ()=>{

    
    
    let loginUserFunc = new AdminPage(pageFixture.page)
    await loginUserFunc.goToAdminTab()
    
    
})

When('User clicks on Admin Tab.', async ()=>{

   
    
    

})

Then('User is able to select role.', async ()=>{
    
    let userDetails = new AdminPage(pageFixture.page)
    await userDetails.enterUserDetails()

    
})