/* Introduced with ES6 update(2015), provide a new
and shorter way to write anonymous function expressions
- Always anonymous */
const sum=function(a,b){
    return console.log(a+b)
}
sum(5,5)

// Arrow function
const sum2=(a,b)=>{
    return console.log(a+b)
}
sum2(2,5)

// implicit return - no need to use return keyword

const game=()=>"sonic"
console.log(game())

/* Summary */
// Since arrow funct are anonymous, they must always be assigned a variable
// they do not have this, binding
// the value this keyword is determined based upon the lexical scope
