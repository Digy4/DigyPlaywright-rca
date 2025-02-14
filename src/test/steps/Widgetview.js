const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

  When('the user is on homepage', async function () {
            await this.page.getByText('TQACXO')
  });

  When('the user clicks on the {string} from the dropdown', async function (string) {
            await this.page.locator('.select__input-container').click();
            await this.page.getByRole('option', { name: string }).click();
  });

  Then('the user able to see widgets on Dashboard', async function () {
    await this.page.waitForLoadState('load');
    await expect(this.page.getByText('TQACXO')).toBeVisible({ timeout: 20000 });
  });
        