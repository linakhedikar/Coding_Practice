let arr = [10, 30, 20, 25,40]
let max = arr[0]
for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
    }
}   
console.log(max)