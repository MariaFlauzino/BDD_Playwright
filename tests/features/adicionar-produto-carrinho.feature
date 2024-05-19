Feature: Adicionar Produto Carrinho

 Background:
    Given usuário logado no site

  Scenario Outline: Adicionar produto ao carrinho
    Given realizo a busca do produto "<Produto>"
    And produto "<Produto>" é selecionado
    When produto é adicionado no carrinho
    Then verifico o "<Produto>" carrinho

    Examples:
    | Produto|
    |Overnight Duffle|
    |Dash Digital Watch|
    
