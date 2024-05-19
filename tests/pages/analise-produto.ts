import { expect, Locator, Page } from "playwright/test";

export class AnaliseProduto {
    page: Page;
    pageTitle: Locator;
    msg:Locator;


    constructor(page: Page){
        this.page = page;
        this.pageTitle = this.page.locator('css=#maincontent > div.columns > div.column.main > div.page-title-wrapper > h1 > span');
        this.msg = this.page.locator('css=#maincontent > div.columns > div.column.main > div.message.info.empty');
    }

    async verificarAnaliseProdutos(){
        //await expect(this.pageTitle).toHaveText("My Product Reviews");
        //await expect(this.msg.getByText('You have submitted no reviews.', { exact: true })).toBeVisible();
        //await expect(this.msg).toContainText('You have submitted no reviews.');
        //await this.page.getByText('You have submitted no reviews.');
        await this.page.getByRole('heading', { name: 'My Product Reviews' }).locator('span');
    };

};