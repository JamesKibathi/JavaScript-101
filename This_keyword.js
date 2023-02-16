/* This keyword can be defined in 4 contexts
1.The global object - <this> refers to the global window object
2.As a method within an object-<this> refers to the immediate object it is within
3.As a constructor on a function or class -
4.As a DOM event handler - refers to the targeted element e.g button
*/
let game={
    name:"Sonic the Hedgehog",
    platform:"SEGA",
    year:2002,
    release:function(){
        console.log(`Game was released in the year ${this.year}`)
    }
}
game.release()

// this-refers to the object that the method is created in

/* Nested objects */
let show={
    name:"Wednesday",
    genre:"Drama",
    release:2021,
    characters:{
        main:"Jazz",
        side:"Luke",
        enemy:"Dawg",
        list(){
            console.log(`${this.main} ${this.side} ${this.enemy}`)
        }
    }
}

show.characters.list()