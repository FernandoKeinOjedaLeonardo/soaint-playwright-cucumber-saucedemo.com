import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When("El usuario ingresa al carrito de compras", async function () {
  await this.page.locator(".shopping_cart_link").click();
});

When("El usuario procede al checkout", async function () {
  await this.page.locator("id=checkout").click();
});

Given(
  "El usuario ingresa su informacion de envio {string} {string} {string}",
  async function (nombre: string, apellido: string, zip: string) {
    await this.page.locator("id=first-name").fill(nombre);
    await this.page.locator("id=last-name").fill(apellido);
    await this.page.locator("id=postal-code").fill(zip);
  }
);
Given("El usuario continua la compra", async function () {
  await this.page.locator("id=continue").click();
});
When("El usuario finaliza la compra", async function () {
  await this.page.locator("id=finish").click();
});
Then(
  "Deberia ver el mensaje de confirmacion de compra {string}",
  async function (mensaje: string) {
    const text = this.page.locator(
      "//h2[normalize-space(text())='Thank you for your order!']"
    );
    await expect(text).toBeVisible();
    await this.browser.close();
  }
);
