// Lesson 1: JavaScript Foundations for DSA
// Run with: node javascript/exercises/01-javascript-foundations.js

// Exercise 1: Even or Odd
// Return "Even" when number is even and "Odd" when it is odd.
function evenOrOdd(number) {
  if(number % 2 === 0){
    return "Even";
  }else{
    return "Odd";
  }
}

// Exercise 2: Find the Larger Number
// Return the larger of first and second. If they are equal, return either one.
function findLarger(first, second) {
  if(first > second){
    return first;
  } else {
    return second;
  }
}

// Exercise 3: Sum from 1 to n
// Example: n = 4 returns 1 + 2 + 3 + 4 = 10.
// Assume n is a positive integer. Use a loop for this lesson.
function sumToN(n) {
  let total = 0;

  for (let number = 1; number <= n; number++){
    total += number;
  }

  return total;

}

// Exercise 4: Sum an Array
// Return the sum of every number. An empty array should return 0.
function sumArray(numbers) {
  let total = 0;

  for (const num of numbers){
    total += num;
  }

  return total;
}

// Exercise 5: Find the Maximum
// Return the largest number. Assume the array contains at least one number.
function findMaximum(numbers) {
  let maxNum = numbers[0];

  for (const num of numbers){
    if (num > maxNum){
      maxNum = num;
    }
  }

  return maxNum;
}

// Uncomment tests one exercise at a time as you complete the functions.

// console.log(evenOrOdd(8)); // expected: Even
// console.log(evenOrOdd(7)); // expected: Odd

// console.log(findLarger(10, 4)); // expected: 10
// console.log(findLarger(3, 9));  // expected: 9

// console.log(sumToN(4)); // expected: 10
// console.log(sumToN(1)); // expected: 1

// console.log(sumArray([3, 1, 5])); // expected: 9
// console.log(sumArray([]));        // expected: 0

// console.log(findMaximum([4, 9, 2, 7]));  // expected: 9
// console.log(findMaximum([-8, -3, -10])); // expected: -3

