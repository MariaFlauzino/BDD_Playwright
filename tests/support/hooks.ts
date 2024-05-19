import { After, AfterAll, AfterStep, Before, BeforeAll, BeforeStep, Status } from "@cucumber/cucumber"
import { Browser, BrowserContext, chromium, Page } from "playwright/test";
import { pageFixture } from "../support/pageFixture";
import { getEnv } from "./env";

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async function () {
    getEnv();
    browser = await chromium.launch({ headless: true});
});

Before(async function () {
    context = await browser.newContext();
    page = await context.newPage();
    pageFixture.page = page;
} );

BeforeStep(async function () {
    
});

AfterStep(async function () {
    
});

After(async function ({ pickle, result }) {
    if (result?.status == Status.FAILED){

        const img = await page.screenshot({
            path: './test-results/schreenshots/' + pickle.name + pickle.id + '.png',
            type: 'png'
        });
        this.attach(img, 'image/png')
    }
    await page.close();
    await context.close();
});

AfterAll(async function () {
    await browser.close()
});

