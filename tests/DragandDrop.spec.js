
const{test, expect}=require('@playwright/test')

test("Handle drag and drop",  async({page})=>{
      await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

      await page.waitForTimeOut( )

})