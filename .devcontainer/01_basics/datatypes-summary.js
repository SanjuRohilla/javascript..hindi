//*********PRIMITIVE DATATYPE***********//
/* All primitive type are call by value , original 
refrence of memory is not given , inko copy karke diya jaata
hai and jo bhi hum changes karte hai vo copy mai hote hai
1. String 2. Number 3. Boolean 4. Null  5. Undefined 6. Symbol 7. BigInt */
   const score = 100
   const scoreValue = 100.3
   const isLoggedIn = false
   const temp = null
   let userEmail;  //aise bhi undefined hota hai
   let userEm = undefined 
   const id = Symbol('123')
   const anotherId = Symbol('123')
   console.log(id)
   console.log(anotherId)
   console.log(id===anotherId)

   const bigNumber = 345785495643754n
//Java Script is DYNAMICALLY TYPED language, runtime

//Refrence datatypes (Non primitive)
//Array , objects, functions */
 
  const heros =["shaktiman","naagraj","doga"] //array

  // curly braces k andar vali chize object hai , dtatype kuch bhi ho skt hai

  let myObj = {
       name: "sanju",
       age: 19,
  }     

  const myFunction = function(){
      console.log("Hello World")
  }

  console.log(typeof bigNumber);
  
