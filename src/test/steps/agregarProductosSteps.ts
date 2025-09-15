import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When("El usuario agrega un producto al carrito", async function () {
  await this.page.locator("id=add-to-cart-sauce-labs-backpack").click();
});
Then("El producto deberia estar en el carrito de compras", async function () {
  await this.page.locator(".shopping_cart_link").click();
  const count = await this.page.locator(".cart_quantity").count();
  expect(count).toBe(1);
  await this.browser.close();
});
When("El usuario agrega varios productos al carrito", async function () {
  await this.page.locator("id=add-to-cart-sauce-labs-backpack").click();
  await this.page.locator("id=add-to-cart-sauce-labs-bike-light").click();
  await this.page.locator("id=add-to-cart-sauce-labs-bolt-t-shirt").click();
});
Then(
  "Los productos deberian estar en el carrito de compras",
  async function () {
    await this.page.locator(".shopping_cart_link").click();
    const count = await this.page.locator(".cart_quantity").count();
    expect(count).toBe(3);
    await this.browser.close();
  }
);
