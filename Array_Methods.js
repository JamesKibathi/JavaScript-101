// Length property
let supers=['Superman','Batman','Flash','Aquaman']
console.log(supers.length)

// Last element
console.log(supers[supers.length-1])

// NB:Length property is mutable - We can change it's length

supers.length=2
console.log(supers) // only outputs the first two elements

// ARRAY METHODS
//1. indexOf - Outputs the position of the specified array element
let games = ["Sonic","Super Mario","GTA","Fight club"]
console.log(games)
console.log(games.indexOf('GTA'))

//2. includes - Returns a boolean value if an array includes the given element
console.log(games.includes('Sonic'))

// 3. Pop - removes the last element in an array
console.log(games.pop())
console.log(games)

// 4. shift - removes the first element from an array
console.log(games.shift())
console.log(games)

// 5. push - adds an element at the end of an array
games.push("Minecraft")
console.log(games)

// 6. unshift - adds an element at the beginning of an array

games.unshift("Call of Duty")
console.log(games)

// 7. concat - joins two arrays together

let newGames = games.concat(["CounterStrike","Fortnite","World of Warcraft"])
console.log(newGames)
console.log (games)
// concat method does not change the original array

// 8. Join - turns the array into a string
console.log(games.join(", "))

// 9. Split - takes a string and turns it into an array 

let players="Steph Curry, Lebron James, Michael Jordan, Larry Bird"
let playersArray=players.split(',')
console.log(playersArray)

// 10. slice - creates a sub array, cuts out a section of an array (non destructive)

let xmen=newGames.slice(4,6) // last index is usually not included
console.log(xmen)

// 11. splice - removes items from an array and replaces them with new ones (Destructive)

let players2=["Steph Curry", "Lebron James", "Michael Jordan", "Larry Bird"]
players2.splice(1, 1,'Kevin Durant')
console.log(players2)

//can also be used to delete an array element
players2.splice(2,1) // removes Michael Jordan
console.log(players2)

// 12. Reverse - reverses the orders of the array
players2.reverse()
console.log(players2)

// 13. Sort - Sorts out an array alphabetically
players2.sort()
console.log(players2)
let nums=[10,12,7,70,200]
console.log(nums.reverse())

/*** TASKS ***/

let fruits=["apple","orange","banana"]
fruits.unshift("cherry","pineapple")
fruits.push("plum","grapes")
console.log(fruits)
fruits.splice(3,1,"lemon")
console.log(fruits)
fruits.sort()
console.log(fruits)