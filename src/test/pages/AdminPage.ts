import { Page, expect } from "@playwright/test";
import * as adminPageLocators from "../resources/AdminPageLocators.json"
import { PageElement } from "../resources/interfaces/iPageElement";

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
        await this.adminPageLocators.adminTab().click()
        
}

  /*  public async assertAdminTabNavigation():Promise<void>{
        
        await expect(this.adminPageLocators.addBtn()).toBeAttached()
    }
*/

}