// const{test, expect}= require('@playwright/test')

 import{test, expect} from '@playwright/test'

    test.beforeAll( async()=>{
        console.log("This is beforeAll hook............")
    })

    test.afterAll( async()=>{
        console.log("This is AfterAll hook............")
    })

    test.beforeEach( async()=>{
        console.log("This is beforeEach hook............")
    })


    test.afterEach( async()=>{
        console.log("This is AfterEach hook............")
    })


 test.describe.skip('Group 1', ()=>{

     test('test1', async({page})=>{

    console.log('this is my test1.........')
     })

     test('test2', async({page})=>{

    console.log('this is my test2.........')

    })
         
  
 })

test.describe('Group 2', ()=>{

test('test3', async({page})=>{

    console.log('this is my test3.........')

 })

 test('test4', async({page})=>{

    console.log('this is my test4.........')
})
        
})



 

