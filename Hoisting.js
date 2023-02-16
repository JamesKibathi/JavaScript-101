/* 
Hoisting - default behaviour where variables and
function declarations are moved to the top of their scope
before code execution 
- It's only declarations that are hoisted and not initializations
*/

hello()
function hello(){
    console.log("Hello world")
}

/* declaration */
let game;
console.log(game) // undefined

/* initialization */
game="Super Mario"
console.log(game)