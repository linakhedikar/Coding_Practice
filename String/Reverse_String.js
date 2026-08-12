//Q1.Write a program to Reverse a string with using built-in methods

// Solution

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(
//   "Reversed string using built-in methods: " + reverseString("hello"),
// );

//Q2.Write a program to Reverse a string without using built-in methods

//Solution

function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log(
  "Reversed string without built-in methods: " + reverseString("hello"),
);
