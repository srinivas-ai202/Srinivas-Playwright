const{test, expect}= require('@playwright/test')

test('Handle hidden dropdown' , async({page})=>{

     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

         await page.getByPlaceholder("Username").fill('Admin')
         await page.getByPlaceholder("Password").fill('admin123')
         await page.locator('[type="submit"]').click();

        // await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[2]")
         await page.locator('//span[text()="PIM"]').click();////span[text()='PIM']
         await page.locator("(//div[@class='oxd-select-text-input'])[3]").click();
         await page.click('text=Account Assistant');

         await page.waitForTimeout(5000);




})