const{test, expect} =require("@playwright/test")

test("Handle mouserhover events",  async({page})=>{

    await page.goto("https://demo.opencart.com/")

   // const desktops= await page.locator("//a[normalize-space()='Desktops']")
   // const macbook= await page.locator("//a[normalize-space()='Mac (1)']")////div[@class='_1wE2Px']
   
    //mousehover
   // await desktops.hover()
   // await macbook.hover()
   

    await page.waitForTimeout(5000);




})