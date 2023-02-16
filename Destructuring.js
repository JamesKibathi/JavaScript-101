/*Destructing-allows us to quickly pull out object or array properties */

let person={
    jina:"James",
    age:26,
    residence:"Nairobi"
}

// Destructuring an object = NB: does not mutate an object
let {jina,age,residence}=person
console.log(jina,age,residence)
// can also use custom object fields
let{name:nickname,age:years,residence:town}=person
console.log(nickname,years,town)
// Destructuring nested characters
let movie={
    title:"West world",
    release:2017,
    characters:{
        main:"Will smith",
        side:"Angeline Jollie",
        boss:"Stantham"
    }
}

let{title,release,characters,characters:{main,side,boss}}=movie

console.log(characters)
console.log(main,side,boss)

// Array Destructuring

const show=["Starwars","Lupita","2018"]
let[show_title,actor,year]=show

console.log(show_title)
console.log(actor)
console.log(year)

// nested arrays

const book=["The Last Battle","C.s Lewis",2002,["Shift","Puzzle","Tirian"]]
let[b_title,author,publish,[a,b,c]]=book
console.log(a,b,c)