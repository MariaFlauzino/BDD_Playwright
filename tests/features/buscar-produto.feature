Feature: Adicionar Produto Carrinho

 Background:
    Given usuário logado no site

  Scenario Outline: realizar checkout da compra
    Given realizo a busca do produto "<Produto>"
    Then verifico o "<Produto>" buscado

    Examples:
    | Produto|
    |Overnight Duffle|
    |Tiberius Gym Tank|
    
