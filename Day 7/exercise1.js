// Objective: Create a FizzBuzz program to practice loops and conditionals.
// Instructions: Write a JavaScript program that prints numbers from 1 to 100
// For multiples of 3, print "Fizz" instead of the number.
// For multiples of 5, print "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz.” -->


for(let i = 0; i <=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }else if(i % 3 == 0){
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
    
}