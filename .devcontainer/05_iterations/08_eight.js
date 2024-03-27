const myNums = [1,2,3,4]

//  const myTotal =  myNums.reduce(function (accumulator,currentValue) {
//      console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`)
//     return accumulator+currentValue

//  },0)

const myTotal = myNums.reduce((accumulator,currentValue) => accumulator+currentValue , 0)
 console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js Coure",
        price: 2999
     },
     {
        itemName: "python Coure",
        price: 999
     },
     {
        itemName: "mobile dev Coure",
        price: 5999
     },
     {
        itemName: "data science Coure",
        price: 12999
     }

]

// Saare items k price ko add kar do

console.log(shoppingCart.reduce((accumulator,item) => accumulator+item.price,0))











