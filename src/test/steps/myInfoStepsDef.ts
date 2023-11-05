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

Then('User type a nickname',async function () {
    let nick = new InfoPage(pageFixture.page)
    await nick.nickName();
})

Then('User type a other id',async function() {
    let otherId = new InfoPage(pageFixture.page)
    await otherId.otherId();
    
})
Then('User insert a driver liecence number',async function() {
    let DriverLNN = new InfoPage(pageFixture.page)
    await DriverLNN.driverLN();
})
Then('User insert a SSN number',async function() {
    let ssNu = new InfoPage(pageFixture.page)
    await ssNu.ssNumber();
    
})
Then ('User insert a SIN number',async function () {
    let ssinNu = new InfoPage(pageFixture.page)
    await ssinNu.ssinNumber();
    
})

    

