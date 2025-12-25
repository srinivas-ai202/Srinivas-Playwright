 const {test, expect} =require('@playwright/test')

          test('Assertions Test', async({page})=>{

            await page.goto("https://demo.nopcommerce.com/register")

            //expect(page).toHaveURL( ) -- Page has URL
            await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

            // expect(page).toHaveTitle() -- page has title
             await expect(page).toHaveTitle("nopCommerce demo store. Register")

            //expect(locator).toBeVisible()   --Element is  Visible
             const  logoElement= await page.locator('.header-logo')
             await expect(logoElement).toBeVisible()
              
            //expect(locator).toBeEnabled()    --Control is enabled
            const searchStoreBox = await page.locator("#small-searchterms")
            expect(searchStoreBox).toBeEnabled()

            //expect(locator).toBechecked()    --Radio/checkbox is checked
            //radio button
             const maleRadioButton =await page.locator('#gender-male')
             await maleRadioButton.click()  // select male radio button
             expect(maleRadioButton).toBeChecked()

            //check box
             const newsletterCheckbox =  await page.locator('#Newsletter')
             await expect(newsletterCheckbox).toBeChecked()
            
             //expect(locator).toHaveAttribute() --Elements has attribute
            const registerButton =  await page.locator('#register-button')
            await expect(registerButton).toHaveAttribute('type', 'submit')

            //expect(locator).toHaveText()      --Elements matches text
             await expect(await page.locator('.page-title h1')).toHaveText("Register") //full text

            //expect(locator).toContainText()   --Elements Contains text
             await expect(await page.locator('.page-title h1')).toContainText("Reg") //partial text

            //expect(locator).toHaveValue(value) --Input has a value
            const inputEmail= await page.locator('#Email')
            await inputEmail.fill('demo@123.com')
            await expect(inputEmail).toHaveValue('demo@123.com')

            //expect(loactor).toHaveCount()    --List of elements has given length
            


 })