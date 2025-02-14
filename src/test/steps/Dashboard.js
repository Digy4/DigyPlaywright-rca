const { Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Then('I should see {string} on the page', async function (text) {
    const element = this.page.getByText(text, { exact: true });
    await expect(element).toBeVisible({ timeout: 20000 });
});