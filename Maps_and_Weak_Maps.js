/* Map - a collection of key:data items similar to an object
- Difference between map and object: map -allows keys of any type
- Maps will convert keys to string whilst object will not

*/

// sample object
let game= {
    name:"Sonic",
    platform:"Nintendo",
    year:2004

}

let gameMap= new Map()
gameMap.set("Name","Sonic the Hedgehog")
gameMap.set(3,"The number three")
gameMap.set(true,"boolean")
console.log(gameMap)

// extracting a value from map
let getInfo=gameMap.get(3)
console.log(getInfo)
// checking if map contains a value
let hasInfo=gameMap.has("Name")
console.log(hasInfo)

// remove an item from map
let deleteInfo=gameMap.delete(true)
console.log(gameMap)
// check size
console.log(gameMap.size)

// Iterating over maps - 3 methods (keys, values,entries)

let myGames= new Map()
myGames.set("SEGA","Sonic the Hedgehog")
myGames.set("PS","Spyro")
myGames.set("SNE","Super Mario")
console.log(myGames)
//keys()
for(let key of myGames.keys()){
    console.log(key)
}
//values()
for (let value of myGames.values()){
    console.log(value)
}
// entries()
for(let [k,v] of myGames.entries()){
    console.log(`${k} has the value of ${v}`)
}

/* Weak Maps - Keys must be objects and not primitive values
- Also weak maps do not support iteration and it's use is quite rare
*/
let weakMap=new WeakMap()
weakMap.set("Name","James")
// console.log(weakMap) - Gives an error
