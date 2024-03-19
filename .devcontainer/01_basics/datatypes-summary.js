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

// Memory storing 
// Stack (Primitive) , Heap (Non-Primitive)

let myMummyname = "anita"
let anotherName = myMummyname
anotherName = "motimummy"

console.log(myMummyname)
console.log(anotherName)
/**********STACK MEMORY************/
//upar li gyi values primitive datatypes hai ,
// inme kisi chij ki copy ka  aadan pradan 
// hota hai naa ki actual value ka ✌️❤️
// yha anotherName ki value  mai change karne
// se MyMummyname ki value change nhi hui
let userOne = {
      email: "user@google.com",
      upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "sanju@google.com"
console.log(userOne)
console.log(userTwo)

/************HEAP MEMORY*********/
// referance ya non-primitive datatype mai 
//value ik heap mai store hoti hai jha ik jagah value
// change karne se har jagah value change hoti hai
// jaise userTwo object ki email change karne se userOne
// object ki email bhi change ho jayegi
