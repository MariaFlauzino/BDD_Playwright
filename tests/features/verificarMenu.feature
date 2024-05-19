 Feature: Verificar Menu

  Background:
    Given o usuário acessa o site Luma
  
  Scenario Outline: Verificar opções Menu
    When o usuário navega no menu "<Menu>"
    Then deverá visualizar as seguintes "<Opções>"

    Examples:
    |Menu | Opções|
    | Women | Women  |