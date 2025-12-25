import { test, expect} from '@playwright/test'

test("Verify Login with valid credential", async({page}) =>{

    await page.goto("https://www.saucedemo.com/")

      await page.locator("#user-name").fill('standard_user')

      await page.locator("#password").type("secret_sauce")

      await page.locator("#login-button").click()

      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})

test("Verify Login with valid username and Invalid password ", async({page}) =>{

     await page.goto("https://www.saucedemo.com/")

      await page.locator("#user-name").fill('standard_user')

      await page.locator("#password").type("secret")

      await page.locator("#login-button").click()

      //await page.waitForTimeout(5000)

      //Assertions
      await expect(page.locator("//h3[text()='Epic sadface: Username and password do not match any user in this service']")).toBeVisible()
})

test("Verify Login with Invalid username and Valid password ", async({page}) =>{

     await page.goto("https://www.saucedemo.com/")

      await page.locator("#user-name").fill('standard')

      await page.locator("#password").fill("secret_sauce")

      await page.locator("#login-button").click()

      //await page.waitForTimeout(5000)

      //Assertions
      await expect(page.locator("//h3[text()='Epic sadface: Username and password do not match any user in this service']")).toBeVisible()
})

test("Verify Login with Invalid username and InValid password ", async({page}) =>{

     await page.goto("https://www.saucedemo.com/")

      await page.locator("#user-name").fill('standard')

      await page.locator("#password").fill("secret")

      await page.locator("#login-button").click()

      //await page.waitForTimeout(5000)

      //Assertions
      await expect(page.locator("//h3[text()='Epic sadface: Username and password do not match any user in this service']")).toBeVisible()
})

//By using code gen

test('Verify Login with valid credential by using codegen', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});

test('Verify Login with valid username and invalid password by using codegen', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('dfkjdkfjdkjf');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('test generate codegen', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#app')).toContainText('Time at Work');
  await page.getByText('My Actions').click();
  await expect(page.locator('#app')).toContainText('My Actions');
  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page.getByRole('link', { name: 'PIM' })).toBeVisible();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Mahesh');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('T');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Mahesh T' })).toBeVisible();
});





