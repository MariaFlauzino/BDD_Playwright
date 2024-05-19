import { test, expect} from '@playwright/test';
import { HomePage } from "./pages/home-page";
import { customerLogin } from "./pages/customer-login";
import { CustomerAccout } from "./pages/customer-account";
import { CreateNewCustomerAccount } from "./pages/create-new-customer-account";
import { UserDTO } from "./dto/user-dto";
import { PaginaAnaliseProdutos } from './pages/pagina_busca_analise_produtos';


test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo();
});

test.describe("Teste 7", () => {
    test("Verificar Análise Produtos", async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goToCreateAnAccount();
        const createNewCustomerAccount = new CreateNewCustomerAccount(page);
        const analise = new PaginaAnaliseProdutos(page);

        const userDTO: UserDTO = {
            firstName: 'João',
            lastName: 'Silva',
            email: Date.now() + '_email@abc.com',
            password: 'Teste_123',
            confirmPassword: 'Teste_123',
        };


       await createNewCustomerAccount.submitFormCreateAnAccount(userDTO);
       const customerAccout = new CustomerAccout(page);
       await customerAccout.verifyUserCreated(userDTO);
       await customerAccout.signIn();
       const CustomerLogin = new customerLogin(page);
       await CustomerLogin.acessarConta(userDTO);
       await customerAccout.usuarioLogado(userDTO);
        

       await homePage.verificarAnaliseProdutos();
       await analise.verificarAnaliseProdutos();
    
      
    })
})