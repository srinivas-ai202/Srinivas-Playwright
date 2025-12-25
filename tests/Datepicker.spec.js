 const{test, expect}=require('@playwright/test')

 test('Handle Date Picker', async({page})=>{
       
      await page.goto("https://testautomationpractice.blogspot.com/")
     // await page.fill("#datepicker", "07/29/2025")

     //date picker
      const year ='2020'
      const month ='March'
      const date ='16'

      await page.click("#datepicker") //opens calender/ data picker

      while(true)
      {

          const currentYear= await page.locator('.ui-datepicker-year').textContent();
          const currentMonth= await page.locator('.ui-datepicker-month').textContent();//
          

          if(currentYear ==year && currentMonth ==month)
          {
            break;
          }
          
         // await page.locator('[title="Next"]').click(); //next button
          await page.locator('[title="Prev"]').click();  //Previous

      }
            const dates= await page.$$('.ui-state-default')
            //date selection using loop
             /* for(const dt of dates)
              {
                  if(await dt.textContent()==date)
                  {
                     await dt.click();
                     break;
                  }
              }*/

                  //date selection--without loop
                 await page.click(`//a[@class='ui-state-default'][text()='${date}']`) 
      
      
      await page.waitForTimeout(5000);
})