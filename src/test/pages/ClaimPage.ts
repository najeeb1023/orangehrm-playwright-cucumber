import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import * as claimPageLocators from "../resources/ClaimPageLocators.json";
import { PageElement } from "../resources/interfaces/iPageElement";

function getResource(resourceName: string){
    return claimPageLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement

}

export class Claim {

    

    claimPageLocators = {
        statusDropDown:() => pageFixture.page.locator(getResource('statusDropDown').selectorValue),
        claimTabButton:() => pageFixture.page.locator(getResource('claimTab').selectorValue),
        submittedOption:() => pageFixture.page.locator(getResource('submittedButtonOption').selectorValue),
        submittedUsers:() => pageFixture.page.locator(getResource('numberOfRows').selectorValue),
        tableColumnStatus:() => pageFixture.page.locator(getResource('tableColumnStatus').selectorValue),
        submitButton:() => pageFixture.page.locator(getResource('submitButton').selectorValue),
        assertUserStatus:() => pageFixture.page.locator(getResource('assertUserStatus').selectorValue)

    }

    public async goToClaimTab():Promise<void>{
        await this.claimPageLocators.claimTabButton().click();
    }

    public async selectStatus():Promise<void>{
       await this.claimPageLocators.statusDropDown().click();
       await this.claimPageLocators.submittedOption().click();
       await this.claimPageLocators.submitButton().click();
    }

    public async assertSubmittedUsers():Promise<any>{
       let numberOfRows = await this.claimPageLocators.submittedUsers().count();
       console.log("Number of submitted users: " + numberOfRows);
       await expect(pageFixture.page.locator(getResource('tableColumnStatus').selectorValue)).toContainText('Status');
       for(let i=1;i<=numberOfRows;i++){
        const el = pageFixture.page.locator(getResource('assertUserStatus').selectorValue.replace('placeHolder', i.toString()));
        await expect(el).toContainText('Submitted');
        const status = await el.textContent();
        const statusOutput = [status];
        process.stdout.write(`${statusOutput}`) + '|';
       }
    }

    constructor(public page: Page){
        pageFixture.page = page;
    }
    



}