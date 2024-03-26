
//var c = 200
let a = 300
if(true){
    let a = 10
    const b = 20 
    //var c = 30 
    //console.log("INNER:",a)
} 
//console.log(a);   // nhi hoga print kyonki a if block k andar declare hua hai
//console.log(b);
//console.log(c);
// Var scope k bahar bhi print ho jaata hai

function One(){
    const username = "Sanju"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//One()                    line 24 pe k baad One() fxn ka execution hua , phir line 22 k karan Two() fxn ka execution hua jisme username console karna tha

if (true) {
    const username = "Sanju"
    if (username === "hitesh") {
        const website = "youtube"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);

//+++++++++++++++++++++++++++INTERESTING (hoisting)+++++++++++++++++++++++//
console.log(addone(5))
function addone(num){
     return num+1
}
//console.log(addone(5))

//console.log(addtwo(5))
const addtwo = function(num){
    return num+2
}











