import { Page } from "@playwright/test";
import * as loginPageResource from "../resources/LoginPageLocators.json"
import { PageElement } from "../resources/interfaces/iPageElement";

export class Login {
    public userNameField: PageElement;
    

    

    constructor(public page: Page){
        this.page = page;


    }

    public async loginUser(username: string, password: string):Promise<void> {
         
        this.userNameField = 
        
        
        
    }

}