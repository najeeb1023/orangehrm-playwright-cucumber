import { Given, Then, When } from "@cucumber/cucumber"
import {chromium, Page, Browser} from "@playwright/test"
import { Login } from "../pages/LoginPage";
import { AdminPage } from "../pages/AdminPage";
import { pageFixture } from "../hooks/pageFixture";

Given('the user lands at the webpage.', async ()=> {
  
  
  });

When('User goes to the website and enters {string} and {string}.', async (username: string, password: string)=> {
  let loginUserFunc = new Login(pageFixture.page)
  await loginUserFunc.loginUser(username, password)

});

Then('The user is logged in.', async () => {
  let loginUserFunc = new Login(pageFixture.page)
  await loginUserFunc.assertUserLogin()
});