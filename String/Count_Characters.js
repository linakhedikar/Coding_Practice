//Count the number of Charcters in a string.
function countCharcters(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}
console.log(countCharcters("hello")); //5
