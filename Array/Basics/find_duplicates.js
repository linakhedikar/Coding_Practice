function findDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

console.log(findDuplicates([1, 2, 2, 3, 3, 4]));
