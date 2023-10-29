import { After, AfterAll, Before, BeforeAll, BeforeStep, AfterStep } from "@cucumber/cucumber";
import { Browser, chromium, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";


let browser: Browser;
let context: BrowserContext;

BeforeAll(async function (){
    browser = await chromium.launch({headless: true, slowMo: 1000});
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;

    
    
    
    
})

Before(async function(){
    await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   
})

After(async function (){


    
})

AfterAll(async function (){
    await pageFixture.page.waitForTimeout(3000);
    // await this.attach(img, "img/png");
    await pageFixture.page.close();
    await context.close();
    
    await browser.close();
})