import { expect, Locator, Page } from "playwright/test";
import { UserDTO } from "../dto/user-dto";

export class CustomerAccout {
    page: Page;
    alert: Locator;
    contactInformation: Locator;
    botaoLoginLogout: Locator;
    opcaoSignOut: Locator;
    opcaoSignIn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.alert = this.page.getByText('Thank you for registering');
        this.contactInformation = this.page.getByText('Account Information Contact');
        this.botaoLoginLogout = this.page.getByRole('button', { name: 'Change ' }).first();
        this.opcaoSignOut = this.page.getByRole('link', { name: 'Sign Out' });
        this.opcaoSignIn = this.page.getByRole('link', { name: 'Sign In' });
    }

    async signIn() {
        await this.botaoLoginLogout.click();
        await this.opcaoSignOut.click();
        await this.opcaoSignIn.click();
    }

    async verifyUserCreated(userDTO: UserDTO) {
        await this.alert.isVisible();
        const alertText = await this.alert.textContent();
        expect(alertText).toBe('Thank you for registering with Main Website Store.');

        const contactInformation = await this.contactInformation.textContent();
        expect(contactInformation).toContain(userDTO.firstName + ' ' + userDTO.lastName);
        expect(contactInformation).toContain(userDTO.email);
    };

    async usuarioLogado(userDTO: UserDTO){
        const contactInformation = await this.contactInformation.textContent();
        expect(contactInformation).toContain(userDTO.firstName + ' ' + userDTO.lastName);
        expect(contactInformation).toContain(userDTO.email);
    }

    async usuarioLogadoOutrosCampos(){
        await expect(this.page.getByRole('heading', { name: 'My Account' }).locator('span')).toContainText('My Account');
        await expect(this.page.getByText('João Silva')).toContainText('João Silva');
    }
};