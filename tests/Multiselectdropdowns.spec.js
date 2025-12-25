const {test,expect} =require('@playwright/test')

test("Handle multiselectdropdowns", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //select multiple options from multi select dropdown
     //await page.selectOption("#colors" , ['Red', 'Blue', 'Yellow', 'Green')

     //Assertions
     //1).check number of options in dropdown
     //const options=await page.locator("#colors option")
    // await expect(options).toHaveCount(7)

     //2).check number of options in dropdown using js array
     //const options=await page.$$("#colors option")
     //console.log("Number of options is:", options.length)
     //await expect(options.length).toBe(7)

     //3).check presence of value in the dropdown
     const content =await page.locator("#colors").textContent()
     //await expect(content.includes('Blue')).toBeTruthy();
     // await expect(content.includes('Orange')).toBeTruthy();
      await expect(content.includes('Orange')).toBeFalsy();

     await page.waitForTimeout(5000)




})