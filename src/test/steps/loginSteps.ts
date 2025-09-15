import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given("El usuario esta en la pagina de login", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
  this.page = page;
  this.browser = browser;
});

Given(
  "El usuario ingresa su {string} y {string}",
  async function (usuario: string, contrasena: string) {
    await page.locator("id=user-name").fill(usuario);
    await page.locator("id=password").fill(contrasena);
  }
);

When("El usuario hace clic en el boton de Login", async function () {
  await page.locator("id=login-button").click();
});

Then("El usuario deberia ingresar al sistema", async function () {
  const text = page.locator("span.title");
  await expect(text).toBeVisible();
  await browser.close();
});

Then("El usuario deberia ver el mensaje de error", async function () {
  const text = page.locator("//h3[@data-test='error']");
  await expect(text).toBeVisible();
  await browser.close();
});

Given(
  "El usuario se logea con credenciales {string} y {string}",
  async function (usuario: string, contrasena: string) {
    if (!this.browser) {
      this.browser = await chromium.launch({ headless: false });
    }
    if (!this.page) {
      this.page = await this.browser.newPage();
    }
    await this.page.goto("https://www.saucedemo.com/");
    await this.page.locator("id=user-name").fill(usuario);
    await this.page.locator("id=password").fill(contrasena);
    await this.page.locator("id=login-button").click();
  }
);
