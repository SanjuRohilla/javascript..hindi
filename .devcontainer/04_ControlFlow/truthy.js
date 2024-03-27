const userEmail = "sanju@boss.com"

if (userEmail){
    console.log("Got user Email");
} else{
    console.log("Don't have user email");
}

// falsy values
// false , 0 ,-0 , BigInt , 0n , "",null , undefined ,NaN

// truthy values
// "0" , 'false' , " " , [] , {} , function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
// false == 0 == ''

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5??10
// val1 = null??10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//+++++++++TERNIARY OPERATOR++++++++++++//
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Price less than 80") : console.log("Price more than 80")

