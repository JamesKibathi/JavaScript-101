//NB:Unlike date, math is not a constructor - doesn't need to use new key word
const PI=Math.PI
console.log(PI.toFixed(2))

//min() - returns the lowest number in a list

let min=Math.min(2,1,57,100,70)
console.log(min)

//max()-returns the highest number in a list
let max=Math.max(5,87,21,51,100)
console.log(max)

//pow(a,b)-outputs a to the power of b
let pow=Math.pow(5,3)
console.log(pow)

//Random - returns a random number btwn 0 and 1
let random=Math.random()
console.log(random)

console.log(random.toFixed(1)*10)

// Math.floor()-rounds down a number to the nearest integer
console.log(Math.floor(5.7))
//Math.round - returns a number rounded to it's nearest integer
console.log(Math.round(5.7))

/*
SUMMARY
# The Math object - provides several methods for managing, manipulating and
  formating numbers

*/