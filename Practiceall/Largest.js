// 4. Find the Largest Number in an Array

// With Method:

let arr = [1,2,3,5,6,7,8]
let largestArr = Math.max(...arr);
console.log(largestArr)

// without method:

let arr2 =  [1,2,3,5,6,7,8]
let max = [0]
for (let i = 1; i < arr.length; i++){
    if(arr[i]> max){
        max = arr[i];
    }
}
console.log(max)

