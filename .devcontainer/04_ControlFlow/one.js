// if
// const isUserLoggedIn = true
// const temperature = 41
// if (temperature < 50){  // condition should be true to enter if block
//   console.log(" temperature less than 50")
// }
// else{
// console.log("temperature is greater than 50")
// }
//  <,>,<=,>=,==,!= , ===(checks datatype)

// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

const balance = 600
// if(balance>500) console.log("test") , console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (isUserLoggedIn && debitCard && loggedInFromGoogle){
      console.log("Allow for shopping")
}
if ( loggedInFromGoogle || loggedInFromEmail){
    console.log("Successfully, logged in")
}







