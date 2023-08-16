// You have to write this every time in program to use prompt in vs code
const prompt = require("prompt-sync")({ sigint: true });
// We use function if we don't want to repeat our code

function greet(name, greetText="If it is written like this then this will be default value"){ //Name and greetText both are the parameter of the function greet
    // let name1 = "Name1";  This name1 variable is in local scope. This will not affect the global variable
    console.log("\n"+greetText+" "+name);
    console.log(name+" is a boy");
    // This is one type of function which does return any value. This type of function only works but does not return anything.
}
// This is the type of function which will return value
function sum (a,b,c){
    let d = a+b+c;
    return d;
    // Anything which is written after return will not execute in JAvaScript
}
// And all of this variable is in global scope
let name1 = "TOny";
let name2 = "roy";
let name3 = "banana";
let name4 = "apple";

let greetText= "Good Morning";

// Calling a function. When we don't call a function it will not execute a function

greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
greet(name4);
// -------------------------------------------------------=------------------------
// let returnval1 = greet(name4);
// This will return undefined



let returnval = sum (1,2,3);
console.log(returnval);
