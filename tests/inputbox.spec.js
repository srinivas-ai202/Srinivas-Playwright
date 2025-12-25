const {test, expect} = require('@playwright/test')

test("handle inputbox", async({page})=>{

    await page.goto("https://demo.nopcommerce.com/register")

    //input box
        await expect(await page.locator('#FirstName')).toBeVisible();
        await expect(await page.locator('#FirstName')).toBeEmpty();
        await expect(await page.locator('#FirstName')).toBeEditable();
        await expect(await page.locator('#FirstName')).toBeEnabled();

       //await page.locator('#FirstName').fill('srinivas');
         await page.fill("#FirstName", 'Srinivas');
         await page.waitForTimeout(5000)  //Pausing code







})