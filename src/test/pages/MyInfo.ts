import {Page,expect} from "@playwright/test"
import * as InfoPageLocators from "../resources/MyInfoLocators.json"
import { PageElement } from "../resources/interfaces/iPageElement"
import { pageFixture } from "../hooks/pageFixture"

function getResource ( resourceName : string ) {
    return InfoPageLocators.webElements.find((element : PageElement) => element.elementName == resourceName) as PageElement

}

export class InfoPage{

    infoPageLocators = {
        infoTab:() => pageFixture.page.locator(getResource('infotab').selectorValue),

    }

constructor(public page : Page){
    pageFixture.page = page;
}
public async goToInfo():Promise<void>{
    await this.infoPageLocators.infoTab().click();
}

}