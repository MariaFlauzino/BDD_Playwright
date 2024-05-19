import { HomePage } from "../pages/home-page";
import { customerLogin } from "../pages/customer-login";
import { CustomerAccout } from "../pages/customer-account";
import { CreateNewCustomerAccount } from "../pages/criar-conta-usuario";
import { UserDTO } from "../dto/user-dto";
import { PaginaAnaliseProdutos } from '../pages/pagina_busca_analise_produtos';
import { PaginaDeBusca } from '../pages/página_busca_produto';
import { SelecionarProduto } from '../pages/selecionar-produto';
import { AdicionarProduto } from '../pages/adicionar-produto-carrinho';
import { VerificarCarrinho } from '../pages/verificar-carrinho';
import { FazerCheckOut } from '../pages/checkout-produto';
import { pageFixture } from "../support/pageFixture";
import { Given, Then, When } from "@cucumber/cucumber"


Given('login site Luma', {timeout: 60 * 1000},async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goToCreateAnAccount();
    const createNewCustomerAccount = new CreateNewCustomerAccount(pageFixture.page);
    const analise = new PaginaAnaliseProdutos(pageFixture.page);

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
   await customerAccout.usuarioLogado(userDTO);
});


Given('busca do produto realizada', async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.preenchendoBusca("bag");
    const buscaProduto = new PaginaDeBusca(pageFixture.page);
    await buscaProduto.verificarProdutoBuscado("bag");

});


Given('produto selecionado', async function () {
    const selecionarProduto = new SelecionarProduto(pageFixture.page);
    await selecionarProduto.selecionarProduto();
});

Given('produto adicionado no carrinho', async function () {
    const adicionarCarrinho = new AdicionarProduto(pageFixture.page);
    await adicionarCarrinho.adicionarProduto();
});


When('verificar carrinho',{timeout: 60 * 1000}, async function () {
    const verificarCarrinho = new VerificarCarrinho(pageFixture.page);
    await verificarCarrinho.verificarCarrinho();

});


Then('checkout da compra realizada com sucesso', async function () {
    const fazerCheckOut = new FazerCheckOut(pageFixture.page);
    await fazerCheckOut.fazerCheckOut();

});