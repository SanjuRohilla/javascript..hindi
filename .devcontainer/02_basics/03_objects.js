// singleton
// Object.create (constructor method , singleton)
// literals ki trah declare karte hain tab singleton nhi bnta



// object literals

//symbol
const mySym = Symbol("key1")

const JsUser = {
    name : "Sanju" ,    //bydefault name (key) ik string ki trah hai
   "full name" : "Sanju Rohilla",  //agr fullname key pe " " ho to
    [mySym] : "mykey1",  // symbol as object keys
    age : 18 ,     
    location: "Raipur",
    email: "sanju@google.com" ,
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
console.log(JsUser) //symbol sabse last mai print hota hai

// Access of object
console.log(JsUser.email)   // dot se access 
console.log(JsUser["email"])   // sq. bracket se access
console.log(JsUser["full name"])   // isko sirf sq. bracket se hi access kar skte hain
console.log(JsUser[mySym])// symbol ko object ki key ki trah use karna hai to sq. bracket ka use kro


JsUser.name = "rahul"  // for changing value of any key
JsUser["full name"]="rahul kumar"
//Object.freeze(JsUser)   //is line k baad likhi koi line mai change nhi hoga
console.log(JsUser["name"])
console.log(JsUser["full name"])
JsUser[mySym]= "num2"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting)  // Function(anonymous)  function execute nhi hua hai sirf fxn ka ref aaya hai
console.log(JsUser.greeting())  // Function print ho jayega , undefined pta nhi kyu aata hai
console.log(JsUser.greetingTwo())
















