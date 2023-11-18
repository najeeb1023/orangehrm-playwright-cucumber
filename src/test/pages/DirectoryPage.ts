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
        assertUserJobTitle:() => pageFixture.page.locator(getResource('assertUserJobTitle').selectorValue),
        searchBtn:() => pageFixture.page.locator(getResource('searchBtn').selectorValue)
    }


    public async goToDirectoryTab():Promise<void>{
        await this.directoryPageLocators.directoryTab().click();
    }

    public async selectJob(jobTitle: string):Promise<void>{
        await this.directoryPageLocators.jobTitleDropDown().first().type(jobTitle);
        await this.directoryPageLocators.getJobList().getByText(jobTitle).click();
        await this.directoryPageLocators.searchBtn().click();
    }

    public async assertSelectedTitle(assertJobTitle: string):Promise<void>{
        await pageFixture.page.waitForTimeout(1500);
        const countUsersWithTitles = await this.directoryPageLocators.assertUserJobTitle().count();
        console.log("• Number of '"+assertJobTitle+"' found: " + countUsersWithTitles);
        for(let i=1;i<=countUsersWithTitles;i++){
            await pageFixture.page.waitForTimeout(1500);
            const checkTitles = pageFixture.page.locator("//div[1]//p[@class='oxd-text oxd-text--p orangehrm-directory-card-subtitle --break-words']").first();
            await expect(checkTitles).toContainText(assertJobTitle);
            
        }
            const printAllUsersFound = await pageFixture.page.locator("//div[1]//p[@class='oxd-text oxd-text--p orangehrm-directory-card-subtitle --break-words']").first().textContent();
            const usersNameReturned = await pageFixture.page.locator("//p[@class='oxd-text oxd-text--p orangehrm-directory-card-header --break-words']").first().textContent();
            process.stdout.write("First user returned is: " + `${usersNameReturned}` + "|");
            process.stdout.write("\n" + "with job title -> " + `${printAllUsersFound}` + "  |");
            console.log("\n")
    }
    constructor(public page: Page){
        pageFixture.page = page;
    }
}