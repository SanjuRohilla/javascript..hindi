// Immediately Invoked Function Expressions (IIFE)   ()()
// global scope k pollution se problem hoti hai kai baar , to global scope k variables ko hatane k liye iife ka use kiya
(function chai(){
    console.log(`DB Connected`)
})() ; //  ye code end karne k liye yhe explicitly semicolon lagaya

// doo iife ik sath likhte hai to semi-colon ka use karte hai
// iife ka use implicit fxn k liye bhi kar skte hai

((name)=>{
    console.log(`hii, My name is ${name}`)
})('Sanju')
















