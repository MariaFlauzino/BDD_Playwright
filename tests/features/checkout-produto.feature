Feature: checkout-produto

 Background:
    Given usuário logado no site
    And busca do produto realizada
    And produto selecionado

  Scenario: realizar checkout da compra
    Given produto adicionado no carrinho
    When  verificar carrinho
    Then checkout da compra realizada com sucesso 
