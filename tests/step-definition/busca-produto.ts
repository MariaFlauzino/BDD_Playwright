import { test, expect} from '@playwright/test';
import { HomePage } from "../pages/home-page";
import { customerLogin } from "../pages/customer-login";
import { CustomerAccout } from "../pages/customer-account";
import { CreateNewCustomerAccount } from "../pages/create-new-customer-account";
import { UserDTO } from "../dto/user-dto";
import { PaginaAnaliseProdutos } from '../pages/pagina_busca_analise_produtos';
import { PaginaDeBusca } from '../pages/página_busca_produto';
import { SelecionarProduto } from '../pages/selecionar-produto';
import { AdicionarProduto } from '../pages/adicionar-produto-carrinho';
import { VerificarCarrinho } from '../pages/verificar-carrinho';
import { FazerCheckOut } from '../pages/fazer-check-out';
import { pageFixture } from "../support/pageFixture";
import { Given, Then, When } from "@cucumber/cucumber"



Then('verifico o {string} buscado',{timeout: 60 * 1000}, async function (produto) {
    const busca = new PaginaDeBusca(pageFixture.page);
    await busca.verificarProdutoBuscado(produto);

});

