import { expect, Locator, Page } from "playwright/test";


export class MenuPage{
    page: Page;
    pageTitle: Locator;


    constructor(page: Page){
        this.page = page;
        this.pageTitle = this.page.locator('.page-title-wrapper');

    }

    async clickOnmenuOption(){
        await this.page.getByRole('menuitem', { name: ' Women' }).click();
    }

    async verifyMenu(options: string){
        const pageTitle = await this.pageTitle.textContent();
        await expect(pageTitle).toContain(options);
    }
};