import { Given, Then, When } from "@cucumber/cucumber"
import {chromium, Page, Browser} from "@playwright/test"
import { Login } from "../pages/LoginPage";

let browser: Browser;
let page: Page;




Given('the user lands at the webpage and logs in', async function () {
  browser = await chromium.launch({headless: false});
  page = await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

When('User goes to the website and enters {string} and {string}', async function (username: string, password: string) {
  let login = new Login(page)
  login.loginUser(username, password)
});

Then('The user is logged in', async function () {
    let login = new Login(page)
    login.assertIfUserWasLoggedIn()

});