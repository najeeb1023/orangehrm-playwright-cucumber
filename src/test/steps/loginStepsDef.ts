import { Given, Then, When } from "@cucumber/cucumber"
import {chromium, Page, Browser} from "@playwright/test"
import { Login } from "../pages/LoginPage";
import { AdminPage } from "../pages/AdminPage";

let browser: Browser;
let page: Page;




Given('the user lands at the webpage', async function () {
  browser = await chromium.launch({headless: true});
  page = await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

When('User goes to the website and enters {string} and {string}', async function (username: string, password: string) {
  let loginUserFunc = new Login(page)
  await loginUserFunc.loginUser(username, password)

});

Then('The user is logged in', async function () {
  let loginUserFunc = new Login(page)
   await loginUserFunc.assertUserLogin()
   console.log('1st Scenario Running Successfully!')
});