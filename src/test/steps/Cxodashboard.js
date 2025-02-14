const { Given, When, Then } = require('@cucumber/cucumber');

         Given('the user is on the Universal Enterprise Quality page', async function () {
            await this.page.goto("https://simulate-timeout.d24efu5b0g21ij.amplifyapp.com/");
            await this.page.waitForNavigation({ waitUntil: 'load', timeout: 30000 });
            await this.page.getByRole('link', { name: 'Universal Enterprise Quality' }).click();
         });

         When('the user clicks on the DASHBOARDS button', async function () {
            await this.page.getByRole('button', { name: 'DASHBOARDS' }).click();
         });

         When('the user clicks on the CXO Dashboard button',async function () {
            await this.page.getByRole('button', { name: 'CXO Dashboard' }).click();
         });

         Then('the CXO Dashboard should be displayed',async function () {
            await this.page.waitForSelector('//*[contains(@class, "chakra-heading") and contains(@class, "css-107ng0r")]', { timeout: 10000 });
            console.log("CXO Dashboard is displayed!");
         });