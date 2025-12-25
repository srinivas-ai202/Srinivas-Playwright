const {test, expect}= require('@playwright/test')

test("Handling Tracing", async({page})=>{

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page.getByPlaceholder("Username").fill('Admin')
   await page.getByPlaceholder("Password").fill('admin123')
   await page.locator('[type="submit"]').click();
   await expect(page.locator("//span[text()='Admin']")).toBeVisible();
   await page.waitForTimeout(5000);


})