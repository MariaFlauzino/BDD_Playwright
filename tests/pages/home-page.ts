import { expect, Locator, Page } from "playwright/test";

const produto = 'bag';

export class HomePage{
    page: Page;
    signIn: Locator;
    createAnAccunt: Locator;
    hotSellers: Locator;
    trendingOn: Locator;
    newLumaYoga: Locator;
    banner: Locator;
    aboutUs: Locator;
    customerService: Locator;
    subscribe: Locator;
    copyright: Locator;
    search: Locator;
    menuOptions: Locator;
    pageTitle: Locator;
    contaButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.signIn = this.page.getByRole('link', { name: 'Sign In' });
        this.createAnAccunt = this.page.getByRole('link', { name: 'Create an Account' });
        this.hotSellers =  this.page.getByRole('heading', { name: 'Hot Sellers' });
        this.trendingOn = this.page.getByText('Here is what`s trending on');
        this.newLumaYoga = this.page.getByRole('link', { name: 'New Luma Yoga Collection Get' });
        this.banner = this.page.getByRole('banner').getByText('Welcome, João Silva!');
        this.aboutUs = this.page.getByRole('link', { name: 'About us' });
        this.customerService = this.page.getByRole('link', { name: 'Customer Service' });
        this.subscribe = this.page.getByLabel('Subscribe');
        this.copyright = this.page.getByText('Copyright © 2013-present');
        this.search = this.page.getByPlaceholder('Search entire store here...');
        this.menuOptions = this.page.getByTestId('ui-id-4');
        this.pageTitle = this.page.locator('.page-title-wrapper');
        this.contaButton = this.page.locator('[class="nav item"]');
    }

    async goTo(){
        const URL = String(process.env.BASE_URL);
        await this.page.goto(URL);
    }
    async goToCreateAnAccount(){
        await this.page.getByRole('link', { name: 'Create an Account' }).click();
    };

    async goToLoginAnAccount(){
        await this.page.getByRole('link', { name: 'Sign In' }).click();
    };

    async verificandoSite(){
        await expect(this.signIn).toContainText('Sign In');
        await expect(this.createAnAccunt).toContainText('Create an Account');
        await expect(this.hotSellers).toContainText('Hot Sellers');
        await expect(this.trendingOn).toContainText('Here is what`s trending on');
        await expect(this.newLumaYoga).toContainText('New Luma Yoga Collection')
        await expect(this.newLumaYoga).toContainText('Get fit and look fab in new seasonal styles');
    }

    async verificandoSiteUsuarioLogado(){
        await expect(this.banner).toContainText('Welcome, João Silva');
        await expect(this.hotSellers).toContainText('Hot Sellers');
        await expect(this.trendingOn).toContainText('Here is what`s trending on');
        await expect(this.newLumaYoga).toContainText('New Luma Yoga Collection')
        await expect(this.newLumaYoga).toContainText('Get fit and look fab in new seasonal styles');
    }

    async outrosCampos(){
        await expect(this.aboutUs).toContainText('About us');
        await expect(this.customerService).toContainText('Customer Service');
        await expect(this.subscribe).toContainText('Subscribe');
        await expect(this.copyright).toContainText('Copyright © 2013-present');
    }

    async preenchendoBusca(produto: string) {
        await expect(this.search).toBeEmpty;
        await this.search.fill(produto);
        await this.search.press('Enter');
    }

    async escolhendoItemFusionBackpac(){
        await expect(this.page.getByText('Fusion Backpack')).toBeVisible();
        await this.page.locator('[href*="https://magento.softwaretestingboard.com/fusion-backpack.html"]', {hasText: "Fusion Backpack"}).click();
        await expect(this.page).toHaveURL(/.*fusion-backpack/);
        await expect(this.page.locator('[class="base"]')).toContainText('Fusion Backpack');
        this.page.getByRole('link', { name: 'Fusion Backpack' }).first().click();
        await this.page.waitForTimeout(5000);
        const addToCartButton = await this.page.locator('[class="actions"]').locator('text="Add to Cart"').first();
        await addToCartButton.click();
        await this.page.waitForTimeout(5000);
    }

    async verificarItemNoCarrinho(item: string){
        const cartButton = await this.page.locator('[class="action showcart"]');
        await cartButton.click();
        await expect(this.page.locator('[class="product-item-name"]')).toContainText(item);
    }

    async verificarAnaliseProdutos(){
        const ContaButton = await this.page.locator('[class="nav item"]').locator('text="My Product Reviews"').first();
        await ContaButton.click();
        await expect(this.page.locator('[class="message info empty"]')).toContainText('You have submitted no reviews.');
    };

    async clickOnmenuOption(){
        //await this.menuOptions.click();
        await this.page.getByRole('menuitem', { name: ' Women' }).click();
        await this.page.waitForLoadState();
    }

    async verifyMenu(options: string){
        //const pageTitle = await this.pageTitle.textContent();
        await expect(this.pageTitle).toContainText(options);
    }

    async openMyAccount(option: string){
        const contaButton = await this.contaButton.locator(`text=${option}`);
        contaButton.click();
    }
};