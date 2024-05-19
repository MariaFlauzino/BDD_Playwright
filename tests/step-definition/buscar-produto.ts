import { PaginaDeBusca } from '../pages/página_busca_produto';
import { pageFixture } from "../support/pageFixture";
import {  Then } from "@cucumber/cucumber"

Then('verifico o {string} buscado',{timeout: 60 * 1000}, async function (produto) {
    const busca = new PaginaDeBusca(pageFixture.page);
    await busca.verificarProdutoBuscado(produto);

});