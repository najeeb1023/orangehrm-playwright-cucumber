import { Page, expect } from "@playwright/test";
import { PageElement } from "../resources/interfaces/iPageElement";

export class Login {
    

    
    loginPageLocators = {
        usernameField:() => this.page.locator("//input[@name='username']"),
        passwordField:() => this.page.locator("//input[@name='password']"),
        loginBtn:() => this.page.locator("//button[@type='submit']")
    }

    landingPageAssertLocator = {
         
        dashboardText:() => this.page.locator("//div[@class='oxd-brand-banner']//img[@alt='client brand banner']")
        
    }
    

    

    constructor(public page: Page){
        this.page = page;


    }

    public async loginUser(username: string, password: string):Promise<void> {
        this.loginPageLocators.usernameField().type(username)
        this.loginPageLocators.passwordField().type(password)
        this.loginPageLocators.loginBtn().click()
        
        
        
    }

    public async assertIfUserWasLoggedIn():Promise<void> {
        console.log('Test')
        //expect(this.landingPageAssertLocator.dashboardText()).toBeEnabled()
    }

}