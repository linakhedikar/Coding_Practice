//Find Character with Maximum Frequency

function maxFrequencyCharacter(str) {
  let frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let maxChar = "";
  let maxCount = 0;
  for (let char in frequency) {
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(maxFrequencyCharacter("javascript"));
