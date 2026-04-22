import { test, expect } from '@playwright/test';
import { allure } from "allure-playwright";

allure.epic("Login");
allure.feature("Positive Login");
allure.story("TC_L_001 | Login Positif");
test('TC_L_001 | Login Positif', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});
