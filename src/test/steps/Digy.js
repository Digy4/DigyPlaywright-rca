const { Given, When, Then } = require('@cucumber/cucumber');

Given('Enter the Digydashboard login page', async function () {
    await this.page.goto('https://simulate-timeout.d24efu5b0g21ij.amplifyapp.com/auth/login');
});


When('Enter the digy username {string}', async function (username) {
    await this.page.fill('//input[@name="userName"]', username);
});


When('Enter the digy password {string}', async function (password) {
    await this.page.fill('#password', password);
    await this.page.click('[data-testid="loginButton"]', {timeout: 15000}); 
    // await this.page.waitForTimeout(15000);
});


Then('Land on the homepage', async function () {
    await this.page.waitForSelector('//p[contains(text(), "Universal Enterprise Quality Engineering Dashboard")]',  { timeout: 20000 });
    //await this.page.waitForTimeout(1500);
});
