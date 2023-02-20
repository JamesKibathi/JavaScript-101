/* Synchronous - starts from the very top of the file and executes to the bottom each line in order, without skipping
 #NB:Js is single threaded, it can only read code line by line but thanks to browser web APIs */
/* Asynch code - Starts the same as synch but along the execution it runs to async functions then it will execute that and the rest of the code separately 
- When something is going on, but u dont want to wait until it's executed,so u continue while it's happening
*/ 

/* Aynch code API helpers - setTimeout,setIntervals,Fetch */
console.log("Start")

setTimeout(()=>{
    console.log("In the timezone")
},1000)

console.log("End")

//Callbacks - a function that is passed in as a parameter and will run later on
 /* The downside is that you can run into callback hell-stacking callbacks as the program gets bigger */

// Promise- an object that gives us either the result or failure of an asynch operation  
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({user:"James"})
        reject(new Error("User not logged in"))
    },2000)
})

promise.then(user=>{
    console.log(user)
})
.catch(err=>console.log(err.message))

/* Getting multiple data using promises */
const yt= new Promise(resolve=>{
    setTimeout(()=>{
        console.log("Getting stuff from YT")
        resolve({videos:[1,2,3,4,5]})
    },2000)
})

const fb= new Promise(resolve=>{
    setTimeout(()=>{
        console.log("Getting stuff from fb")
        resolve({user:"Blueface queen"})
    },5000)
})
Promise.all([yt,fb]).then(res=>console.log(res))

// Async Await

async function displayUsers(){
try{
const res= await fetch("https://jsonplaceholder.typicode.com/users") 
const data=await res.json()
console.log(data)
}
catch(error){
  console.log("Could not display")
}
}

displayUsers()