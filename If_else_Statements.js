/* 
if statements

if(condition){

   // code runs if condition is true

}
*/

if(true){
    console.log("The condition is true")
}

//if else statements

let game="Sonic"

if(game==="Mario") {
    console.log("Yaay I love this")
} else {
    console.log("Looks like we have a different game")
}


// else if statements
let roll = 2
if(roll===4) {
    console.log("You rolled a four");
} else if (roll===5) {
    console.log("You rolled a five");
} else if (roll===6){
    console.log("You rolled a six")
} else {
    console.log("You rolled less than four")
}

// *** TASKS ****

let user="employee"
if (user === "guest"){
    console.log("Login Denied")
} else if(user==="employee") {
    console.log ("Succesfully Logged in ")
}

let myName = "James"

if (myName.length > 5){
    alert("More than 5")
} else if (myName.length === 5) {
    alert ("Exactly 5 letters")
} else {
    alert ("Less than 5 letters")
}