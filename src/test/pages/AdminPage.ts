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
        pimTab:() => this.page.locator(getResource('pimTab').selectorValue),
        buzzTab:() => pageFixture.page.locator(getResource('buzzTab').selectorValue)
    }


    constructor(public page: Page){
        this.page = page;
    }


    

    public async goToAdminTab():Promise<void>{
        

        let buzz = this.adminPageLocators.buzzTab()
        await pageFixture.page.reload()
        await buzz.click()

        //await pageFixture.page.waitForTimeout(6000)
        //await this.adminPageLocators.buzzTab().click()

        /*
        console.log('Works till here goToAdmin')
        await pageFixture.page.waitForTimeout(5000);
        await this.adminPageLocators.adminTab().click()
        */
        
        
}

  /*  public async assertAdminTabNavigation():Promise<void>{
        
        await expect(this.adminPageLocators.addBtn()).toBeAttached()
    }
*/

}