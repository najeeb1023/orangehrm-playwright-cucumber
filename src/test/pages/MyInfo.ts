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
        nickTextfield:()=>pageFixture.page.locator(getResource('employeenickname').selectorValue),
        otherId:()=>pageFixture.page.locator(getResource('otherid').selectorValue),
        DriverLiecenceField:()=>pageFixture.page.locator(getResource('Driverlicencenumber').selectorValue),
        ssNumberField:()=>pageFixture.page.locator(getResource('ssn').selectorValue),
        sinNumberField:()=>pageFixture.page.locator(getResource('sinnumber').selectorValue),
        militaryField:()=>pageFixture.page.locator(getResource('militaryservice').selectorValue),
        smokerField:()=>pageFixture.page.locator(getResource('smoker').selectorValue),
        Btnsave:()=> pageFixture.page.locator(getResource('Save button').selectorValue),
        
    }

constructor(public page : Page){
    pageFixture.page = page;
}
public async goToInfo():Promise<void>{
    await this.infoPageLocators.infoTab().click();
}
public async nickName():Promise<void>{
    await this.infoPageLocators.nickTextfield().type('john');
}

public async otherId():Promise<void>{
    await this.infoPageLocators.otherId().type('45678');
}
public async driverLN():Promise<void>{
    await this.infoPageLocators.DriverLiecenceField().type('789045');
}

public async ssNumber() :Promise<void>{
    await this.infoPageLocators.ssNumberField().type('789344');
}   

public async ssinNumber() : Promise<void>{
    await this.infoPageLocators.sinNumberField().type('567789');
}  
public async militarySer() : Promise<void>{
    await this.infoPageLocators.militaryField().type('no');
} 
public async smokeS (): Promise<void>{
    await this.infoPageLocators.smokerField().click();
}
public async ButtonS () : Promise<void>{
    await this.infoPageLocators.Btnsave().click();
}
}
