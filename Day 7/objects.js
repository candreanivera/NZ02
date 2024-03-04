//Objects literals - way to define and create objects

const person = {
    firstName : "John",
    lastName : "Doe",
    age: 25,
    hobbies: ["reading", "coding", "napping"],

    greet: function(){
        console.log("Hello, my name is " + person.firstName)
    }
}

console.log(person.firstName);
console.log(person.age);

//Modify properties of the object:
person.lastName = "Smith";
console.log(person.lastName);

//Access object methods
person.greet();

//Add more properties
person.nationality = "American";
console.log(person.nationality);

//Add more methods
person.introduce = function() {
    console.log("I am " + person.firstName + " " + person.lastName);
}
person.introduce();

//Nesting objects
const address = {
    street: "123 Main St",
    city: "New York",
    country: "USA"
}

//Indicando que el objeto address será parte de persona, 
//como un nuevo campo llamado address
person.address = address;
console.log(person.address);

//destructuring to extract properties
//Indica que firstName es parte de persona 
//En el ejemplo, no esEscribir person.firstName:
const {firstName, lastName, age} = person;
console.log(firstName);