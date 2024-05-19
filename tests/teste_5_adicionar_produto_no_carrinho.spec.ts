import { test, expect} from '@playwright/test';
import { HomePage } from "./pages/home-page";

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo();
});


test.describe("Teste 5", () => {
    test("Adicionar produto no carrinho", async  ({ page }) => {
        const homePage = new HomePage(page);

        homePage.escolhendoItemFusionBackpac();

        homePage.verificarItemNoCarrinho("Fusion Backpack");

    })
}) 
