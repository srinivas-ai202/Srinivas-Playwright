 const{test, expect}=require('@playwright/test')

 test("Alert with ok ",  async({page})=>{

      await page.goto("https://testautomationpractice.blogspot.com/")

      //Enabling Dilaog window handler
      page.on('dialog', async dialog=>{
      expect(dialog.type()).toContain('alert')
      expect(dialog.message()).toContain('I am an alert box!')
      await dialog.accept(); //close by using ok button
    })
       await page.click('#alertBtn')
       await page.waitForTimeout(5000);

})

 test("Confirmation Dialog -Alert with ok and cancel",  async({page})=>{

      await page.goto("https://testautomationpractice.blogspot.com/")

      //Enabling Dialog window handler
      page.on('dialog', async dialog=>{
      expect(dialog.type()).toContain('Confirm alert') //what type of alert this confirmation alert
      expect(dialog.message()).toContain('Press a button!') 
      await dialog.accept(); //close by using ok button
      //await dialog.dismiss(); //close by using cancel button
    })
       await page.click('#confirmBtn')
       await expect(page.locator('#demo')).toHaveText('You pressed OK!')
       await page.waitForTimeout(5000);

})       

 test("Prompt Dialog ",  async({page})=>{

      await page.goto("https://testautomationpractice.blogspot.com/")

      //Enabling Dialog window handler
      page.on('dialog', async dialog=>{
      expect(dialog.type()).toContain('Prompt Alert') //what type of alert this is prompt alert
      expect(dialog.message()).toContain('please enter your name:') 
      expect(dialog.defaultValue()).toContain('Harry Potter')
      await dialog.accept(); 
      //await page.waitForTimeout(5000);
    })
       await page.click("//button[@id='promptBtn']")
       await expect(page.locator('#demo')).toHaveText('Hello Srinivas! How are you today?')
       await page.waitForTimeout(5000);

})       