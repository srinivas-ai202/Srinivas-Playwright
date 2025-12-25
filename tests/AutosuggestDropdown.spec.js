
     const {test,expect}= require('@playwright/test')

     test("Handle Autosuggest Dropdown",  async ({page})=>{

        await page.goto("https://www.apsrtconline.in/")

        await page.locator("#fromPlaceName").fill('Hyderabad')

        await page.locator("//span[normalize-space(text())='HYDERABAD']").click();

         await page.locator("#toPlaceName").fill('Bangalore')

        await page.locator("//span[normalize-space(text())='WHITEFIELD-BANGALORE']").click();

        await page.locator("#txtJourneyDate").click()

        await page.click('text="20"')

        await page.locator('#searchBtn').click()

        await page.waitForTimeout(5000);







     })