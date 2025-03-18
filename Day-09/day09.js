// Defining a class
class Person {
    // Constructor: Initializes the object properties
    constructor(name, age) {
        this.name = name; // Object property
        this.age = age;   // Object property
    }

    // Method: Displays a greeting message
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Method: Updates the age
    setAge(newAge) {
        this.age = newAge;
        console.log(`${this.name}'s age is now updated to ${this.age}`);
    }

    // Static Method: A method that belongs to the class, not an instance
    static description() {
        console.log("This is a Person class that represents a person with a name and age.");
    }
}
Person.prototype.sayGoodbye = function() {
    console.log(`${this.name} says goodbye!`);
};
// Creating objects (instances) of the class
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Using methods
person1.greet(); 
person2.greet(); 

person1.setAge(26); 
Person.description(); 

person1.sayGoodbye(); 
person2.sayGoodbye();