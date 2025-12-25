const{test, expect}=require('@playwright/test')

test('Handle Double click', async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")

        await page.waitForTimeout(5000);
        const btnCopy=  await page.locator("//button[normalize-space(text())='Copy Text']")

        //Double click( )
        await btnCopy.dblclick()

        const f2=await page.locator('#field2')

        await expect(f2).toHaveValue('Hello World!')
        await page.waitForTimeout(5000);
})