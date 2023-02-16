// Spread Operator 
/* Allow objects and iterables to be unpacked(or spread out)
into individual values. Writen in 3 dots and used over arrays,
Objects and Functions */
let nums=[1,2,3]
let myArray=[...nums,4,5,6]
console.log(nums)
console.log(myArray)

// spread with objects
let book={
    title:"Clash of the Titans",
    release:"20/8/2004",
    author:"C.s Lewis"
}

const updatedBook={
    ...book,characters:"Peter,Susan,Edmund"
}

console.log(book)
console.log(updatedBook)

// spread with function calls
function sum(a,b,c){
    return console.log(a+b+c)
}
const numbers=[1,2,3]
sum(...numbers)