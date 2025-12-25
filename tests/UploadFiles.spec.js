 const{test, exepct}= require('@playwright/test')

 test('Handle Single files',  async({page})=>{

         //Go through video for single file up load 

 })

 test.only("Handle Multiple files", async({page})=>{
     
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

         await page.waitForTimeout (5000)      
         await page.locator("//input[@id='filesToUpload'])[1]")
            .setInputFiles(['tests\filesUpload\note1.txt',
                            'tests\filesUpload\note2.txt'])
                            

        await page.waitForTimeout (5000)  


        expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('note1.txt') 
        expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('note.txt')

        await page.waitForTimeout (3000) 
        
        //Removing files
        await page.locator('#filesToUpload').setInputFiles([])
        await page.waitForTimeout (3000)

        expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected') 




    
})