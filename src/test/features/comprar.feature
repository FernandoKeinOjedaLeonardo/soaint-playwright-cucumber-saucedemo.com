Feature: Usuario completa la compra de productos

  Background:
    Given El usuario se logea con credenciales "standard_user" y "secret_sauce"
  
  Scenario: Usuario compra un producto
    And El usuario agrega un producto al carrito
    And El usuario ingresa al carrito de compras
    And El usuario procede al checkout
    And El usuario ingresa su informacion de envio "Juan" "Perez" "12345"
    And El usuario continua la compra
    When El usuario finaliza la compra
    Then Deberia ver el mensaje de confirmacion de compra "Thank you for your order!"