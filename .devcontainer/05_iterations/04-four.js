const  myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

// forin loop for objects
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// forin loop on array
const programming = ['js',"rb","py","java"]
for (const key in programming) {
    console.log(programming[key]);
}

// forin loop on map  (Not iterable)

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// for (const [key,value] in map) {
//     console.log(key , value)
// }







