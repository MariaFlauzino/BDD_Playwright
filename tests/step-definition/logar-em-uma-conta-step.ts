import { Given, Then, When} from "@cucumber/cucumber"
import { HomePage } from "../pages/home-page";
import { customerLogin } from "../pages/customer-login";
import { UserDTO } from "../dto/user-dto";
import { CreateNewCustomerAccount } from "../pages/create-new-customer-account";
import { CustomerAccout } from "../pages/customer-account";
import { pageFixture } from "../support/pageFixture";

Given('acesso a página há Magento Luma', async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goTo();
});


Given('o Site Luma carregou com sucesso', async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.verificandoSite();
});


When('preencher os campos de acesso',{timeout: 60 * 1000}, async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goToCreateAnAccount();
    const createNewCustomerAccount = new CreateNewCustomerAccount(pageFixture.page);

    const userDTO: UserDTO = {
        firstName: 'João',
        lastName: 'Silva',
        email: Date.now() + '_email@abc.com',
        password: 'Teste_123',
        confirmPassword: 'Teste_123',
    };

    await createNewCustomerAccount.submitFormCreateAnAccount(userDTO);
    const customerAccout = new CustomerAccout(pageFixture.page);
    await customerAccout.verifyUserCreated(userDTO);
    await customerAccout.signIn();
    const CustomerLogin = new customerLogin(pageFixture.page);
    await CustomerLogin.acessarConta(userDTO);
});

Then('usuário deverá acessar com sucesso', async function () {
    const customerAccout = new CustomerAccout(pageFixture.page);
    await customerAccout.usuarioLogadoOutrosCampos();
});
