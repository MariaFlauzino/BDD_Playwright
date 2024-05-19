
import { expect, Locator, Page } from "playwright/test";

export class FazerCheckOut{
    page: Page;

constructor(page: Page){
    this.page = page;
}

async fazerCheckOut(){
    const CheckoutButton = await this.page.locator('[class="action primary checkout"]').locator('text="Proceed to Checkout"').first();
    await CheckoutButton.click();
}
  
}