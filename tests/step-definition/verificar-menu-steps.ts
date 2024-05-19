import { Given, Then, When } from "@cucumber/cucumber"
import { HomePage } from "../pages/home-page";
import { pageFixture } from "../support/pageFixture";
import { expect } from "playwright/test";


When('o usuário navega no menu {string}',{timeout: 60 * 1000}, async function (menu) {
    const homePage = new HomePage(pageFixture.page);
    homePage.clickOnmenuOption();
})


Then('deverá visualizar as seguintes {string}',{timeout: 60 * 1000}, async function (options) {
    const homePage = new HomePage(pageFixture.page);
    homePage.verifyMenu(options);
});
      
