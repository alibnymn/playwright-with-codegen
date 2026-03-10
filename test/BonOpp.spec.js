import { test, expect } from '@playwright/test';

test('TC_D_001 | Delete Bon', async ({ page }) => {
  await page.goto('http://192.168.0.14:21210/Login');
  await page.getByRole('textbox', { name: 'Username *' }).click();
  await page.getByRole('textbox', { name: 'Username *' }).fill('LLP4402');
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('@libnymn_');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.locator('#select_3').click();
  await page.getByRole('option', { name: 'Kikir' }).click();
  await page.getByRole('button', { name: 'Pilih' }).click();
  await page.getByRole('button', { name: 'Toggle menubar' }).click();
  await page.locator('a').filter({ hasText: 'Bon Operator' }).click();
  await page.getByRole('button', { name: 'openMenu' }).first().click();
  await page.getByRole('menuitem', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});