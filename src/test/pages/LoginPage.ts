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
        adminTab:() => pageFixture.page.locator(getResource('adminTab').selectorValue),
        invalidLoginMessage:() => pageFixture.page.locator(getResource('invalidLoginMessage').selectorValue)
    }
    constructor(public page: Page){
        pageFixture.page = page;
    }
    public async loginUser(username: string, password: string):Promise<void> {
       await this.loginPageLocators.loginField().type(username);
       await this.loginPageLocators.passwordField().type(password);
       await this.loginPageLocators.loginBtn().click();
       
    }

    public async doesNotLoginUser(username: string, password: string):Promise<void> {
        await this.loginPageLocators.loginField().type(username);
        await this.loginPageLocators.passwordField().type(password);
        await this.loginPageLocators.loginBtn().click();
     }

     public async assertUserNotLoggedIn():Promise<void>{
        await expect(this.loginPageLocators.invalidLoginMessage()).toHaveText('Invalid credentials');
     }

    public async assertUserLogin():Promise<void> {
        await expect(this.loginPageLocators.getBody()).toBeAttached();
    }
}