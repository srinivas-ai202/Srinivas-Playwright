  const{test, expect} = require('@playwright/test')

  test("Handleradiobutton",   async({page})=>{
         await page.goto('https://demo.nopcommerce.com/register')

         //Radio buttons
         await page.locator("#gender-male").check(); //male radio button
         //await page.check("#gender-male");
         await expect(await page.locator("#gender-male")).toBeChecked(); 
         await expect(await page.locator("#gender-male").isChecked()).toBeTruthy();

         await expect(await page.locator("#gender-female").isChecked()).toBeFalsy();

         await page.waitForTimeout(5000);//Pausing code



  })