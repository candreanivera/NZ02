//functions
function greet(){
    console.log("Hello, welcome to the world of functions");
}
greet();

// 2 ways functions
// 1. function declaration
function squareDeclaration(num){
    return num * num;
}
console.log(squareDeclaration(2));

//2. function expression
const squareExpresssion = function(num){
    return num * num;
}
console.log(squareExpresssion(3));

console.log("Square for function declaration: ", squareDeclaration(2));
console.log("Square for function expression: ", squareExpresssion(3));

//Function Hoisting
//Allow to use the function before declaration
//Only works for function declaration
sayHello();

function sayHello () {
    console.log('Hello, function hoisting');
}

// helloExpression();

// const helloExpression = function (){
//     console.log("Expression hoisting");
// }

//Anonimus functions
const anonymousFunction = function(){
    console.log("Hello anonymous function");
}

anonymousFunction();