let book="The 5am Club"; // double quotes
let author='C.S. Lewis'; // single quotes
let series=`The Chronicles of Narnia` // backticks

let dialogue="John asked: 'What is the time?'";
let convo='John said: "Please don\'t do that"' // escape character
let another="John said:\"Please don\'t do that\""
let backslash="This is a backslash symbol:\\" //outputs "This is a backslash symbol: \"

// String concatenation
let day="Good morning, ";
let night="Good evening, ";
let question="how are you?";
let greetingDay=day+question;
let greetingNight=night+question;
console.log(greetingDay)
console.log(day+ "have you had breakfast?")
console.log(day.concat(question)) //Good morning, how are you?

// Template literals
let title="Sonic the Hedgehog"
let platform="SEGA"
let year=1991
let infor=`${title} was released by ${platform} in the year ${year}`

let firstName="James"
let course="JavaScript"
let channel="Dev Dreamer"
let info=`${firstName} is learning ${course} with ${channel}`

// String Methods
// 1. length - checks string length including the white spaces
let word="jay ule"
console.log(word.length)
// 2. trim() - removes spaces around the string
let activity=" Javascript is cool "
console.log(activity.trim())
// 3. toUpperCase - turns string to all capital letters
console.log(activity.toUpperCase())
// 4. toLowerCase - turns all our characters to lower case
console.log(activity.toLowerCase())
// 5. indexOf - checks the position of a specified character in a string
console.log(word.indexOf("j"))
console.log(word.indexOf("y"))
// lastIndexOf - finds the position of the last occurence of a character
let word2="backend dev is cool"
console.log(word2.lastIndexOf("d"))
// 6. slice()- extracts the specified index section
console.log(word2.slice(0,7))
// 7. replace() - replaces a specified value with another
console.log(word2.replace("dev","development"))
// 8. charAt() - returns the character at a specified position
console.log(word2.charAt(4))
// 9. split() -converts string into an array
let arr=word2.split(" ") // splits at spaces
console.log(arr)
console.log(arr.join(" ")) // returns the arr back into string
// 10. includes() - checks if a string includes a specified word
let text="hello world, how are you"
console.log(text.includes("hello")) // returns true
// 11. search
let desc="The rain in SPAIN stays mainly in the plain"
console.log(desc.match(/ain/gi)) // Perform a global, case-insensitive search for "ain":

let x ="I am watching Dev Dreamer"
console.log(x.toUpperCase())
console.log(x.slice(14,25))