import { Given, Then, When } from "@cucumber/cucumber"
import { AdminPage } from "../pages/AdminPage"
import { Browser, Page, chromium } from "@playwright/test";

let page : Page;
let browser: Browser;


Given('User is at the Landing Page', () => async function (){

  
    console.log('2nd scenario Given running!!!!')
    let adminPage = new AdminPage(page)
    await adminPage.goToAdminTab()
    
    
})

When('User clicks on Admin Tab', () => async function (){

    console.log('When running 2nd scenario')

    

})

Then('User is redirected to Admin Tab', () => async function (){
    
   console.log('Then running 2nd scenario')
    
})