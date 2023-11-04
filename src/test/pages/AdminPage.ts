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
        tableColumn:() => pageFixture.page.locator(getResource('tableColumn').selectorValue),
        userAdminAssert:() => pageFixture.page.locator(getResource('userAdminAssert').selectorValue),
        tableCardComplete:() => pageFixture.page.locator(getResource('tableCardComplete').selectorValue),
        
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
        await expect(this.adminPageLocators.roleDropDown()).toBeVisible();
        await el.getByText('Admin').click();
        await this.adminPageLocators.searchBtnAdmin().click();
    
    }
    public async enterUserDetailsEss():Promise<void>{
        const el = this.adminPageLocators.roleDropDown().first();
        await el.click();
        await expect(this.adminPageLocators.roleDropDown()).toBeVisible();
        await el.getByText('ESS').click();
        await this.adminPageLocators.searchBtnAdmin().click();
    }
    public async getAdmins():Promise<any>{
        let numberOfCards = await this.adminPageLocators.tableCardComplete().count();
        for(let j=0;j<=numberOfCards;j++){
            console.log(numberOfCards);
        }
        let numberOfCheckboxes: number
        for(let i=1;i<=numberOfCheckboxes;i++){

            const column = this.adminPageLocators.tableColumn();
            console.log('Number of columns', await column.count());
            const assertLog = await expect(column).toContainText('User Role');
            const rows = this.adminPageLocators.tableCardData();
            console.log('Number of rows', await rows.count());
            const assertUser = await expect(rows).toContainText('Admin');
    }
    }
    public async getESS():Promise<any>{
        let numberOfRows = await this.adminPageLocators.tableCardComplete().count();
        await expect(pageFixture.page.locator('//div[@class="oxd-table-header"][1]/div/div[3]')).toContainText('User Role');
         for(let i=1;i<=numberOfRows;i++){
            const el = pageFixture.page.locator(getResource('userRoleLocator').selectorValue.replace("placeHolder",i.toString()))
            await expect(el).toContainText('ESS');
            const text = await el.textContent();
            console.log(text)
    }
    }

}