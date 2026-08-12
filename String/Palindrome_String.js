//Q1.Write a program to Check whether a string is palindrome or not with using built-in methods

// Solution

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }
// console.log("Palindrome using built-in methods: " + isPalindrome("madam"));

//Q2.Write a program to Check whether a string is palindrome or not without using built-in methods

// Solution

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(
  "Palindrome without using built-in methods: " + isPalindrome("level"),
);
