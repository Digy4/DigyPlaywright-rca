 const { Given, Then } = require('@cucumber/cucumber');
         Given('user ran API test from editor', async function () {
            await this.page.getByRole('link', { name: 'Universal Enterprise Quality' }).click();
            await this.page.locator('div:nth-child(2) > div > .css-1uurwrt').click();
            await this.page.getByRole('button', { name: 'Execution Dashboard' }).click();
            await this.page.getByRole('button', { name: 'Test Suite' }).click();
            await this.page.getByRole('group').filter({ hasText: 'Last 2 days' }).locator('svg').click();
            await this.page.getByRole('option', { name: 'Last 9 months' }).click();
         });
        
         Given('user has provided {string}, {string}, {string}, {string}, {string} in digy4.config.properties file', async function (projectName, framework, suiteName, release, testType) {
            await this.page.getByRole('img', { name: 'filter' }).click();
            await this.page.getByRole('button', { name: 'project name' }).click();
            await this.page.getByLabel('project name').getByText(projectName).click();
            await this.page.getByRole('button', { name: 'framework' }).click();
            await this.page.getByLabel('framework').getByText(framework, { exact: true }).click();
            await this.page.getByRole('button', { name: 'suite name' }).click();
            await this.page.getByLabel('suite name').getByText(suiteName, { exact: true }).click();
            await this.page.getByRole('button', { name: 'release' }).click();
            await this.page.getByLabel('release', { exact: true }).getByText(release).click();
            // await this.page.getByRole('button', { name: 'test type' }).click();
            // await this.page.locator('[id="accordion-panel-\\:r4e\\:"]').getByText(testType).click();
            await this.page.getByRole('button', { name: 'Apply' }).click();
          });

        //  Then('the datas should match with the one provided by user in digy4.config.properties file during execution',async function () {
        //    // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        //  });

        //  Then('user is validating <Total>,<Pass>,<Fail>,<Duration>,<Start Time>,<End Time> records',async function () {
        //    // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        //  });

        
        //  Then('it should show as per execution performed by user',async function () {
        //    // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        //  });