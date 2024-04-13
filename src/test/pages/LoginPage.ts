import { Page, expect } from "@playwright/test";
import { PageElement } from "../resources/interfaces/iPageElement";
import * as loginPageResources from "../resources/LoginPageLocators.json"
import { pageFixture } from "../hooks/pageFixture";
import { AdminPage } from "./AdminPage";

 function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
 }
export class Login extends AdminPage {

    loginPageLocators = {
        loginField:() => pageFixture.page.locator(getResource('loginField').selectorValue),
        passwordField:() => pageFixture.page.locator(getResource('passwordField').selectorValue),
        loginBtn:() => pageFixture.page.locator("//button[@type='submit']"),
        getBody:() => pageFixture.page.locator("//li[@class='oxd-userdropdown']"),
        adminTab:() => pageFixture.page.locator(getResource('adminTab').selectorValue),
        invalidLoginMessage:() => pageFixture.page.locator(getResource('invalidLoginMessage').selectorValue),
        languageSelection:() => pageFixture.page.locator(getResource('languageSelection').selectorValue),
        submitSaveLang:() => pageFixture.page.locator(getResource('submitSaveLang').selectorValue)
    }

    public async loginUser(username: string, password: string):Promise<void> {
       await this.loginPageLocators.loginField().fill(username);
       await this.loginPageLocators.passwordField().fill(password);
       await this.loginPageLocators.loginBtn().click();
       await this.adminPageLocators.adminTab().click();
       
    }

    public async changeLanguage(changeLanguage: string):Promise<void> {
        await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/localization');
        await this.loginPageLocators.languageSelection().click();
        await pageFixture.page.keyboard.fill(changeLanguage);
        await pageFixture.page.keyboard.press('Escape');
        await this.loginPageLocators.submitSaveLang().click();
    }

    public async doesNotLoginUser(username: string, password: string):Promise<void> {
        await this.loginPageLocators.loginField().fill(username);
        await this.loginPageLocators.passwordField().fill(password);
        await this.loginPageLocators.loginBtn().click();
     }

     public async assertUserNotLoggedIn():Promise<void>{
        await expect(this.loginPageLocators.invalidLoginMessage()).toHaveText('Invalid credentials');
     }

    public async assertUserLogin():Promise<void> {
        await expect(this.loginPageLocators.getBody()).toBeAttached();
    }
}