import { Page, expect } from "@playwright/test";
import { PageElement } from "../resources/interfaces/iPageElement";
import * as loginPageResources from "../resources/LoginPageLocators.json"

 function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
 }
export class Login {

    loginPageLocators = {
        loginField:() => this.page.locator(getResource('loginField').selectorValue),
        loginBtn:() => this.page.locator("//button[@type='submit']")
    }

    
    

    constructor(public page: Page){
        this.page = page;


    }

    public async loginUser(username: string):Promise<void> {
       this.loginPageLocators.loginField().type(username)
       
       
        
        
        
    }


}