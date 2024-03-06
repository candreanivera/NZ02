//Higher Order Functions
/*In this kind of functions, "operation" puede ser otra función*/
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

//Callback Functions
function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

//Using the higher-order function with callbacks
let result1 = calculate(5,3,add);
let result2 = calculate(5, 3, substract);

console.log("Addition: ", result1);
console.log("Substraction: ", result2);
