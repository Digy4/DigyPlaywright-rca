const { Given, When, Then } = require('@cucumber/cucumber');

Given('the user is on Dashboard button', async function () {
  await this.page.goto('https://simulate-timeout.d24efu5b0g21ij.amplifyapp.com/');
  await this.page.getByRole('link', { name: 'Universal Enterprise Quality' }).click();
  await this.page.getByRole('button', { name: 'DASHBOARDS' }).click();
});

When('the user clicks on execution Dashboard', async function () {
  await this.page.getByRole('button', { name: 'Execution Dashboard' }).click();
});

When('the user clicks on testsuite', async function () {
  await this.page.getByRole('button', { name: 'Test Suite' }).click();
});

//  Then('the testsuite should be visible', function () {
//    // Write code here that turns the phrase above into concrete actions
//    return 'pending';
//  });


  Given('user is on Dashboard', async function () {
    await this.page.goto('https://simulate-timeout.d24efu5b0g21ij.amplifyapp.com/');
    await this.page.getByRole('link', { name: 'Universal Enterprise Quality' }).click();
    await this.page.getByRole('button', { name: 'DASHBOARDS' }).click();
  });

  Given('search result conatins more than 5 test suite', async function () {
    await this.page.getByRole('button', { name: 'Execution Dashboard' }).click();
    await this.page.getByRole('button', { name: 'Test Suite' }).click();
    await this.page.locator('.select__indicator').click();
    await this.page.getByRole('option', { name: 'Last 8 months' }).click();
  });

  Then('user should be able to change the entries and the result should show based on the entries"{int}"', async function (entries) {
    await this.page.locator('select').selectOption(entries.toString());
  });