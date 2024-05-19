  Feature: Verificar Senha

  Background:
    Given acesso a página inicial do Magento Luma
  
  Scenario Outline: Verificar regra de senha
    Given acessar página de Create an Account
    When o usuário preenche o campo "<Password>"
    Then deve verificar a "<Mensagem>" de tipo de senha

    Examples:
    | Password      | Mensagem                       |
    |               | Password Strength: No Password |
    | teste         | Password Strength: Weak        |
    | Teste123      | Password Strength: Medium      |
    | Teste123#     | Password Strength: Strong      |
    | Teste123#10@@ | Password Strength: Very Strong |