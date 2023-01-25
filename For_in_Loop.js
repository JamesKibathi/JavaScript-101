// Used to iterate over enumerable properties of an object

let character={
    name:"Sonic",
    color:"Blue",
    speed:100
}
console.log(character)

for (let x in character){
    console.log(`${x} : ${character[x]}`)
}

const salaries = {
    James : 100000,
    Peter: 50000,
    John: 70000
}

for (let i in salaries){
    let salary = `KES${salaries[i]}`;
    console.log(`${i} earns ${salary} per month`)
}

// For..in - iterates over the enumerable objects. By default it's set to true
 const house={
    type:'Detatched',
    build: 'brick',
    year:2019,
    price:250000,
    driveway:true
 }

 for(x in house){
    console.log(`${x}:${house[x]}`)
 }