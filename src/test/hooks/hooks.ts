import { After, AfterAll, Before, BeforeAll, BeforeStep, AfterStep } from "@cucumber/cucumber";
import { Browser, chromium, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function (){
    browser = await chromium.launch({headless: true, slowMo: 1000});
    
})

Before(async function(){
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
})

After(async function (){


    await pageFixture.page.waitForTimeout(3000);
    // await this.attach(img, "img/png");
    await pageFixture.page.close();
    await context.close();
})

AfterAll(async function (){
    
    await browser.close();
})