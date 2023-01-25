console.log("Hello")
let num1=10;
let num2=20
console.log(num1+num2)
console.log(num2%num1)
let total=10
++total
console.log(total)
// += operator

let score=100;
score +=100;
console.log(score)

// -= operator
let balance =5000
balance-=400
console.log(balance)

// *= operator
let donation=100;
donation *=2;
console.log(donation);

// /= operator
let sweets=10
sweets /=10
console.log(sweets)

// %= operator
let pizzaSlices=10;
pizzaSlices%=3
console.log(pizzaSlices)

//Assignment operators used to assign value to it. Done by = sign
//can also be done using compound operators 

// 2. Numbers - Js has only one data type for numericals
 let num=3;
 let newNum=3.16
 console.log(typeof num);
 console.log(typeof newNum);
 // scientific notation
 let mill=1e6;
 // 1 * (10**6) = 1000000
 console.log(mill);

 let smallNum=1e-6;
 console.log(smallNum); //0.000001

 // Summary - number is a primitive. Although not objects, primitives have access
 // to built in methods, number=>Number,string=>String,boolean=>Boolean. We can use
 // these methods on primitives to perform some useful actions
 
 // 3. Number methods
 const PI=3.141596254
 const pi=PI.toFixed(2)
 pi2=PI.toPrecision(5)
 let milli=1000000;
 m=milli.toExponential()
 console.log(m)

 let test=16785229
 console.log(test.toLocaleString())

 let mysting="12";
 sum=parseInt(mysting)+2
 console.log(sum)
