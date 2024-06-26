import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import * as timeSheetLocators from "../resources/TimeSheetLocators.json";

import { PageElement } from "../resources/interfaces/iPageElement"

function getResource(resourceName: string){
    return timeSheetLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
}

export class TimeSheet{
    
    el: string[];
    

    timeSheetLocators = {
        timeSheetIcon:() => pageFixture.page.locator(getResource('timeSheetIcon').selectorValue),
        employeeName:() => pageFixture.page.locator(getResource('employeeName').selectorValue),
        viewEmplyee:() => pageFixture.page.locator(getResource('viewEmployeeButton').selectorValue),
        userTimePeriod:() => pageFixture.page.locator(getResource('userTimePeriod').selectorValue),
        getUsersFromDropDown:() => pageFixture.page.locator(getResource('usersDropDown').selectorValue),
        getCount:() => pageFixture.page.locator(getResource('getDropDownCount').selectorValue),
        assertUserTime:() => pageFixture.page.locator(getResource('assertUserHeader').selectorValue)
    };
   

    public async goToTimeSheetAndEnterUser():Promise<void>{
        await this.timeSheetLocators.timeSheetIcon().click();
    };

    public async getUsers():Promise<void>{

        await this.timeSheetLocators.employeeName().type('Orange Test')
        const numberOfUsers = await this.timeSheetLocators.getCount().count();
        console.log("Number of users found: " + numberOfUsers);
        await pageFixture.page.waitForTimeout(3000);
        for(let i=1;i<=numberOfUsers;i++){
            const el = pageFixture.page.locator(getResource('usersDropDown').selectorValue.replace('placeHolder', i.toString()));
            await el.first().click();
        };
        await this.timeSheetLocators.viewEmplyee().click();
    };

    public async getEmployeeTimePeriod():Promise<any>{
     await expect(pageFixture.page.locator(getResource('getTable').selectorValue)).toContainText('Timesheet Period');
     let tablePrint = await pageFixture.page.locator(getResource('userTimePeriod').selectorValue).allTextContents();
     const tableOutput = [tablePrint];
     process.stdout.write(("    ") + `${tableOutput}` + ("\n"));
     
    };

    public async getUsersTable():Promise<any>{
        await expect(pageFixture.page.locator(getResource('getUsersTable').selectorValue)).toContainText('Employee Name');
        let userPrint = await pageFixture.page.locator(getResource('userName').selectorValue).allInnerTexts();
        const userTable = [userPrint];
        process.stdout.write(("    ") + `${userTable}\n` + ("\n"));
    };

    constructor(public page: Page){
        pageFixture.page = page;
    };
};