let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits);

//Accesing individual elements
console.log("Thrid fruit: ", fruits[2]);
console.log("first fruit: ", fruits[0]);
//Acceder el último elemento sin saber posición
console.log("Last fuit: ", fruits[fruits.length - 1]);

//Modifying an element
fruits[1] = "grape";
console.log(fruits);
fruits.push("strawberry");
console.log(fruits);
//Eliminar el último elemento
console.log(fruits.pop());
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

//Array Iteration
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruits: ", fruits[i]);
}

let colors = ["red", "blue", "white", "yellow"];

//FOREACH:
//Se ejecutará una vez por valor del array
colors.forEach(function (color) {
  console.log("Color: ", color);
});

//UNSHIFT
//Deja un elemento en la primera posición del array
fruits.unshift("lemon");
console.log(fruits);

//common array methods
let numbers = [1, 2, 3, 4, 5];

//length
console.log("Array length: ", numbers.length);

//indexOf
console.log("Index of 3: ", numbers.indexOf(3));
console.log("Index of white: ", colors.indexOf("white"));

//Does it contains x?
console.log("Includes number 5: ", numbers.includes(5)); //true
console.log("Includes number 5: ", numbers.includes(7)); //false

//'white' != 'White', elements are case sensitive

//join
//Separador para el array
console.log("joined array: ", numbers.join("-"));

//slice
//Incluye todo desde el índide 1 al índice 4
let slicedArray = numbers.slice(1, 4);
console.log('Sliced Array: ',slicedArray);

//splice
//Remueve 2 índices desde el índice 2
//ALTERA EL ARRAY ORIGINAL
let removedElements = numbers.splice(2, 2);
console.log('Removed Elements: ',removedElements);

console.log(numbers);