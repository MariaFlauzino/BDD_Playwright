import { Given, Then, When } from "@cucumber/cucumber"
import { HomePage } from "../pages/home-page";
import { pageFixture } from "../support/pageFixture";

Given('o usuário acessa o site Luma',{timeout: 60 * 1000}, async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goTo();
});


When('visualiza algumas paginas', async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goToLoginAnAccount();
    await homePage.goToLoginAnAccount();
});

Then('usuário consiguirá navegar na pagina com sucesso', async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goTo();
    await homePage.verificandoSite();
});
