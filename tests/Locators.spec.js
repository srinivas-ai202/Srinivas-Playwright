const {test,expect}= require('@playwright/test')
//import {test,expect} from ('@playwright/test')

test('Locators', async ({page})=>{
        await page.goto('https://demoblaze.com')

        //click on login button -- by using property
        //await page.locator('id=login2').click()

        //second Approach
        await page.click('id=login2')

        //Provide Username ---- By using css
        //await page.locator('#loginusername').fill('srinivas') //--first approach
        await page.fill('#loginusername','pavanol')   //second approach(Easy One)
       // await page.type('#loginusername','pavanol')

        //Provide password --css
        await page.fill("input[id='loginpassword']", 'test@123')

        //click on login button-- xpath
        await page.click("//button[normalize-space(text())='Log in']")

        //verify logout link presence --by using property
       const logoutlink= await page.locator('#logout2')
       await expect(logoutlink).toBeVisible();
       await page.close()



})