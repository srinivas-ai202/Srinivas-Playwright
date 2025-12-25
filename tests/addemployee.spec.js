import {test, expect } from '@playwright/test';

import data from '../testData/addemployee.json'

import logindata from '../testData/login.json'

test('test generate codegen', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#app')).toContainText('Time at Work');
  await page.getByText('My Actions').click();
  await expect(page.locator('#app')).toContainText('My Actions');
  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page.getByRole('link', { name: 'PIM' })).toBeVisible();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(data.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastname);
  await page.getByRole('button', { name: 'Save' }).click();
 // await expect(page.getByRole('heading', { name: 'Mahesh T' })).toBeVisible();
});


