import {Given,When,Then,setDefaultTimeout} from "@cucumber/cucumber"
import { InfoPage } from "../pages/MyInfo"
import { Browser,Page,chromium,expect } from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture"
import { Login } from "../pages/LoginPage"

setDefaultTimeout(30000);

Given('the user lands at the webpage',async function() {
    await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
})

Then('User click the info tab',async function() {
    let infoPage = new InfoPage(pageFixture.page)
    await infoPage.goToInfo();
    
})