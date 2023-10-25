import { After, AfterAll, Before, BeforeAll, BeforeStep, AfterStep } from "@cucumber/cucumber";
import { Browser, chromium, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function (){
    browser = await chromium.launch({headless: false, slowMo: 1000});
})

Before(async function(){
    context = await browser.newContext();
    const page = await browser.newPage();
    pageFixture.page = page;
})

After(async function (){
    const img = await pageFixture.page.screenshot({path: ".test-result/screenshots/", type: "png"})

    await pageFixture.page.waitForTimeout(3000)
    await pageFixture.page.close();
    await browser.close();
})

AfterAll(async function (){
    
    await browser.close();
})