import { Then, When } from "@cucumber/cucumber"
import { pageFixture } from "../support/pageFixture";
import { MenuPage } from "../pages/menu";

When('o usuário navega no menu {string}',{timeout: 60 * 1000}, async function (menu) {
    const menuPage = new MenuPage(pageFixture.page);
    await menuPage.clickOnmenuOption();
})


Then('deverá visualizar as seguintes {string}',{timeout: 60 * 1000}, async function (options) {
    const menuPage = new MenuPage(pageFixture.page);
    await menuPage.verifyMenu(options);
});