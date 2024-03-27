// for of loop
// Array specific loop

//["","",""]    // Array k andar string
//[{},{},{}]    // Array k andar Object
const arr = [1,2,3,4,5]

for (const index of arr) {
    console.log(index);
}

const Astring = "   Sanju  Rohilla  "
for (const iterator of Astring) {
        console.log(iterator);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
 // +++++++MAPS+++++++++++ //
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map)

// map => Key , Value k unique pair order wise

for (const [key,value] of map) {
    console.log(key , ':-' , value);
}

// +++++++++ Object pe for of loop ++++++++++//

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}
for (const [key,value] of myObject) {
    console.log(key , ":-", value)
}
// Object is not iterable by for of loop

