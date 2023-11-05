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
        tableRows:() => pageFixture.page.locator(getResource('tableCardComplete').selectorValue),
        getTable:() => pageFixture.page.locator(getResource('getTable').selectorValue),
        userTimePeriod:() => pageFixture.page.locator(getResource('userTimePeriod').selectorValue)
    }

    public async goToTimeSheetAndEnterUser():Promise<void>{
        await this.timeSheetLocators.timeSheetIcon().click();
    }

    public async searchEmployee():Promise<any>{
     let numberOfRows = await this.timeSheetLocators.tableRows().count();
     await expect(this.timeSheetLocators.getTable()).toContainText('Timesheet Period');
     for(let i=1;i<=numberOfRows;i++){
        let tablePrint = await expect(this.timeSheetLocators.userTimePeriod().textContent())
        const tableOutput = [tablePrint]
        console.log(tableOutput)
        
     }
    }

    constructor(public page: Page){
        pageFixture.page = page;
    }

}