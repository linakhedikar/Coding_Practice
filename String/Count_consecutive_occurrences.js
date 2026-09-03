// Count consecutive occurrences of each character and append the character with its count.
//Input -> aabbcccc ;  Output -> a2b2c4

function compressString(input) {
  let output = "";
  for (let i = 0; i < input.length; ) {
    let count = 1;
    while (input[i] === input[i + 1]) {
      count++;
      i++;
    }
    output += input[i] + count;
    i++;
  }
  return output;
}
console.log(compressString("aabbcccc"));
