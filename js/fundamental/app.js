

// console.log("Hello");

// Var, let, Const

// var name = "Jagan";
// name = "Javid";

// let name = "Jagan 2";
// name = "Javid 2";

// const anotherName = "John";
// anotherName = "Doe";

// Data Types

// Primitive Types

// String
const name = "Jagan";

// Number
const age = 26;

// Boolean
const hadLunch = false;

// null
const bag = null;

// Undefined
let undef;


// Reference Types

const arr = [1,"Hello", true];

// console.log(arr[2]);


// Key & Value Pairs || Name & Value
const person = {
    // properties
    firstName: "Jagan",
    lastName: "Javid",
    // Method
    getFullName: function(){
       return this.firstName + " " + this.lastName;
    }
}

// console.log(person.getFullName());
// console.log(typeof person);


// sum(10,10);

// Function Statement

// function sum(x, y){
//     console.log(Number(x + y));
// }


// NAN === Not a Number
// sum(5,5);

// multiply(5,5);

// Hosting

const multiply = function(x, y){
    console.log(x * y);
}

multiply(5,5);


// console.log("Hello 1");
// console.log("Hello 2");
// console.log("Hello 3");

