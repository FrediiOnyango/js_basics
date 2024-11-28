let numb = 0;

if (numb > 0) {
  console.log(`${numb} is positive`);
} else if (numb < 0) {
  console.log(`${numb} is negative`);
} else {
  console.log(`${numb} is zero`);
}

// 2

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 3

function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(5, 14);

console.log(`The sum is: ${result}`)