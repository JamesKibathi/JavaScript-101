/* JS 'FALSY ' VALUES 
Following values are considered to be falsy
1. Boolean (false)
2. Undefined
3. null
4. ""- empty string
5. NaN - not a number
6. 0 - zero
*/

// JS LOGICAL OPERATORS
// ! NOT (or negation)
// && AND 
// || OR
// Nullish Coalescing

// 1. ! NOT (or negation)
let a = 1; //truthy value
a = !a
console.log(typeof a, a)

let b = 0 // falsy value
b = !b
console.log(typeof b, b)
// 2. && AND - checks if multiple operators evaluate to true

let x=1 //truthy value
let y = 0 // falsy value

if(x && y){
    console.log("hello") // both values must evaluate to true
}

// 3. || OR - only one of the values needs to be true

if (x || y){
    console.log("hello")
}

// *** Tasks ***
let aa = "Dev Dreamer"
let bee = ''

if (aa || bee){
    console.log ("hello") //console logs "hello"
}

if(aa && true && !bee){
    console.log("hello") //console logs 'hello'
}

let A = -1
let B =1

if(A && B){
    console.log("Evaluates to true")
}

/* 
## NULLISH COALESCING - returns the first argument if its not 
either null or undefined

## Written as ?? - returns the first argument if it's not 
either null or undefined otherwise it returns the second argument
*/

let game; //undefined
let game2 = null; //null 
let game3 = "Sonic"  // string

console.log(
    game ?? game3 // consoles Sonic
)

// USECASE (??) - used to provide a default value for undefined variables
let user;
console.log(user ?? "Guest" ); // if a user is undefined, output "Guest"
// ?? Works similar to || operator, but or does not distinguish between falsy values

let score=0; //falsy
console.log(score ?? "no score registered") // outputs 0

/* SUMMARY 
1. ?? - Returns the first defined value (a value that's not null or undefined)
2. || - Returns the first truthy value
3. USE CASES FOR ?? - When u want to provide a default value for a variable or 
when u want to use a default value that is also falsy
*/ 