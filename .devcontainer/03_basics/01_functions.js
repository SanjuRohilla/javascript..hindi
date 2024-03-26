// console.log("S");
// console.log("A");
// console.log("N");
// console.log("J");
// console.log("U");

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("U");
}

//sayMyName()    // fxn ka naam ho gya refrence , paranthesis lgane se execution

// function addTwoNumbers(number1,number2){   //number1 and number2 are parameters
//     console.log(number1+number2);
// }

//addTwoNumbers(3,5)  //3,5 are arguments
//const result = addTwoNumbers(3,5)
//console.log("Result" , result);  // Result undefined aayega , result vo aayega jo function ne return kiya

function addTwoNumbers(number1,number2){   //number1 and number2 are parameters
    //let result = number1+number2;
    //return result
    return number1+number2
    console.log("Sanju")  //ye print nhi hoga kyoki fxn ka rule hai koi value return karne k baad further execute nhi hoga
}

//const result = addTwoNumbers(3,5)

//console.log("Result:" , result)

function loginUserMessage(username = "Sam"){   // Sam is default value tab koi argument pass nhi kiya isse if block mai kabhi jayenge hi nhi
    if(username === undefined){    // if(!undefined)  khi khi aise likha hoga
        console.log("Please enter a username")
        return  // ye vala return isliye likha taaki aage fxn execute hi na ho
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Sanju"))

//console.log(loginUserMessage())


// we don't know ki kitne arguments aane vaale hain

function calculateCartPrice(val1,val2,...num1){  // rest operator ,  arguments in array
    return num1
}
//console.log(calculateCartPrice(200,400,500,200,700))


const user = {
    username: "Sanju",
    price: 199
}
function handleObject(anyObject){
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user);
handleObject({
    username: "Rahul", price: "200"
})
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
   return getArray[1]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400]))

