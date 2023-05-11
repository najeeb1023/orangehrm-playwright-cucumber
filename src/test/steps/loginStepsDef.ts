import { Given, Then, When } from "@cucumber/cucumber"
import {chromium, Page, Browser} from "@playwright/test"

let browser: Browser;
let page: Page;

Given('the user lands at the webpage and logs in', async function () {
  browser = await chromium.launch({headless: false});
  page = await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

When('User goes to the website and enters "<ID>" and "<PASSWORD>', async function () {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

Then('The user is logged in', async function () {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

});