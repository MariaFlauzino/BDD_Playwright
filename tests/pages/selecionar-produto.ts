import { expect, Locator, Page } from "playwright/test";

const produto = 'bag';

export class SelecionarProduto{
    page: Page;
    productsResult: Locator;

constructor(page: Page){
    this.page = page;
    this.productsResult = page.locator("css=div.search.results > div.products.wrapper.grid.products-grid > ol > li> div");
}

async selecionarProduto(){
    const SelProduto = await this.page.locator('text="Push It Messenger Bag"');
    await SelProduto.click();}


async selecionarProdutoPorNome(produto: string){
    const SelProduto = await this.productsResult.locator(`text=${produto}`);
    await SelProduto.click();}

}



