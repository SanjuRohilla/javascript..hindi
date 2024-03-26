//const tinderUser = new Object()   // singleton (constructor) object
const tinderUser = {}
//console.log(tinderUser)  // empty object print hoga
tinderUser.id  = "123abc"
tinderUser.name = "jk"
tinderUser.isLoggedIn = "false"
console.log(tinderUser)
// tinderUser object ki sari keys object k bahar declare hui

const regularUser = {
    email: "mummy@pm.com",
    fullname: {
           userfullname: {
            firstname:  "sanju",
            lastname: "rohilla"
           }
    }
}

//console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj4 = {5: "e" , 6: "f"}
//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign(obj1,obj2,obj4) //aisa karne pe saari keys obj1 mai ja ri hain
//const obj3 = Object.assign({},obj1,obj2,obj4)   //aise obj1,obj2,obj4 ki keys { } mai ja ri hain
//console.log(obj3)

//console.log(obj1)


const obj3 = {...obj1,...obj2,...obj4}    // spread vala syntax
//console.log(obj3)

// ARRAY K ANDAR OBJECTS
const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }

]

// console.log(users[1].email)
// console.log(Object.keys(tinderUser))  //isse tinderuser object ki saari key array bn jayengi
// console.log(Object.values(tinderUser))  // Object ki saari value get converted into array
// console.log(Object.entries(tinderUser))  // array k andar array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}
// course.courseInstructor
const{courseinstructor: instructor}= course  // destructure of keys
console.log(instructor)
//API , apna kaam kisi or k sir pe daal dena , json se value aati hai


// API IN OBJECT FORMAT
// {
//   "name": "Sanju"  ,
//   "coursename": "js in hindi",
//   "price": "free"
// }

//API IN ARRAY FORMAT

[
    {},
    {},
    {},
]


