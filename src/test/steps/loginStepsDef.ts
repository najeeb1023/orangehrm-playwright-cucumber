import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber"
import {chromium, Page, Browser} from "@playwright/test"
import { Login } from "../pages/LoginPage";
import { AdminPage } from "../pages/AdminPage";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(15000);
let loginUserFunc = new Login(pageFixture.page);

Given('the user lands at the webpage.', async function () {
  
  await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  });

When('User goes to the website and enters {string} and {string}.', async function (username: string, password: string) {
  
  await loginUserFunc.loginUser(username, password);
});

When('User goes to the website and enters wrong {string} and {string}.', async function (username: string, password: string) {
  
  await loginUserFunc.doesNotLoginUser(username, password);
});

Then('The user is logged in.', async function () {
  
  await loginUserFunc.assertUserLogin();
});

Then('The user is not logged in.', async function () {
  
  await loginUserFunc.assertUserNotLoggedIn();
})