/* While - repeat a block of code whilst given condition remains true */

let i =0;

while (i <= 10) {
 console.log(i);
 i++
}

const colors = ["Red","Blue","Orange","Green","Purple"]

let color=0;

while (color < colors.length){
    console.log(`${colors[color]} is my favorite`)
    color ++
}

/* do while - ensure that the code is executed atleast once before the condition is tested */

let j=0;
do {
    console.log(`The number is ${j}`)
    j++
} while (j <= 10) 

/* USECASES
1. For Loop - when we know ahead of time the number of loops or iterations
we require

2. While Loop - When the number of iterations is not known ahead of time
e.g when we need to loop a piece of code based on the users input

3. do while - Will run atleast once

*/

// ** Tasks **

let x = 0;

while (x <= 100){
    console.log(`The speed of the car is ${x}MPH`)
    x+=10;
}


let a =1
let b=10

do{
    console.log(a)
    a++
} while (a<=b)