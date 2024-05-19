import { HomePage } from "../pages/home-page";
import { PaginaDeBusca } from '../pages/página_busca_produto';
import { SelecionarProduto } from '../pages/selecionar-produto';
import { AdicionarProduto } from '../pages/adicionar-produto-carrinho';
import { VerificarCarrinho } from '../pages/verificar-carrinho';
import { pageFixture } from "../support/pageFixture";
import { Given, Then, When } from "@cucumber/cucumber"

Given('realizo a busca do produto {string}', {timeout: 60 * 1000} ,async function (produto) {
    const homePage = new HomePage(pageFixture.page);
    const buscaProduto = new PaginaDeBusca(pageFixture.page);

    await homePage.preenchendoBusca(produto);
    await buscaProduto.verificarProdutoBuscado(produto);
});

Given('produto {string} é selecionado', async function (produto) {
    const selecionarProduto = new SelecionarProduto(pageFixture.page);
    await selecionarProduto.selecionarProdutoPorNome(produto);
});

When('produto é adicionado no carrinho', {timeout: 60 * 1000}, async function () {
    const adicionarCarrinho = new AdicionarProduto(pageFixture.page);
    await adicionarCarrinho.adicionarProduto();
});


Then('verifico o {string} carrinho', {timeout: 60 * 1000}, async function (produto) {
    const verificarCarrinho = new VerificarCarrinho(pageFixture.page);
    await verificarCarrinho.verificarCarrinhoPorPoduto(produto);

});