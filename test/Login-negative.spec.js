import { test, expect } from '@playwright/test';

test('TC_L_002 | Login (username invalid)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test('TC_L_003 | Login (password invalid)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_sauce');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_');
  await page.locator('[data-test="login-button"]').click();
});

test('TC_L_003 | Login (username password invalid)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_sauc');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_');
  await page.locator('[data-test="login-button"]').click();
});