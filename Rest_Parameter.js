// Rest Paramater - bundles arguments into an array
function restParameter(...z){
console.log(z) // array created by rest above
}
restParameter("apple","ball","cat")

function moreRest(x,y,...z){
    console.log(z)
    console.log(`The value of y is ${y}`)
    console.log(`The value of x is ${x}`)
}
moreRest("bake","cook","eat","drink","work","play")

/* Rest- Just like spread operator but it gathers values into an array 
- Unlike the argument keyword, it creates a true array that can use array methods
*/