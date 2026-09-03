//Solution-1
// let arr = [10, 30, 20, 25, 40];
// let min = arr[0];

// for (let i = 0; i > arr.length; i++) {
//   arr[i] < min;
//   min = arr[i];
// }
// console.log(min);

//Solution-2
// function FindSmallestValue(arr) {
//   let min = arr[0];
//   for (const num of arr) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// }

// console.log(FindSmallestValue([10, 30, 20, 25, 40]));

//Solution-3 With built in method
function FindSmallestValue(arr) {
  return Math.min(...arr);
}
console.log(FindSmallestValue([10, 30, 20, 25, 40]));
