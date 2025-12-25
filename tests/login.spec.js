
import {test, expect} from '@playwright/test'

import logindata from '../testData/login.json'

test ("Verify Login with Valid Credential", async ({page})=>{

     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[placeholder='Username']").fill(logindata.username)

    await page.locator("input[name='password']").fill(logindata.password)

    await page.locator("button[type='submit']").click()

    //Assertions

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

})

test ("Verify Login with Valid username and invalid password ", async ({page})=>{

      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

     await page.locator("input[placeholder='Username']").fill("Admin")

     await page.locator("input[name='password']").fill("admin1235")

     await page.locator("button[type='submit']").click()

     //Assertions

     await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})

test ("Verify Login with Invalid username and Valid password ", async ({page})=>{

      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

     await page.locator("input[placeholder='Username']").fill("srinivas")

     await page.locator("input[name='password']").fill("admin123")

     await page.locator("button[type='submit']").click()

     //Assertions

     await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})

test ("Verify Login with Invalid username and InValid password ", async ({page})=>{

      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

     await page.locator("input[placeholder='Username']").fill("srinivas")

     await page.locator("input[name='password']").fill("admin")

     await page.locator("button[type='submit']").click()

     //Assertions

     await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})





