//Find Duplicate Characters

function duplicateCharacters(str) {
  let frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let char in frequency) {
    if (frequency[char] > 1) {
      console.log(char, frequency[char]);
    }
  }
}

duplicateCharacters("programming");
