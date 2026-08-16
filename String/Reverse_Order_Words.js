//Reverses the order of words in a sentence
//I Love Javascript - > Javascript Love I

function reverseWords(str) {
  let words = str.split(" ");
  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i !== 0) {
      result += " ";
    }
  }
  return result;
}
console.log("Reverse a order of words:", reverseWords("I Love Javascript "));
