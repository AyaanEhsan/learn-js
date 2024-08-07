let age = 10
let name = "Ayaan"
let gid = "G01355098"

// console.log((age));
// console.log(name);
// console.log(gid);
// console.log(`Age is ${age}, Name is ${name}, GID is ${gid}`);

// Post and Prefix
let agePlus = age++
// console.log(` Before Postfix: ${age} After Postfix: ${agePlus}`);

let ageMinus = --age
// console.log(` Before Prefix: ${age} After Prefix: ${ageMinus}`);

// Non-premitive data type === Reference type
let arrAy = [1,2,3,4,5]
let obJect = {name: "Ayaan", age: 10}
let functionName = () => { 
    console.log("Function has been called"); 
}

console.log(`arrAy: ${arrAy}, obJect: ${obJect.age}`);
console.log(`type of arrAy: ${typeof(arrAy)}, type of obJect: ${typeof(obJect)}, type of function ${typeof(functionName)}`);
functionName()

