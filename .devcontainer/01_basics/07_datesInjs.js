let myDate = new Date()
/////TYPE OF DATE IS OBJECT///////
/*
console.log(myDate.toString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toUTCString())
*/

//let myCreatedDate = new Date(2023,0,23)
//console.log(myCreatedDate.toDateString())

//let myCreatedDate= new Date(2023,0,23,5,3)
let myCreatedDate= new Date("1970-01-01")
console.log(myCreatedDate.getTime())  // getTime() fxn se mili sec from 1 jan ,1970 to that date
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()   // .now() se milli sec vali value aati hai
//console.log(myTimeStamp)  ////mili sec value from 1 jan , 1970

//console.log(Math.floor(Date.now())/1000)

let newDate = new Date()
console.log(newDate.getMonth()+1) // jan = 0 se start hoga , +1 isiliye kar diya jaata hai taki end user ko confusion na ho
console.log(newDate.getDay()); // Monday = 1 that upto 7

//`${newDate.getDay()} and the time is`

 console.log(newDate.toLocaleString('default',{
    weekday: "long",
    
 }))




