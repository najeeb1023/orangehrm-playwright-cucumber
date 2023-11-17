import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import * as directoryPageLocators from "../resources/DirectoryPageLocators.json"
import { PageElement } from "../resources/interfaces/iPageElement";

    function getResource(resourceName){
        return directoryPageLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }


export class Directory{

    directoryPageLocators = {
        directoryTab:() => pageFixture.page.locator(getResource('directoryTab').selectorValue),
        getJobList:() => pageFixture.page.locator(getResource('getJobList').selectorValue),
        jobTitleDropDown:() => pageFixture.page.locator(getResource('jobTitleDropDown').selectorValue),
        assertUserJobTitle:() => pageFixture.page.locator(getResource('assertUserJobTitle').selectorValue)
    }


    public async goToDirectoryTab():Promise<void>{
        await this.directoryPageLocators.directoryTab().click();
    }

    public async selectJob(jobTitle: string):Promise<void>{
        await this.directoryPageLocators.jobTitleDropDown().first().type(jobTitle);
        const jobList = await this.directoryPageLocators.getJobList().first().textContent();
        process.stdout.write(jobList);
    }

    public async assertSelectedTitle(assertJobTitle: string):Promise<void>{
        const countUsersWithTitles = await this.directoryPageLocators.assertUserJobTitle().count();
        console.log("• Number of '"+assertJobTitle+"' found: " + countUsersWithTitles);
        await pageFixture.page.waitForTimeout(1500);
        for(let i=1;i<=countUsersWithTitles;i++){
            const checkTitles = await pageFixture.page.locator("//div[@class='oxd-grid-item oxd-grid-item--gutters']//p[@class='oxd-text oxd-text--p orangehrm-directory-card-subtitle --break-words'][1]").first();
            await expect(checkTitles).toContainText(assertJobTitle);
        }
    }


    constructor(public page: Page){
        pageFixture.page = page;
    }
}