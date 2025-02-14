const { Given, When, Then } = require('@cucumber/cucumber');
  Given('user is on Homepage', async function () {
    await this.page.goto('https://simulate-timeout.d24efu5b0g21ij.amplifyapp.com/');
    await this.page.getByRole('link', { name: 'Universal Enterprise Quality' }).click(); 
  });

  Given('user clicks on first expand icon', async function () {
    await this.page.getByRole('img', { name: 'expand' }).first().click();
  });

  Given('the widget gets expand', async function () {
    await this.page.getByRole('img', { name: 'collapse' }).click();
  });

  Given('again user clicks on the collapse icon', async function () {
    await this.page.getByRole('img', { name: 'collapse' }).click();
  });

  Then('the widget should get collapse',async function () {
    await this.page.getByRole('img', { name: 'expand' }).click();
  });