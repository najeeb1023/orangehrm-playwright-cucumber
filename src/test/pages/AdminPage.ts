import { Page, expect } from "@playwright/test";
import * as adminPageLocators from "../resources/AdminPageLocators.json"
import { PageElement } from "../resources/interfaces/iPageElement";
import { pageFixture } from "../hooks/pageFixture";

function getResource(resourceName: string) {
    return adminPageLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
 }

export class AdminPage {

    adminPageLocators = {
        adminTab:() => pageFixture.page.locator(getResource('adminTab').selectorValue),
        addBtn:() => pageFixture.page.locator(getResource('addBtn').selectorValue),
        pimTab:() => pageFixture.page.locator(getResource('pimTab').selectorValue),
        buzzTab:() => pageFixture.page.locator(getResource('buzzTab').selectorValue),
        userField:() => pageFixture.page.locator(getResource('userField').selectorValue),
        roleDropDown:() => pageFixture.page.locator(getResource('roleDropDown').selectorValue),
        searchBtnAdmin:() => pageFixture.page.locator(getResource('searchBtnAdmin').selectorValue),
        sysAdminTable:() => pageFixture.page.locator(getResource('systemUserTable').selectorValue),
        tableCardData:() => pageFixture.page.locator(getResource('tableCard').selectorValue),
        
    }


    constructor(public page: Page){
        pageFixture.page = page;
    }


    

    public async goToAdminTab():Promise<void>{
    
        await this.adminPageLocators.adminTab().click();
               
    }

    public async enterUserDetails():Promise<void>{
        
        
        const el = this.adminPageLocators.roleDropDown().first();
        await el.click();
        await expect(this.adminPageLocators.roleDropDown()).toBeVisible()
        await el.getByText('Admin').click();
        await this.adminPageLocators.searchBtnAdmin().click()
        

        
        
    }

    public async getAdmins(numberOfCheckboxes: number):Promise<void>{
        for(let i=1;i<=numberOfCheckboxes;i++){
            const rows = this.adminPageLocators.tableCardData()
            console.log('Number of columns', await rows.allTextContents())
    }
    }



}