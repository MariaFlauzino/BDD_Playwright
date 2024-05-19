import { test, expect} from '@playwright/test';
import { HomePage } from "./pages/home-page";
import {PaginaDeBusca} from "./pages/página_busca_produto"

const produto = 'bag'

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo();
});

test.describe("Teste 4", () => {
    test("Fazer busca por produto", async ({ page }) =>  {
        const homePage = new HomePage(page);
        const busca = new PaginaDeBusca(page);

        await homePage.preenchendoBusca(produto);

        await busca.verificarProdutoBuscado(produto);
    })
}) 