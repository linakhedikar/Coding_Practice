//Input -> [1,[2,[3,4],5]]
//Output -> [1,2,3,4,5]

//Solution-1 with built in method

// const arr = [1, [2, [3, 4], 5]];
// const result = arr.flat(Infinity); //Flatten all nested levels, no matter how deeply the array is nested.
// console.log(result);

//Solution-2 without flat method

function flatten(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten([1, [2, [3, 4], 5]]));
