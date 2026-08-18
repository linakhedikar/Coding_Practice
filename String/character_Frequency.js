function characterFrequency(str) {
  let frequency = {};
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}
console.log(characterFrequency("programming"));
