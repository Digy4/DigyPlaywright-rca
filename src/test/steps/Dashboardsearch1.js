// const { Given, When, Then } = require('@cucumber/cucumber');
//       Given('user is on Dashboard', async () => {
//         await this.page.goto('https://simulate-timeout.d24efu5b0g21ij.amplifyapp.com/');
//         await this.page.getByRole('link', { name: 'Universal Enterprise Quality' }).click();
//       });

//       Given('user selects any option from the dropdown {string}, {string}, {string}', async function (options, value, timePeriod) {
//         await this.page.locator('.css-9efihv').click();
//         await this.page.getByText(options).click();
//         await this.page.getByRole('textbox', { name: 'Search by BuildId, Suite Name' }).fill(value);
//         await this.page.getByRole('group').filter({ hasText: timePeriod }).locator('svg').click();

//       });

    //   And(`enters the required ${option}, ${value}, ${timePeriod}`, async () => {
    //     await page.fill('#value-input', value);
    //     await page.fill('#timeperiod-input', timePeriod);
    //   });

    //   Then(`search result should get displayed for that specific ${option}, ${value}, ${timePeriod}`, async () => {
    //     await expect(page.locator('#search-results')).toBeVisible();
    //   });
