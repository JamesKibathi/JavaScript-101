// method to print current date and time
let currentDate=new Date()
console.log(currentDate)
// you can access methods inside current date
// 1. get method
console.log(currentDate.getFullYear())
console.log(currentDate.getMonth()) // NB: months are zero indexed- jan is 0 and dec is 11
console.log(currentDate.getDay()) // NB: days are zero indexed - 0 sund, 1 mon and so on ..
console.log(currentDate.getHours()) // returns a number between 0 and 23, reps hours for the day
console.log(currentDate.getSeconds())
console.log(currentDate.getMilliseconds())

// 2. set method
currentDate.setFullYear(2023)
console.log(currentDate.getFullYear())

// Output date as a string

console.log(
    currentDate.toLocaleString('default',{month:'short',weekday:'short'})
    // currentDate.toLocaleDateString()
)

// using a date string * not commonly used
let dateString=new Date("Jan 18 2023 05:30:00")
console.log(dateString)
// using components * not commonly used
let componentDate=new Date(2023,0)
console.log(componentDate)

// exercise
let date=new Date()
console.log(date.getDate())
let hour=date.getHours()
let min=date.getMinutes()
console.log(`${hour}:${min}`)

let day=date.getDay()
console.log(day)
let siku=date.toLocaleString("default",{weekday:'short'})
console.log(siku)