Feature: Usuario ingresa al sistema

  Scenario: Usuario ingresa con credenciales validas
    Given El usuario esta en la pagina de login
    And El usuario ingresa su "standard_user" y "secret_sauce"
    When El usuario hace clic en el boton de Login
    Then El usuario deberia ingresar al sistema

Scenario: Usuario ingresa con credenciales invalidas
    Given El usuario esta en la pagina de login
    And El usuario ingresa su "locked_out_user" y "secret_sauce"
    When El usuario hace clic en el boton de Login
    Then El usuario deberia ver el mensaje de error