import { Given, Then, When } from "@cucumber/cucumber"
import { HomePage } from "../pages/home-page";
import { CreateNewCustomerAccount } from "../pages/criar-conta-usuario";
import { UserDTO } from "../dto/user-dto";
import { CustomerAccout } from "../pages/customer-account";
import { pageFixture } from "../support/pageFixture";
import { expect } from "playwright/test";

let user: UserDTO[] = [];

Given('acesso a página inicial do Magento Luma',{timeout: 60 * 1000}, async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goTo();
});


Given('acessar página de Create an Account', {timeout: 60 * 1000}, async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goToCreateAnAccount();
});


When('o formulario é submetido com os dados', {timeout: 60 * 1000}, async function (dataTable) {
    const createNewCustomerAccount = new CreateNewCustomerAccount(pageFixture.page);

    const table = dataTable.hashes();
    user = [];
    for (const row of table) {
        const email_aleatorio = !row['Email'] ? "" : Date.now() + row['Email'];
        user.push({
            firstName: row['FirstName'],
            lastName: row['LastName'],
            email: email_aleatorio,
            password: row['Password'],
            confirmPassword: row['ConfirmPassword'],
        });
    }
    await createNewCustomerAccount.submitFormCreateAnAccount(user[0]);
});

Then('usuário deverá ser criado com sucesso', async function () {
    const customerAccout = new CustomerAccout(pageFixture.page);
    await customerAccout.verifyUserCreated(user[0]);
});

When('o usuário preenche o campo {string}', {timeout: 20000}, async function (password) {
    const createNewCustomerAccount = new CreateNewCustomerAccount(pageFixture.page);
    await createNewCustomerAccount.fillPasswordField(password);
});

Then('deve verificar a {string} de tipo de senha', async function (message) {
    const createNewCustomerAccount = new CreateNewCustomerAccount(pageFixture.page);
    await createNewCustomerAccount.verifyPassword(message);
});