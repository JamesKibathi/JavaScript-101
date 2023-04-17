let myString = "Control"
let toArray = myString.split("")
//console.log(toArray)

let temp = ""

for (i = 0; i < toArray.length; i++) {

    // console.log(toArray[i])
    temp = toArray[i]+temp
}

console.log(temp)