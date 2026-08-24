//Remove space from string
// "hello   world" -->"helloworld"

function removeSpace(str) {
  let result = "";
  for (let char of str) {
    if (char !== " ") {
      result += char;
    }
  }
  return result;
}
console.log(removeSpace("hello             world"));
