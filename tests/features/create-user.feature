Feature: Create User

  Background:
    Given acesso a página inicial do Magento Luma

  Scenario: Criar usuário com sucesso
    Given acessar página de Create an Account
    When o formulario é submetido com os dados
      | FirstName | LastName | Email          | Password | ConfirmPassword |
      | Teste     | Silva    | email@abcd.com | Teste123 | Teste123        |
    Then usuário deverá ser criado com sucesso