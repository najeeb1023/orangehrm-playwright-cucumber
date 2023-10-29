import { Given, Then, When } from "@cucumber/cucumber"
import { AdminPage } from "../pages/AdminPage"
import { Browser, Page, chromium, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";




Given('User is already at the website', async function (){

    

    
    await expect(pageFixture.page).toHaveTitle('OrangeHRM')
    console.log('Running expect after')
    // console.log('2nd scenario Given running!!!!')
    // let adminPage = new AdminPage(pageFixture.page)
    // await adminPage.goToAdminTab()
    
    
})

When('User clicks on Admin Tab', async function (){

    console.log('When running 2nd scenario')

    

})

Then('User is redirected to Admin Tab', async function (){
    
   console.log('Then running 2nd scenario')
    
})