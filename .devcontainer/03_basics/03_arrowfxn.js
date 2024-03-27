

const user = {
    username : "Sanju",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  // this is refering current context
        console.log(this); 
    }
}
//  user.welcomeMessage()
//  user.username = "Sam"
//  user.welcomeMessage()

//console.log(this)  // empty object ko refer kar rha kyoki global mai koi context hi nhi hai
// function samosa (){
//     let username = "Sanju"
//     console.log(this.username)  // undefined aayega , fxn mai use nhi kar skte only objects mai
// }
// samosa()

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);  // abhi bhi undefined hi aayega
// }
//++++++ARROW FUNCTION++++++++++//
const chai = () => {
        let username = "Sanju"
        console.log(this)
}
chai()
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(2.3,4))

//+++++++++Implicit return +++++++++++++++++//
//const subtractTwo = (num1,num2)=> num1-num2    // no need of paranthesis and return keyword  , agr curly paranthesis use hue to return keyword likhna hi pdega
const subtractTwo = (num1,num2) => (num1-num2)   // ye bhi implicit ki hi type hai
console.log(subtractTwo(6,3))

// agr object return kar rhe hai to usko paranthesis/() mai wrap karna hi pdega
const objectReturn = (one,two) => ({username: "AAluu"})
console.log(objectReturn("mummy","papa"))

const myArray = [2,5,3,7,8]

