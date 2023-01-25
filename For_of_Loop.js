/*
1.For..of - Used to loop over iterable data structures
- Can be used to loop over strings, arrays, maps

for (variable of iterable){
    
}

*/

let characters=['Sonic','Tails','Mario','Luigi','Link']

for (x of characters){
  console.log(x)
}


let course="Javascript"

for(char of course){
    console.log(char)
}

let games=['Sonic','Tails','Mario','Luigi','Link']

for (y of games) {
    if(y === 'Luigi'){
        break;
    } else {
        console.log(y)
    }
}

// DIFFERENCE //
/* For..in - when iterating over an object || for..of - when iterating over iterables(arrays,strings) */

const colors=['Red','Orange','Yellow','Green','Blue']

for (color of colors){
    console.log(color)
}

for (color of colors){
    if(color==="Green"){
        break;
    } else {
        console.log(`BREAK: ${color}`)
    }
}