const{test, expect} =require('@playwright/test')

test("Video recording", async({page})=>{

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page.getByPlaceholder("Username").fill('Admin')
   await page.getByPlaceholder("Password").fill('admin123')
   await page.locator('[type="submit"]').click();
   await page.waitForTimeout(5000);
})