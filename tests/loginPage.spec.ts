import test from "@playwright/test";
import { LoginPage } from "../pages/loginPage.pom";
import { BasePage, Configuration } from "playwright-ts-automationframework";

let loginPage: LoginPage;

 test.beforeEach(async ({ page }, testInfo) => {
    loginPage = new LoginPage(page);
    BasePage.setTestCaseID(testInfo);
    await loginPage.initializeBrowser();
  });


  test('Verify successful login for valid credentials', async ({ page }) => {
    await loginPage.doLogin("Admin", "kasjdfhlkasjfd");
    await loginPage.verifySuccessfulLogin();
  });


  test.afterEach(async ({ }, testInfo) => {
    BasePage.executionCompleted(testInfo);
  });