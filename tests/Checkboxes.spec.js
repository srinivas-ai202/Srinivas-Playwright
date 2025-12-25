const{test, expect} = require('@playwright/test')

test('Handle checkboxes', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

   /*  //single checkbox
     await page.locator("#monday").check() //xpath--//input[@id='monday' and @type='checkbox']
     //await page.check("#monday")
    await expect(await page.locator("#monday")).toBeChecked()
    await expect(await page.locator("#monday").isChecked()).toBeTruthy();
    await expect(await page.locator("#sunday").isChecked()).toBeFalsy();*/

    //Multiple checkboxes
    const checkboxLocators = [ "#monday",  '#sunday' , '#saturday'];

    for (const locators of checkboxLocators) //select multiple checkboxes
    {
          await page.locator(locators).check()

    }
              await page.waitForTimeout(3000)
     for (const locators of checkboxLocators) //unselect multiple checkboxes which are already selected
    {     if(await page.locator(locators).isChecked())
         {
          await page.locator(locators).uncheck()
         }
    }
          await page.waitForTimeout(3000)


   


})