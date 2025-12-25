const{test, expect} =require('@playwright/test')
//only
/*test.only("test1", async({page})=>{
    console.log("this is my test1")
})*/

//skip
/*test.skip("test2", async({page})=>{
    console.log("this is my test2")
})*/

//conditional based skip
/*test("test3", async({page,browserName})=>{
    console.log("this is test3")
    if(browserName==='chromium')
    {
        test.skip()
    }
})*/

//Fixme it is also similar to the skip annotation
 /*test.fixme("test4", async({page})=>{
   console.log("this is test4")
})*/

//Fail Annotation
/*test("test5", async({page})=>{
    test.fail()  //expectation
    console.log("this is my test5")
    expect(1).toBe(2); //actual  //If both exp & actual is failed then test pass

})*/

/*test("test6", async({page,browserName})=>{
    console.log("this is my test6")
    if(browserName==='firefox')
    {
    test.fail() 
    }
})*/

//Slow Annotation
test("test47", async({page})=>{
   //test.slow()
   test.setTimeout(8000)
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   console.log("this is my test7")
   //await page.waitForTimeout(3000)
})
