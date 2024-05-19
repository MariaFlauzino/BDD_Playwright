Feature: Pagina inicial abriu

  Scenario: Navegar no site
    Given o usuário acessa o site Luma
    When visualiza algumas paginas
    Then usuário consiguirá navegar na pagina com sucesso
