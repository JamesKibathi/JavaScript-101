/* JS Comparison Operators => They all return boolean values

1.Relational - compare values in relation to one another

2.Abstract(or loose)-check to see if the values are the same

3.Strict - check to see if the values are the same AND the same type    

*/

/* Relational Comparison Operators */
let x=7
// > more than
console.log(
    x>10, //false
    x>6 //true
)
// >= more than or equal to
console.log(
    x>=10, //false
    x>=7  // true
)

// < less than
console.log(
    x < 10, //true
    x < 6 //false
)
// <= less than or equal to
console.log(
    x <= 10, //true
    x <= 7  // true
)

/* Abstract or Loose Equality Operators */
// == equal to
console.log(
    x == 7, //true
    x == 6 //false
)

// != not equal to
console.log(
    x!=7 //false
)

/* Strict Equality Operator */
// === strict equality

let y = "7"
console.log(
    x === 7, //true
    x === y
) 

// !== strict not equal to
console.log(
    x!==y  //true
)

//comparing strings

console.log(
    'A' < 'z' //true
)

let a = 'Time'
let b = 'Timing'
console.log(
    a > b  // false ==> 'e' > 'i'
)

// Exercise
let aa = 10
let bee = 15

console.log(aa > bee)

console.log (aa == "10")

console.log( aa === "10")

let ex="5"
let wy=6

console.log(ex !== wy) //true