import { Given, Then, When } from "@cucumber/cucumber"
import { AdminPage } from "../pages/AdminPage"
import { Page } from "@playwright/test";
import { Login } from "../pages/LoginPage";

let page : Page;


Given('User is at the Landing Page', () => async function (){


    let loginPage = new Login(page)
    loginPage.assertUserLogin()
    
    
    
    
})

When('User clicks on Admin Tab', () => async function (){

    let adminPage = new AdminPage(page)
    adminPage.goToAdminTab()

    

})

Then('User is redirected to Admin Tab', () => async function (){
    
    let adminPage = new AdminPage(page)
    await adminPage.assertAdminTabNavigation()
    
})