 const{test, expect} =require('@playwright/test')

 test("Handle Iframes", async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    //total frames
     const allframes=await page.frames()
     console.log("Number of frames:", allframes.length)

     //Approach 1:using name (or) URL's
     //const var =await page.frame('name');  if name is present
      // const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
      // await frame1.fill('[name="mytext1"]', 'Hi srinivas');

      //Approach 2:using frame locator
      const inputbox=await page.frameLocator("frame[src='frame_1.html']").locator('[name="mytext1"]');
      await inputbox.fill('Hi srinivas');

      await page.waitForTimeout(5000);

 })    
     





