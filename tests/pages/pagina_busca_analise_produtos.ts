import { expect, Locator, Page } from "playwright/test";

const produto = 'bag';

export class PaginaAnaliseProdutos{
    page: Page;

constructor(page: Page){
    this.page = page;
}

async verificarAnaliseProdutos(){

    await expect(this.page.locator('[class="message info empty"]')).toContainText('You have submitted no reviews.');

}

}