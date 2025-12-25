 //const {test, expect} =require('@playwright/test')

 import{test,expect} from '@playwright/test'

 test('Home page', async ({page})=>{

   await page.goto("https://demoblaze.com");
  
   const pageTitle=await page.title();
   console.log('The page title is:', pageTitle);
  
    await expect(page).toHaveTitle('STORE');

    const pageURL=await page.url();
    console.log('The page URL is',pageURL);

    await expect(page).toHaveURL('https://demoblaze.com');

    await page.waitForTimeout(5000)
  
    await page.close();

})