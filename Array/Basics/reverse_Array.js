//with built in method

// const arr = [1, 2, 3, 4, 5];
// const result = arr.reverse(arr);
// console.log(result);

//Without built in method

function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
