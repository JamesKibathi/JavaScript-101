/* Used to loop over a piece of code a set number of times. It's made up of:

1. The Initializer - executed before anything else
2. The Condition - condition is checked, code block runs as long as condition is true
3. The Final Expression - action that is taken as long as the condition is true

*/

for (let i = 0; i <= 10 ; i++){
    console.log(i)
}

// For Loop - perfect for situations where we exactly know the number of iterations or loops

// *** Tasks ***
let colors = ["Blue","Black","Red","Orange","Green"]

for (let i=0 ; i < colors.length ; i++){
    console.log (`${colors[i]} is my fav color`)
}