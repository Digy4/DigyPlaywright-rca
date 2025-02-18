const { Given, When, Then} = require('@cucumber/cucumber');
Given('User is on profile page',async function () {
    await this.page.goto('https://simulate-timeout.d24efu5b0g21ij.amplifyapp.com/');
    await this.page.getByRole('button', { name: 'Options' }).click();
    await this.page.getByRole('menuitem', { name: 'Profile' }).click();
  });

  When('User click on purging',async function () {
    await this.page.getByRole('button', { name: 'Purging' }).click();
  });

  Then('User able to see three {string}',async function (purgingOption) {
    await this.page.getByText(purgingOption).click();
  });


        //time base purging
         When('User selects time base purging',async function () {
            await this.page.getByText('Time Based Purging').click();
         });
         
         Then('User can set limit based on {string} or {string}', async function (string, string2) {
            await this.page.getByRole('radiogroup').locator('span').first().click();
            await this.page.locator('select[name="timeSelect"]').selectOption('Days');
            await this.page.getByTestId('time-based').click();
            await this.page.getByTestId('time-based').fill(string);

            await this.page.locator('select[name="timeSelect"]').selectOption('Months');
            await this.page.getByTestId('time-based').click();
            await this.page.getByTestId('time-based').fill(string2);
         });

         Then('Save the limit to do purging',async function () {
            await this.page.getByRole('button', { name: 'Save' }).click();
         });
