import { Page, expect } from "@playwright/test";
import { PageElement } from "../resources/interfaces/iPageElement";
import * as loginPageResources from "../resources/LoginPageLocators.json"
import { pageFixture } from "../hooks/pageFixture";

 function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
 }
export class Login {

    loginPageLocators = {
        loginField:() => pageFixture.page.locator(getResource('loginField').selectorValue),
        passwordField:() => pageFixture.page.locator(getResource('passwordField').selectorValue),
        loginBtn:() => pageFixture.page.locator("//button[@type='submit']"),
        getBody:() => pageFixture.page.locator("//li[@class='oxd-userdropdown']"),
        adminTab:() => pageFixture.page.locator(getResource('adminTab').selectorValue)
    }

    constructor(public page: Page){
        this.page = page;
    }

    public async loginUser(username: string, password: string):Promise<void> {
       await this.loginPageLocators.loginField().type(username)
       await this.loginPageLocators.passwordField().type(password)
       this.loginPageLocators.loginBtn().click()
       
    }

    public async assertUserLogin():Promise<void> {
        await expect(this.loginPageLocators.getBody()).toBeAttached()
        
    }



}