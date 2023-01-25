/* SWITCH 
Takes a single value and then looks thru a list of choices
called cases untill a case that matches a value is found and then
each case resolves a corresponding code that will be executed if
there is a match 
*/

let roll= 4;
switch(roll){
    case 1:
        console.log("You rolled a 1");
        break;
    case 2:
        console.log("You rolled a 2");
        break;
    case 3:
        console.log("You rolled a 3");
        break;
    case 4:
        console.log("You rolled a 4");
        break;
    case 5:
        console.log("You rolled a 5");
        break;
    case 6:
        console.log("You rolled a 6");
        break;
    default:
        console.log(`The number ${roll} is not possible`)
}

let today = new Date().toLocaleString("default",{weekday:"short"});

switch(true){
    case today==="Mon":
        console.log(`Today is ${today}`);
        break;
    case today==="Tue":
        console.log(`Today is ${today}`);
        break;
    case today==="Wed":
        console.log(`Today is ${today}`);
        break;
    case today==="Thu":
        console.log(`Today is ${today}`);
        break;
    case today==="Fri":
        console.log(`Today is ${today}`);
        break;
    case today==="Sat":
        console.log(`Today is ${today}`);
        break;
    case today==="Sun":
        console.log(`Today is ${today}`);
        break;
    default:
        console.log("No idea")
}

// *** Tasks ***

let favFood = "Nyama choma"

switch (favFood){
    case "Rice":
    console.log (`That's right! ${favFood} is my favourite!`)
    break;
    case "Chips":
    console.log (`That's right! ${favFood} is my favourite!`)
    break;
    case "Chapati":
    console.log (`That's right! ${favFood} is my favourite!`)
    break;
    case "Pizza":
    console.log (`That's right! ${favFood} is my favourite!`)
    break;
    case "Nyama choma":
    console.log (`That's right! ${favFood} is my favourite!`)
    break;
    default:
    console.log(`${favFood} not found...I'm hungry`)

}