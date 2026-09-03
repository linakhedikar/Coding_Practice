// Check Whether Two Strings are Anagrams
// (anagram means both strings contain the same characters with the same frequency, but the order can be different.)

// Ex. listen , silent -->true

//without built-in method

// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let frequency = {};
//   for (let char of str1) {
//     frequency[char] = (frequency[char] || 0) + 1;
//   }

//   for (let char of str2) {
//     if (!frequency[char]) {
//       return false;
//     }
//     frequency[char]--;
//   }
//   return true;
// }
// console.log(areAnagrams("listen", "silent"));

//with built-in method
function areAnagrams(str1, str2) {
  const sorted1 = str1.toLowerCase().split("").sort().join("");
  const sorted2 = str2.toLowerCase().split("").sort().join("");

  return sorted1 === sorted2;
}
console.log(areAnagrams("listen", "silent"));
