# Lesson 1: JavaScript Foundations for DSA

The goal of this lesson is to learn only the JavaScript needed to begin solving
algorithm problems.

## 1. Running JavaScript

We will use Node.js, so our code runs in the terminal rather than a browser.

```bash
node javascript/exercises/01-javascript-foundations.js
```

`console.log()` prints a value:

```js
console.log("Hello, DSA!");
```

## 2. Variables: `const` and `let`

Use `const` when a variable will not be assigned a different value. Use `let`
when it must change. Avoid `var` in modern JavaScript.

```js
const name = "Umaid";
let score = 0;

score = score + 1;
```

An array declared with `const` can still be changed. `const` prevents assigning a
different array to the variable; it does not freeze the array itself.

```js
const numbers = [10, 20];
numbers.push(30); // allowed
```

## 3. Values Used in DSA

```js
const age = 20;             // number
const price = 19.5;         // also a number
const language = "JS";      // string
const isLearning = true;    // boolean
const nothingHere = null;   // intentional absence of a value
```

JavaScript usually uses one `number` type for both integers and decimals.

```js
console.log(5 / 2);             // 2.5
console.log(Math.floor(5 / 2)); // 2
```

This differs from C++ integer division and matters in many DSA problems.

## 4. Operators and Conditions

```js
const number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

Important operators:

| Purpose | Operators |
| --- | --- |
| Arithmetic | `+`, `-`, `*`, `/`, `%` |
| Comparison | `===`, `!==`, `<`, `>`, `<=`, `>=` |
| Logic | `&&`, `||`, `!` |

Prefer `===` and `!==`. They compare without automatic type conversion.

```js
5 === "5"; // false
5 == "5";  // true because == converts a type; avoid this
```

## 5. Loops

An index-based loop is extremely common in DSA:

```js
const values = [4, 8, 2];

for (let index = 0; index < values.length; index++) {
  console.log(index, values[index]);
}
```

Use `for...of` when you need each value but not its index:

```js
for (const value of values) {
  console.log(value);
}
```

A `while` loop is useful when the number of repetitions is not known in advance:

```js
let number = 8;

while (number > 1) {
  number = Math.floor(number / 2);
}
```

## 6. Functions

A function receives inputs as parameters and can return an output.

```js
function add(first, second) {
  return first + second;
}

const result = add(3, 4);
console.log(result); // 7
```

For now, we will use function declarations because they are clear and easy to
read. A good DSA function should solve one well-defined problem.

## 7. Arrays

JavaScript arrays are dynamic: their size can grow and shrink.

```js
const numbers = [10, 20, 30];

numbers.push(40);  // add at the end
numbers.pop();     // remove from the end

console.log(numbers[0]);      // first element
console.log(numbers.length);  // number of elements
```

Indexing begins at `0`. For an array of length `n`, valid indices range from `0`
through `n - 1`.

## 8. Our First Algorithm: Sum an Array

Problem: Given an array of numbers, return their sum.

Pseudocode:

```text
SET total TO 0
FOR EACH number IN numbers
  ADD number TO total
RETURN total
```

JavaScript:

```js
function sumArray(numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}
```

For `n` array elements:

- Time complexity: `O(n)` because every element is visited once.
- Extra space complexity: `O(1)` because only `total` is added.

## First Practice Session

Open `javascript/exercises/01-javascript-foundations.js`. Complete Exercise 1
first, run the file, and check the output. Do not move to the later exercises
until Exercise 1 works.

