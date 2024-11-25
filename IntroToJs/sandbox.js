// Declare a variable named name and initialize it with your name as a string.

let name = "Fred";

console.log(name);

// Declare a variable named age and initialize it with your age as a number.

let age = 24;

console.log(age);

// Declare a variable named isStudent and initialize it with a boolean value (true or false) that indicates whether you are a student.

let isStudent = "Fred";

isStudent = isStudent.includes("Fred");

console.log(isStudent);

// Declare a variable named address and initialize it as an object that includes your city and country.

let address = ["Nairobi", "Kenya"];

console.log(address);

// Declare a variable named hobbies and initialize it with an array of your hobbies.

let hobbies = ["reading", "writing", "music"];

console.log(hobbies);

// Declare a variable named undefinedVariable but do not initialize it, leaving it undefined.

let undefinedVariable;

console.log(undefinedVariable);

// Declare a variable named nullVariable and explicitly set it to null.

let nullVariable = null;

console.log(nullVariable);

// Print Variables and Their Types:

console.log("Name", name, "Type", typeof name);
console.log("Age", age, "Type", typeof age);
console.log("Student", isStudent, "Type", typeof isStudent);
console.log("Address", address, "Type", typeof address);
console.log("Hobbies", hobbies, "Type", typeof hobbies);
console.log("Undefined", undefinedVariable, "Type", typeof undefinedVariable);
console.log("Null", null, "Type", typeof null);

// Exercise 2
// Prompt for Name and Age:
let userName = prompt("Enter Your Name: ");

let userAge = Number(prompt("Enter Your Age: "));

// Calculate Year of Birth:

let currentYear = new Date().getFullYear();

yearOfBirth = currentYear - userAge;

alert(`Hello ${userName}! You were born in the year ${yearOfBirth}.`);
