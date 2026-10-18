let arr = [10, 30, 25, 25,10,10]

let count10 = 0
let count25 = 0

for (let i=0; i<arr.length; i++){
    if (arr[i] === 10){
        count10++}
    if (arr[i] === 25){
        count25++}
}
console.log(count10,count25)