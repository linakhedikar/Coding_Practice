//Count the number of consonants in a string.
function countConsonants(str) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (
      char >= "a" &&
      char <= "z" &&
      !["a", "e", "i", "o", "u"].includes(char)
    ) {
      count++;
    }
  }
  return count;
}
console.log(countConsonants("javascript")); //7
