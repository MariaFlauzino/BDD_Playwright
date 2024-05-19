import { test } from "@playwright/test";
import { HomePage } from "./pages/home-page";

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo();
});

test('Verificar se o site foi aberto com sucesso',  async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verificandoSite();
});