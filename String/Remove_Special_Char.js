function removeSpecialCharacters(str) {
  let result = "";
  for (let char of str) {
    if (
      (char >= "A" && char <= "Z") ||
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9")
    ) {
      result = result + char;
    }
  }
  return result;
}
console.log(removeSpecialCharacters("Hello@123#World!"));
