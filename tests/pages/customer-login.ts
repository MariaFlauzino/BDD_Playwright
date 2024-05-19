import { Locator, Page } from "playwright/test";
import { UserDTO } from "../dto/user-dto";

export class customerLogin {
    page: Page;
    fieldEmail: Locator;
    fieldPassword: Locator;
    buttonSignIn: Locator;    

    constructor(page: Page) {
        this.page = page;
        this.fieldEmail = this.page.getByLabel('Email', { exact: true });
        this.fieldPassword = this.page.getByRole('textbox', { name: 'Password*', exact: true });
        this.buttonSignIn = this.page.getByRole('button', { name: 'Sign In' });
    };

    async acessarConta(userDTO: UserDTO) {
        await this.fieldEmail.fill(userDTO.email);
        await this.fieldPassword.fill(userDTO.password);
        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState();
        await this.buttonSignIn.click();
    };
};