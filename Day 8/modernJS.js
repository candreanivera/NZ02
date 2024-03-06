//Arrow functions
const greet = () => console.log("Hello OneCoder");

greet();

const square = (a) => console.log("Square: ", a * a);

square(5);

//Template literals
let name = "Abbi";
let age = 25;

console.log("I'm " + name + "and I am" + age + "years old");
// ``, y considera saltos de línea
console.log(`HI! I'm ${name} and I am
 ${age} years old`);

// Destructuring
//array
let nums = [24, 23, 13];
//nums es separado en distintas variables
let [firstNum, secondNum, thirdNum] = nums;
console.log(`${firstNum}, ${thirdNum}, ${secondNum}`);

//Objects
const numbers = {
  first: 1,
  second: 2,
  third: 3,
};

let { first, second, third } = numbers;
console.log(`${first}, ${second}, ${third}`);

const person = {
  name,
  age,

  sayHello() {
    return `Hello!, I am ${name} and I am ${age} years old.`;
  },
};

console.log(person.sayHello());

//Spread and Rest
function sum(x, y, z) {
  return x + y + z;
}

// let nums = [24, 23, 13];
console.log(sum(...nums));

//Rest
//Imprime elprimer argumento y luego el segundo e un array
function myFunction(firstArg, ...restOfArgs) {
  console.log(firstArg, restOfArgs);
}

myFunction("one", "two", "three", "four");

//Default parameter
function multiply(a, b = 5) {
  return a * b;
}

//Retorna resultado aunque no se ingresen todos los valores,
//porque proporciona un valor default
//En el ejemplo, el valor default es 5, retorna 40
console.log(multiply(8));

//En este caso se otorgan los dos valores, por lo que
//no se usa el número 5
console.log(multiply(9, 6));

//Se podrían proporcionar valores default para ambos parámetros:
function multiply2(a = 2, b = 5) {
  return a * b;
}

console.log(multiply2(9));
