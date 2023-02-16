// Call
const game={
    title:"Super Mario",
    release:1992
}
function info(){
    console.log(`${this.title} was released in ${this.release}`)
}

info.call(game)
info.apply(game) // works just fine

// bind - similar to call but differs on how we pass additional elements

function moreInfo(platform,character){
    console.log(`${this.title} was released in ${this.release}, for ${platform}
    features ${character}`)
}
moreInfo.apply(game,["SEGA","Sonic"]) // additional elements are passed as array
moreInfo.call(game,"Nintendo","Sonny")

// Bind - permanent change that we can reference over and over

const gameInfo=moreInfo.bind(game,"Super sport","GTA")
gameInfo()

// call,bind,apply - Used to control this keyword. Creates a connection between a function and an object