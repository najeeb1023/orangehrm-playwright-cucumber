import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber"
import { AdminPage } from "../pages/AdminPage"
import { Browser, Page, chromium, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { Login } from "../pages/LoginPage";

setDefaultTimeout(15000)


Given ('The user lands at the webpage', async function () {
    //await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})

Given('User navigates to Admin Tab', async function (){
    let loginUserFunc = new AdminPage(pageFixture.page);
    await loginUserFunc.goToAdminTab();
})

When('User is able to select role.', async function () {
    let userDetails = new AdminPage(pageFixture.page);
    await userDetails.enterUserDetails();
})

Then('User is able to search by {int} Admin role', async function (numberOfCheckboxes: number){
    let userDetails = new AdminPage(pageFixture.page);
    await userDetails.getAdmins(numberOfCheckboxes)
})