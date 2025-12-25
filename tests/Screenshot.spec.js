 import{test, expect} from '@playwright/test'

 test("page screenshoot", async({page})=>{
     await page.goto("https://www.flipkart.com/")
     await page.screenshot({ path:'tests/screenshots/'+Date.now()+'Homepage.png'})
     await page.waitForTimeout(5000)


 })

 test("fullpage screenshot", async({page})=>{
 await page.goto("https://www.flipkart.com/")
     await page.screenshot({ path:'tests/screenshots/'+Date.now()+'fullpage.png',fullPage:true})
     await page.waitForTimeout(5000)


})

test.only("Element screenshot", async({page})=>{

     await page.goto("https://www.flipkart.com/")
     await page.locator('//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[2]/div[1]/div/div[3]/div/div/div/div/div/div/div[2]/div/div/div/div[3]/div/div/div/a/div/div/div[1]/picture/img')
     .screenshot({ path:'tests/screenshots/'+Date.now()+'macbook.png'})

})