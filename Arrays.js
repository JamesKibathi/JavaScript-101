/* Array - an ordered list of values */

let supers = ["Superman", "Batman" , "Flash", "Aquaman"]

console.log(supers[0]) // Arrays are zero indexed

supers[4]="Wonder Woman" // insert an element 

console.log(supers)

delete supers[2] // deletes an element from an array

console.log(supers)

// Multidimensional Array - Array inside and array
let data=["James", "Mike","Kim",2,"dance",true,["code","design","watch"]]
console.log(data[6][1])

// Tasks

let countries= ["Kenya","USA","Canada"]
countries[3]="Singapore"
console.log(countries)

let colors =["Red","White","Black",["Orange","Green","Purple"]]
console.log(colors[3][2])