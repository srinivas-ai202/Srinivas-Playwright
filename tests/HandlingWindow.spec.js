    const { test, expect, chromium}= require('@playwright/test');

    test('Handling windows/page', async()=>{

      const browser= await chromium.launch()
      const context= await browser.newContext()

      const page1= await context.newPage()
      const page2= await context.newPage()

      const allpages= context.pages()
      console.log("No of pages created:", allpages.length)

     await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     await page1.waitForTimeout(3000) 
     expect (page1).toHaveTitle('OrangeHRM')

     await page2.goto("https://www.orangehrm.com/")
     await page1.waitForTimeout(3000) 
     expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software ')

 })

  test.only('Handling Multiple pages', async()=>{

      const browser= await chromium.launch()
      const context= await browser.newContext()

      const page1= await context.newPage()
      await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      await page1.waitForTimeout(3000) 
      expect (page1).toHaveTitle('OrangeHRM')

      const pagePromise= context.waitForEvent('page')
      await page1.locator("//a[normalize-space(text())='OrangeHRM, Inc']").click()
     
      const newpage= await pagePromise;
      await expect(newpage).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software ')

      await page1.waitForTimeout(3000)
      await newpage.waitForTimeout(5000)


 })