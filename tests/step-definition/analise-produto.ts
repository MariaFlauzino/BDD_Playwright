import { Given, Then } from "@cucumber/cucumber"
import { HomePage } from "../pages/home-page";
import { customerLogin } from "../pages/customer-login";
import { UserDTO } from "../dto/user-dto";
import { CreateNewCustomerAccount } from "../pages/criar-conta-usuario";
import { CustomerAccout } from "../pages/customer-account";
import { pageFixture } from "../support/pageFixture";
import { AnaliseProduto } from "../pages/analise-produto";

Given('usuário logado no site',{timeout: 60 * 1000}, async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goTo();
    await homePage.goToCreateAnAccount();
    const createNewCustomerAccount = new CreateNewCustomerAccount(pageFixture.page);

    const userDTO: UserDTO = {
        firstName: 'João',
        lastName: 'Silva',
        email: Date.now() + '_email@abc.com',
        password: 'Teste_123',
        confirmPassword: 'Teste_123'
    };

    await createNewCustomerAccount.submitFormCreateAnAccount(userDTO);
    const customerAccout = new CustomerAccout(pageFixture.page);
    await customerAccout.verifyUserCreated(userDTO);
    await customerAccout.signIn();
    const CustomerLogin = new customerLogin(pageFixture.page);
    await CustomerLogin.acessarConta(userDTO);
;

});


Then('usuário obtém o retorno da consulta com sucesso', {timeout: 60 * 1000}, async function () {
    const homePage = new HomePage(pageFixture.page);
    const analiseProduto = new AnaliseProduto(pageFixture.page);

    await homePage.openMyAccount("My Product Reviews");
    await analiseProduto.verificarAnaliseProdutos();
});