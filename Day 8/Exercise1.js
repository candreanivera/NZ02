// Exercise 1: Function Basics
// Create a function called greet that takes a name as a parameter
// and logs a greeting message with the name to the console.
// Then, call the function with your name. 

function greet(name) {
  console.log("Hello: ", name);
}

greet("Cristina");


//  Exercise 2: Local vs. Global Scope 
// Declare a global variable globalVar with a
// value. Then, create a function that declares a local variable with the same name
// globalVar. Log the values of both variables inside and outside the function.
// What do you observe? 

let globalVar = "variable1";

function declaresVariable(){
    let globalVar = "variable2";
    console.log("Local declaration:", globalVar)
}

declaresVariable();
console.log("Global declaration", globalVar);

// Exercise 3: Higher-Order Function 
// Create a higher-order function called
// mathOperation that takes two numbers and a callback function as parameters. The
// callback function should perform a mathematical operation. Use this higher-order
// function to add, subtract, multiply, and divide two numbers. 

function mathOperation(number1, number2, operation){
  return operation(number1, number2)
}

function add_function(num1, num2){
  return (num1+num2);
}

function substract_function(num1, num2){
  return num1-num2;
}

function multiply_function(num1, num2){
  return num1*num2;
}

function divide_function(num1, num2){
  return num1/num2;
}

let sum = mathOperation(10,5,add_function);
//Calling the high-order function
console.log("Adding numbers: ", sum);

let substract = mathOperation(10,5,substract_function);
console.log("Substracting numbers: ", substract);

let multiply = mathOperation(10,5,multiply_function);
console.log("Multiplying numbers: ", multiply);

let division=mathOperation(10,5,divide_function);
console.log("Division : ", division);

