//using built-in method
// function removeDuplicates(arr) {
//   return [...new Set(arr)]; // Set automatically stores only unique values.
// }
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

//without built in
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
