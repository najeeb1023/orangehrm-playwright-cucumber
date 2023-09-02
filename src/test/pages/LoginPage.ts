import { Page, expect } from "@playwright/test";
import { PageElement } from "../resources/interfaces/iPageElement";
import * as loginPageResources from "../resources/LoginPageLocators.json"

 function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
 }
export class Login {

    loginPageLocators = {
        loginField:() => this.page.locator(getResource('loginField').selectorValue),
        passwordField:() => this.page.locator(getResource('passwordField').selectorValue),
        loginBtn:() => this.page.locator("//button[@type='submit']")
    }

    
    

    constructor(public page: Page){
        this.page = page;


    }

    public async loginUser(username: string, password: string):Promise<void> {
       await this.loginPageLocators.loginField().type(username)
       await this.loginPageLocators.passwordField().type(password)
       await this.loginPageLocators.loginBtn().click()
       
       
       
        
        
        
    }


}