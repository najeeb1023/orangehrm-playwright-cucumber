import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import * as timeSheetLocators from "../resources/TimeSheetLocators.json";
import * as adminPageLocators from "../resources/AdminPageLocators.json";

import { PageElement } from "../resources/interfaces/iPageElement"

function getResource(resourceName: string){
    return timeSheetLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
}

export class TimeSheet{
    
    

    timeSheetLocators = {
        timeSheetIcon:() => pageFixture.page.locator(getResource('timeSheetIcon').selectorValue),
        employeeName:() => pageFixture.page.locator(getResource('employeeName').selectorValue),
        viewEmplyee:() => pageFixture.page.locator(getResource('viewEmployeeButton').selectorValue),
        userTimePeriod:() => pageFixture.page.locator(getResource('userTimePeriod').selectorValue)
    }

    public async goToTimeSheetAndEnterUser():Promise<void>{
        await this.timeSheetLocators.timeSheetIcon().click();
    }

    public async getEmployeeTimePeriod():Promise<any>{
     let numberOfRows = await pageFixture.page.locator(getResource('tableCardComplete').selectorValue)
     await expect(pageFixture.page.locator(getResource('getTable').selectorValue)).toContainText('Timesheet Period')
     for(let i=1;i<=await numberOfRows.count();i++){
        let tablePrint = await pageFixture.page.locator(getResource('userTimePeriod').selectorValue).allTextContents();
        console.log(tablePrint);
     }
    }

    constructor(public page: Page){
        pageFixture.page = page;
    }

}