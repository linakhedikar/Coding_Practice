//Find the first character that repeats in a string

function firstRepeating(str) {
  let seen = {};
  for (let char of str) {
    if (seen[char]) {
      return char;
    }
    seen[char] = true;
  }
  return null;
}
console.log("firstRepeating char is: ", firstRepeating("abcdbea"));
