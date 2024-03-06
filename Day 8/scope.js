//Global variable
//Accesible throughout the entire code
let globalVar = "I am a global variable";


//Local variable

function localScope(){
    let localVar = "I am local";
console.log(globalVar)
console.log(localVar);
}

localScope();
console.log(globalVar)
// console.log(localVar);