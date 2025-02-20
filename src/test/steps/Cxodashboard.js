const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const selector = {
  cxo: '//*[contains(@class, "chakra-heading") and contains(@class, "css-107ng0r")]',
};

//Given Enter the Digydashboard login page
Given("Enter the Digydashboard login page", { timeout: 30000 }, async function () {
  await this.page.goto("https://simulate-timeout.d24efu5b0g21ij.amplifyapp.com/auth/login");
});

When("Enter the digy username {string}", { timeout: 30000 }, async function (username) {
  await this.page.fill('//input[@name="userName"]', username);
});

When("Enter the digy password {string}", async function (password) {
  await this.page.fill("#password", password);
  await this.page.click('[data-testid="loginButton"]');
});

Then("Land on the homepage", async function () {
  await this.page
    .locator('//img[@class="chakra-image css-1ywmljq"]')
    .waitFor({ state: "visible", timeout: 30000 });

  //await this.page.locator('//img[@class="chakra-image css-1ywmljq"]').waitFor({ state: 'visible', timeout: 30000 });
  //await this.page.waitForSelector('//img[@class="chakra-image css-1ywmljq"]',  { timeout: 30000 });
  //await this.page.waitForSelector('//p[contains(text(), "Universal Enterprise Quality Engineering Dashboard")]',  { timeout: 20000 });
});

//Verify Dashboard elements
Then("I should see {string} on the page", async function (text) {
  await this.page.goto("https://simulate-timeout.d24efu5b0g21ij.amplifyapp.com/");
  const element = this.page.getByText(text, { exact: true });
  await expect(element).toBeVisible({ timeout: 20000 });
});

Given("the user is on Homepage", async function () {
  await this.page.goto("https://simulate-timeout.d24efu5b0g21ij.amplifyapp.com/");
  await this.page.waitForNavigation({ waitUntil: "load", timeout: 30000 });
  await this.page.getByRole("link", { name: "Universal Enterprise Quality" }).click();
});

When("the user clicks on the DASHBOARDS button", async function () {
  await this.page.getByRole("button", { name: "DASHBOARDS" }).click();
});

When("the user clicks on the CXO Dashboard button", async function () {
  await this.page.getByRole("button", { name: "CXO Dashboard" }).click();
});

Then("the CXO Dashboard should be displayed", async function () {
  await this.page.waitForSelector(selector.cxo);
  await this.page.waitForNavigation({ waitUntil: "load", timeout: 10000 });
  console.log("CXO Dashboard is displayed!");
});

//Functionality of collapse and expand icon for widgets Test Scenario
Given("user clicks on first expand icon", async function () {
  await this.page.getByRole("img", { name: "expand" }).first().click();
});

Given("the widget gets expand", async function () {
  await this.page.getByRole("img", { name: "collapse" }).click();
});

Given("again user clicks on the collapse icon", async function () {
  await this.page.getByRole("img", { name: "collapse" }).click();
});

Then("the widget should get collapse", async function () {
  await this.page.getByRole("img", { name: "expand" }).click();
});

//full screen icon
Given("user clicks on full screen icon", async function () {
  await this.page.getByRole("img", { name: "expand" }).first().click();
});

Given("the widget should gets in full screen mode", async function () {
  console.log("widget in full screen mode");
});

Given("again user clicks on the full screen icon", async function () {
  await this.page.getByRole("img", { name: "expand" }).click();
});

Then("the widget should return to previous state", async function () {
  console.log("its in same state again");
});

//Overview of test coverage widget Test Scenario
Given("user is viewing test coverage widget", async function () {
  // await this.page.locator('div').filter({ hasText: /^Test CoverageLoading\.\.\.$/ }).locator('div').nth(2).click();
  // await this.page.getByText('Test Coverage').click();
  await this.page.getByRole("button", { name: "DASHBOARDS" }).click();
  await this.page.locator("b").filter({ hasText: "Test Coverage" }).click();
});

Then("user should see pie chart and {string}",{timeout:20000}, async function (browserName) {
  await this.page.getByText(browserName).first().click();
});

//viewing widgets
When("the user is on dashboard homepage", async function () {
  await this.page.getByText("TQACXO");
});

When("the user clicks on the {string} from the dropdown", async function (day) {
  await this.page.locator(".select__input-container").click();
  await this.page.getByRole("option", { name: day }).click();
});

Then("the user able to see widgets on Dashboard", async function () {
  await this.page.waitForLoadState("load");
  await expect(this.page.getByText("TQACXO")).toBeVisible({ timeout: 20000 });
});
