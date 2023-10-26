import { Page, expect } from "@playwright/test";
import * as adminPageLocators from "../resources/AdminPageLocators.json"
import { PageElement } from "../resources/interfaces/iPageElement";
import { pageFixture } from "../hooks/pageFixture";

function getResource(resourceName: string) {
    return adminPageLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
 }

export class AdminPage {

    adminPageLocators = {
        adminTab:() => this.page.locator(getResource('adminTab').selectorValue),
        addBtn:() => this.page.locator(getResource('addBtn').selectorValue),
        pimTab:() => this.page.locator(getResource('pimTab').selectorValue)
    }


    constructor(public page: Page){
        this.page = page;
    }


    

    public async goToAdminTab():Promise<void>{
        
        console.log('Works till here goToAdmin')
        await pageFixture.page.goto('www.facebook.com')
        await this.adminPageLocators.adminTab().click()
        await pageFixture.page.waitForTimeout(3000);
        
        
}

  /*  public async assertAdminTabNavigation():Promise<void>{
        
        await expect(this.adminPageLocators.addBtn()).toBeAttached()
    }
*/

}