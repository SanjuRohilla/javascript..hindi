const name = "sanju"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) ; //String InterpolATION

const gameName = new String('sanju-rohilla-don')
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-13,5)
console.log(anotherString)

const newStringOne = "   sanju    "
const newStringTwo = "   rahul    "
console.log(newStringOne)
console.log(newStringOne.trim()+newStringTwo.trim())

const url = "https://sanju.com/sanju%20rohilla" //browser space nhi smjhta vo space ko automatic '%' mai convert kar dega

console.log(url.replace('%20' , ' '))

console.log(url.includes('%20'))

console.log(gameName.split('-')) //string to array based upon separator

console.log(String.fromCharCode(65535))
console.log(String.fromCodePoint(1,8))
const a = "❤️"
console.log(a)

let ab = "  Rahul   Kumar  "


const myArr = ab.split('')



