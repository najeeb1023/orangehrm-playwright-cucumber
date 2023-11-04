import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber"
import {chromium, Page, Browser} from "@playwright/test"
import { Login } from "../pages/LoginPage";
import { AdminPage } from "../pages/AdminPage";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(15000);

Given('the user lands at the webpage.', async function () {
  
  await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  });

When('User goes to the website and enters {string} and {string}.', async function (username: string, password: string) {
  let loginUserFunc = new Login(pageFixture.page);
  await loginUserFunc.loginUser(username, password);
});

Then('The user is logged in.', async function () {
  let loginUserFunc = new Login(pageFixture.page);
  await loginUserFunc.assertUserLogin();
});