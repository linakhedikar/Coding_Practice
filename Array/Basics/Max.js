//Solution-1
// let arr = [10, 30, 20, 25, 40];
// let max = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max);

//Solution-2
// function FindLargestValue(arr) {
//   let max = arr[0];
//   for (const num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }

// console.log(FindLargestValue([10, 30, 20, 25, 40]));

//Solution-3 With built in method
function FindLargestValue(arr) {
  return Math.max(...arr);
}
console.log(FindLargestValue([10, 30, 20, 25, 40]));
