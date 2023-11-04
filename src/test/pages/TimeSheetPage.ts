import { Page } from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture"
import * as timeSheetLocators from "../resources/TimeSheetLocators.json"
import { PageElement } from "../resources/interfaces/iPageElement"

function getResource(resourceName: string){
    return timeSheetLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
}

export class TimeSheet{
    
    

    timeSheetLocators = {
        timeSheetIcon:() => pageFixture.page.locator(getResource('timeSheetIcon').selectorValue)
    }

    public async goToTimeSheetAndEnterUser():Promise<void>{
        await this.timeSheetLocators.timeSheetIcon().click()
    }

    constructor(public page: Page){
        pageFixture.page = page;
    }

}