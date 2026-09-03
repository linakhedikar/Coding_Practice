//Q1. find firstNonRepeating chracter in string
// (Find the first character that appears only once in a string.)

// Solution
function firstNonRepeating(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeating("aabbcdd")); //c
