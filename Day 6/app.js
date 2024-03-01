// Arithmetic operations
let x = 8;
let y = 5;

let sum = x + y;
console.log("Sum: ", sum);

let diff = x - y;
console.log("Difference: ", diff);

let mult = x * y;
console.log("Multiplication: ", mult);

let divn = x / y;
console.log("Division: ", divn);

let remainder = x % y;
console.log("Remainder: ", remainder);

// string expressions
console.log("Hello," + "I am " + "Cristina");

// Logical expressions
let sunny = true;
let warm = false;

//AND, OR, Not
// && cuando ambas son verdaderas
// OR: solo cuando una condición es verdadera
// or ||
// true || true = true
// false || true = true
// true || false = true
// false || false = false
// not !
// !true = false

console.log("Sunny && warm :", sunny && warm);
console.log("Sunny || warm :", sunny || warm);
console.log("Is not sunny:", !sunny);

// assignment expressions
let a = 10;
let b = 5;
a = a + b;

console.log(a);
a += b;
console.log(a);

a -= b;
console.log(a);

a *= b;
console.log("a: ", a);

a /= b;
console.log("a: ", a);  

//Conditional statements
let age = 80;
if (age>= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

let temp= 30;

if (temp <0){
    console-log("It's freezing!")
}else if(temp >= 0 && temp < 20){
    console.log("It's cold outside");
}else {
    console.log("It's a warm day");
}