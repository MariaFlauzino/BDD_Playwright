import { expect, Locator, Page } from "playwright/test";

export class AnaliseProduto {
    page: Page;
    msg:Locator;

    constructor(page: Page){
        this.page = page;
        this.msg = this.page.locator('css=#maincontent > div.columns > div.column.main > div.message.info.empty');
    }

    async verificarAnaliseProdutos(){
        await expect(this.msg.getByText('You have submitted no reviews.', { exact: true })).toBeVisible();
        await this.page.getByRole('heading', { name: 'My Product Reviews' }).locator('span');
    };

};