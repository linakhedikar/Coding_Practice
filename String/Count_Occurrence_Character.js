//Count Occurrence of a character
// banana -> a -> 3

function countCharacter(str, target) {
  let count = 0;
  for (let char of str) {
    if (char === target) {
      count++;
    }
  }
  return count;
}
console.log("countCharacter: ", countCharacter("banana", "a"));
