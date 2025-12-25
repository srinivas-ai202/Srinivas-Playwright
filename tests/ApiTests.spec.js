 const {test ,expect, mergeExpects} = require('@playwright/test')

 var userid;

 test("Get users", async({request})=>{
     
      const response=await request.get('https://reqres.in/api/users?page=2')
      console.log(await response.json())
      expect(response.status()).toBe(200)

 })

  test.only("Create users", async({request})=>{
     const response=await request.post('https://reqres.in/api/users',

                               {  
                                data:{ "name":"srinivas", "job":"playwright tester"},
                                headers:{"Accept":"application/json"}
                                }); 

     console.log(await response.json())  
     expect(response.status()).toBe(201) 
     
     var res= await response.json()
     userid=res.id

 })

  test("Update users", async({request})=>{


 })

  test("Delete users", async({request})=>{


 })