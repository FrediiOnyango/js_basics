# Practical Exercises

## Exercise 1: Working with Variables and Data Types

Create a script that declares and initializes variables of different data types. Then, use console.log to print each variable's value and type. This exercise will help you understand how to work with various data types in JavaScript.

Steps:
- Declare and Initialize Variables:

- Declare a variable named name and initialize it with your name as a string.
- Declare a variable named age and initialize it with your age as a number.
- Declare a variable named isStudent and initialize it with a boolean value (true or false) that indicates whether you are a student.
- Declare a variable named address and initialize it as an object that includes your city and country.
- Declare a variable named hobbies and initialize it with an array of your hobbies.
- Declare a variable named undefinedVariable but do not initialize it, leaving it undefined.
- Declare a variable named nullVariable and explicitly set it to null.
- Print Variables and Their Types:

Use console.log to print each variable's value and its type. To print the type, use the typeof operator.

## Exercise 2: Calculate Year of Birth

Write a JavaScript program that prompts the user for their name and age, then calculates and alerts the year they were born. This exercise demonstrates how to interact with users and process simple data.

Steps:
Prompt for Name and Age:

Use the prompt() function to ask the user for their name. Store the input in a variable named userName.
Use prompt() again to ask for the user's age. Store this in a variable named userAge.
Calculate Year of Birth:

Determine the current year using new Date().getFullYear().
Subtract userAge from the current year to calculate the year of birth. Store this in a variable named yearOfBirth.
Display the Result:

Use alert() to show a message to the user that includes their name and the calculated year of birth.



## Control Structures and Basic Functions

###  Practice Exercises

#### Exercise 1: Conditional Logic Practice

Write a script to check if a number is positive, negative, or zero and print an appropriate message to the console.

Steps:
1. Declare a variable named `number` and initialize it with a value.
2. Use an `if` statement to check if the number is greater than 0. If true, print "[number] is positive" to the console.
3. Use an `else if` statement to check if the number is less than 0. If true, print "[number] is negative" to the console.
4. Use an `else` statement to handle the case where the number is 0. Print "[number] is zero" to the console.


#### Exercise 2: Looping Through Numbers
Use a for loop to print numbers 1 through 10 to the console.

Steps:
1. Use a `for` loop with an initial value of 1, a condition that continues the loop while the value is less than or equal to 10, and an increment expression that increases the value by 1 each loop iteration.
2. Inside the loop, use `console.log()` to print the current value of the loop counter.


#### Exercise 3: Basic Function Creation
Write a function that takes two numbers as parameters and returns their sum.

Steps:
1. Declare a function named `sum` that takes two parameters, `num1` and `num2`.
2. Inside the function, return the sum of `num1` and `num2`.
3. After the function declaration, call the function with two numbers as arguments and store the result in a variable.
4. Use `console.log()` to print the result to the console.