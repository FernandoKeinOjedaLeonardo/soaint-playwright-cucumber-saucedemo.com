Feature: Usuario agrega productos al carrito de compras

  Background:
    Given El usuario se logea con credenciales "standard_user" y "secret_sauce"
    
  Scenario: Usuario agrega un producto al carrito
    When El usuario agrega un producto al carrito
    Then El producto deberia estar en el carrito de compras

  Scenario: Usuario agrega varios productos al carrito
    When El usuario agrega varios productos al carrito
    Then Los productos deberian estar en el carrito de compras
