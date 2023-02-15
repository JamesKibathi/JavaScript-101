// Sets - similar to arrays except you can't have duplicates
// => Collection of values where ech value can only appear once
const fruits=new Set()
fruits.add("apple")
fruits.add("banana")
fruits.add("plum").add("pear")
fruits.add("apple") // sets guard against duplicate values
console.log(fruits)
let check = fruits.has("grapes")
console.log(check)
console.log(fruits.size)

// fruits.clear() - deletes the entire set properties

// You can also turn an array to a set
let arrayFruits=["Mango","Pineapple","Orange","Pears"]
const juice=new Set(arrayFruits)
console.log(juice)

// Weak Sets - Can only contain no primitives (objects-array,functions)
/* Weak sets cannot be iterated over */

let nums =[4,6,8,10]
let weakSet= new WeakSet()
weakSet.add(nums)
nums= null
console.log(nums)
console.log(weakSet)

/* NB: When objects (eg nums array) are stored inside of a set,
they will remain there as long as the set exists even
if the original reference have since been removed - The Object
is prevented from being garbage collected */

// Iterating thru a set
const mk = new Set()
mk.add("Scorpion").add("Sub-Zero").add("Reptile").add("Liu Kang")

for (character of mk){
    console.log(character)
}

mk.forEach(
    function(value){
        console.log(value)
    }
)