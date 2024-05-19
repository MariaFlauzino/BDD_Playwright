import { expect, Locator, Page } from "playwright/test";

const produto = 'bag';

export class PaginaDeBusca{
    page: Page;

constructor(page: Page){
    this.page = page;
}

async verificarProdutoBuscado(produto: string){
    await expect(this.page.locator('[data-ui-id="page-title-wrapper"]')).toContainText('Search results for: \'' + produto + '\'');
}

}
