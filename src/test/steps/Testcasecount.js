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

  // 'Executed By' column
  Given('user naviagtes to test suite page from left naviagtion panel',async function () {
  await this.page.getByRole('button', { name: 'Execution Dashboard' }).click();
  await this.page.getByRole('button', { name: 'Test Suite' }).click();
  });

    Then('user should see the {string} column in test suite page.',async function (string) {
      await this.page.getByRole('cell', { name: string });
    });

  //expand icon on test suite
  Given('user is on Test suite history page', async function () {
    await this.page.getByRole('link', { name: 'Universal Enterprise Quality' }).click();
  await this.page.getByRole('button', { name: 'DASHBOARDS' }).click();
  await this.page.getByRole('button', { name: 'Execution Dashboard' }).click();
  await this.page.getByRole('button', { name: 'Test Suite' }).click();
  });

  Given('user is viewing test suite history section',async function () {
    await this.page.getByText('Overview', { exact: true }).click();
    await this.page.getByText('Status Overview').click();
    await this.page.getByRole('paragraph').filter({ hasText: /^Test Suite$/ });
  });


  //drilling from test suit to test detail
         Given('user select on test suit history for particular project',async function () {
          await this.page.getByRole('row', { name: 'DIGY4 TEST PROJECT open menu WEBDRIVERIO REGRESSION E2E CONCURRENTLY - JASMINE RELEASE - CONCURRENTLY Web JOE BLOGGS NA 2.0 TEST 2 1 1 0 0 0 0:08 s 00:00 s 00:00 s 02/20/2025 03:00:56 PM 02/20/2025 03:01:03 PM 50 AUTO-a32a3cae-92da-4fc2-bdbd-874c3506fb79 Automation DIGY4 TEAM E2E MODULE CONCURRENTLY', exact: true }).getByLabel('open menu').click();
          await this.page.getByRole('link', { name: 'Test Suite - History' }).click();
         });

         Given('user select on toggle for viewing test cases',async function () {
          await this.page.getByRole('row', { name: 'DIGY4 TEST PROJECT WEBDRIVERIO REGRESSION E2E CONCURRENTLY - JASMINE RELEASE - CONCURRENTLY Web JOE BLOGGS collapse 133.0.6943.99 2.0 TEST 2 1 1 0 0 0 0:08 s 00:00 s 00:00 s 02/20/2025 03:00:56 PM 02/20/2025 03:01:03 PM 50 AUTO-a32a3cae-92da-4fc2-bdbd-874c3506fb79 Automation DIGY4 TEAM LOCAL E2E MODULE CONCURRENTLY', exact: true }).locator('svg').click();
          await this.page.getByRole('row', { name: 'DIGY4 TEST PROJECT open menu REGRESSION E2E CONCURRENTLY - JASMINE RELEASE - CONCURRENTLY Validate other form inputs collapse 3 JOE BLOGGS collapse 133.0.6943.99 TEST 0:01  s 02/20/2025 03:01:02 PM 02/20/2025 03:01:03 PM AUTO-a32a3cae-92da-4fc2-bdbd-874c3506fb79 DIGY4 TEAM Automation LOCAL E2E MODULE CONCURRENTLY', exact: true }).getByLabel('open menu').click();
          });

         Given('user select on toggle for viewing test details',async function () {
          await this.page.getByRole('link', { name: 'Test Details' }).click();
         });

         Then('test detail page should be visible',async function () {
          await this.page.getByText('Meta Data');
          await this.page.getByText('Test Details');
         });

         //global search
         Given('user has provided {string}, {string} and {string}',async function (buildId, suiteName, testCaseName) {
        
          await this.page.getByRole('textbox', { name: 'Search by BuildId, Suite Name' }).click();
          await this.page.getByRole('textbox', { name: 'Search by BuildId, Suite Name' }).fill(suiteName);
        });

        Then('user is only able to see {string}, {string}, {string}, {string}, {string},{int},{int},{string}, {string}',async function (framework,suiteName,release,testType,total,pass,fail,startTime,endTime) {    
          await this.page.getByRole('cell', { name: total, exact: true }).first()
          await this.page.getByRole('cell', { name: startTime })
          await this.page.getByRole('cell', { name: endTime })
        });