
import { expect, Locator, Page } from "playwright/test";

export class VerificarCarrinho{
    page: Page;
    produtoCarrinho :Locator;

constructor(page: Page){
    this.page = page;
    this.produtoCarrinho = page.locator('[class="product-item-name"]');
}

async verificarCarrinho(){
    const shoppingCart = await this.page.getByRole('link', { name: 'shopping cart' });
    await shoppingCart.click();
    await expect(this.page.locator('[class="product-item-name"]')).toContainText('Push It Messenger Bag');
}

async verificarCarrinhoPorPoduto(produto: string){
    const shoppingCart = await this.page.getByRole('link', { name: 'shopping cart' });
    await shoppingCart.click();
    await expect(this.produtoCarrinho.first()).toContainText(produto);
}
  
}