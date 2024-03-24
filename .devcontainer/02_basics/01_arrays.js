// array
// javascript ki array mai mixed datatypes ho skte hai , js arrays are resizablw

const myArr = [0,1,2,3,4,5]

// access of array elements  
// indexing of array starts from zero
//console.log(myArr[4])

// array-copy-operations create shallow copies , shallow copy is a copy whose properties share the same ref point i.e  change in org. array 

const myHeros = ['mummy','papa','nidhi','harshit','sanju']

// Array Methods

/*myArr.push(6) //org array mai 6 add ho gya
myArr.push('aalu')
myArr.push('gobhi')
console.log(myArr)  
myArr.pop() //end vali value ud jayegi
console.log(myArr)
myArr.unshift(8) //unshift array k starting mai elem add kar deta hai , isko ik bad practice mana jaata hai kyuki ,saare elements shift karne pd gye 
console.log(myArr)
myArr.shift()  //pop from array ki starting
*/
//console.log(myArr.includes(6)) // result boolean type
//console.log(myArr.indexOf(9)) // agr  elem present nhi hai to -tive index

// const newArr = myArr.join()   // adds all the elements of an array into a string

// console.log(myArr)
// console.log(newArr)
// console.log(typeof(newArr))

// SLICE AND SPLICE

console.log("A", myArr)

const myn1 = myArr.slice(1,3) // array index 1 to 3 k ekem without including index 3 elem
console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1,3)  // array index 1 to 3 dega including 3 lekin ord array se index 1 to 3 k elem hta dega
console.log(myn2)
console.log("C", myArr)

