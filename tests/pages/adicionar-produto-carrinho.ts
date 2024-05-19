
import { expect, Locator, Page } from "playwright/test";

export class AdicionarProduto{
    page: Page;

constructor(page: Page){
    this.page = page;
}

async adicionarProduto(){
    const adicionarCarrinho = await this.page.locator('[class="actions"]').locator('text="Add to Cart"').first();
    await adicionarCarrinho.click();
}
  
}