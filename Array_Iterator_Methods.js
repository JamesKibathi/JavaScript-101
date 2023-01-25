// Used loop over an array

let supers=['Spiderman','Batman','Flash','Aquaman','Thor','Spider-Man','Wolverine','Cyclops','Professor X'];

// 1. forEach
supers.forEach((value,index,array)=>{
    console.log(`The index of ${value} is ${index}`)
})

// 2. map - similar to forEach but returns a new array

function upperCase(value){
    return value.toUpperCase();
}

let supersCap=supers.map(upperCase)
console.log(supersCap)

let nums =[1,2,3]

function double(x){
    return x*2;
}

let doubled=nums.map(double);
console.log(doubled)

// 3. filter - used to filter thru an array, takes each element of an array, apply
//a conditional statement to it, if true the value gets added to the new array,  if false, it doesnt get added to the new array

let numbers=[1,4,8,2,9,52,77,21,64,13,34,100]
let evenNumbers=numbers.filter((value,index,array)=>{
    return value %2 ===0
})

console.log(evenNumbers)

// 4. Reduce - runs a fn on each value of the array and reduce the array
// down to a single value

let sum = numbers.reduce((total,value,index,array)=>{
  return total + value;
})

console.log(sum)

/* 5. Some - iterates over an array to check if a given condition is true
for atleast one of the values. If it is, it returns true. If not, it returns false */

let nos=[1,2,3,11]

let highThanTen= nos.some((value)=>{
    return value > 10
})

console.log(highThanTen)

/* 6. Every - check if every element meets a condition, only there and then it
returns true, else it returns false  */

let allHigherThanTen=nos.every((value)=>{
    return value > 10
})

console.log(allHigherThanTen)

/* 7. Find - Iterates an array to check if it contains a value, if it 
does it returns a value  */

let findSuper=supers.find((value)=>{
    return value === "Thor"
})

console.log(findSuper)

/* 7. findIndex - Iterates an array to check if it contains a value, if it 
does it returns the index of the value  */

let findIndex=supers.findIndex((value)=>{
    return value === "Thor"
})

console.log(findIndex)