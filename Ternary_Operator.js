/* Ternary Operator
- Provides an easier way to write an if else statement
=> Ternary means it's composed of 3 parts
*/

let age = 18;
if (age >=18) {
    console.log ("You can vote")
} else {
    console.log ("Sorry, you can't vote")
}

let message = age >=18 ? "Unaeza vote" : "Hauwezi maan" ;

console.log(message)

let password = "Jay@100"

let loginStatus = (password ==="Jay@100") ? "Successful" : "Failed"

console.log(loginStatus)

// *** Tasks ***
let msg = ''

let hypothesis = (1>10) ? msg = "Condition is TRUE" : msg = "Condition is FALSE"

console.log (hypothesis)

let time = "12:00"

greetings = time < "12:00" ? "Good Morning" : "Good Evening"

console.log (greetings)