const promiseOne = new Promise(function(resolve, reject){
   //Do async task
   // DB calls , cryptography , network
    setTimeout(function(){
         console.log("Sanju");
         let error = false;
         if(!error){
            resolve("hii");
         }
         else{
            reject();
         }
         resolve();
    }, 2000);
})
promiseOne.then(function(user){
    console.log(` ${user} is a good girl. `);
}).catch(function(){
    console.log("is a bad girl");
}).finally(function(){         // run even if promise is resolved or not resolved.
    console.log("Kar lia judge")     
})

let x = 5;
new Promise(function(resolve , reject){
 setTimeout(function(){
    if( x%2 == 0){
        resolve();
      }
      else{
        reject();
      }
 }, 2000)
     
}).then(function(){
    console.log(` ${x} is an even number `);
}).catch(function(){
    console.log(` ${x} is an odd no. `)
});


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
      resolve({username: "Chai"  , email: "sa343@gmail.com" })
    }, 1000)
})
promiseThree.then(function(user){
         console.log(user.username);
})

const promiseFour  = new Promise(function(resolve , reject){
    setTimeout(function(){
         let error = false ;
         if(!error){
            resolve({username: "Sanju" , email: "sanju@gmial.com"})
         }else{
            reject('ERROR: Kuch to gadBAD Hai')
         }
    }, 1000)
}).then(function(user){
    console.log(`${user.username} is the Culprit`)
    return user.username;
}).then(function(ohh){
    console.log(ohh)             // this is then chaining the returned value from user then function is returned as parameter to next then
}).catch(function(error){
    console.log(error);
}).finally(() => {          //Executes everytime
   console.log("Jo hone tha Vo ho gya")
})

const promiseFive  = new Promise((resolve , reject) =>{
    setTimeout(function(){
       let error = true;
       if(!error){
        resolve({username: "Don" , email: "S@gmail.com"})
       }else{
        reject('ERROR: something went wrong');
       }
    },1000)
});

// It's not neccessary to handle Promise everytime 
//with .then and .catch , we can use async and await also.
// ASYNC AWAIT :- CAN'T HANDLE ERRORS DIRECTLY

async function consumePromiseFive(){
    // TRY CATCH BLOCK            (ERROR HAndle gracefully)
    try {
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

//FETCH

// async  function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');              // network request hai time lagega to await ka use krenge
//         console.log(response); 
//         const data = await response.json();    // iskobhi time lgta to await karana pdega
//         console.log(data);
    
//     }catch(error){
//         console.log("Error : " ,error);
//     }
// }
// getAllUsers()


//Fetch ka response ik promise ata hai , vo fail bhi ho skta pass bhi to .then() .catch() ka  bhi use kar liya

fetch('https://api.github.com/users/SanjuRohilla')
.then((response)=> {
    return  response.json()
})
.then((data) => {
    console.log("data");
})
.catch((error) => {
    console.log(error);
})








