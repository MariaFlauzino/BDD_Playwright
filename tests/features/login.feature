Feature: login User

  Background:
    Given acesso a página há Magento Luma

  Scenario: Fazer o login com sucesso
    Given o Site Luma carregou com sucesso
    When preencher os campos de acesso
    Then usuário deverá acessar com sucesso