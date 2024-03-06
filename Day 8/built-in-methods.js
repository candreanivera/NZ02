//Strings
// split
const message = "Hello, OneCoders!";
//Se especifica que se quiere separar la frase con comas
const words = message.split(",");
console.log(words);

//includes
const sentence = "The quick brown fox jumps over the lazy dog";
const containsWord = sentence.includes("fox");
console.log(containsWord); //true

//length
const sampleString = "Welcome to ";
console.log(sampleString.length);

//MATH
//max - return the bigest numbers
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber); //20

//min
const minNumber = Math.min(10, 5, 20);
console.log(minNumber);

//random 0 (inclusive) and 1 (esclusive)
const randomValue = Math.random();
console.log(randomValue);

//floor
//Redondea hacia abajo al entero más cercano
const roundedFloor = Math.floor(3.7);
console.log(roundedFloor); //3

//ceil
//Redondea hacia arriba al entero más cercano
const roundedCeil = Math.ceil(3.2);
console.log(roundedCeil); //4

//Round
//Redondeo normal hacia el entero más cercano
const roundedValue = Math.round(3.1);
console.log(roundedValue); //3

//get random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomInt = getRandomInt(1, 10);
//Se redondeó la función para ver valor entero
console.log(randomInt);

//Other built-in methods
//Number.toFixed()
const fixedNumber = 3.141592;
//Si solo queremos obtener "3.14":
const fixedNumber2 = (3.141592).toFixed(2);
console.log(fixedNumber2);

//Date()
//Output the current date and time that we have
const currentDate = new Date();
console.log(currentDate);
