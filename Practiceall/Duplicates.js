// 1. Remove Duplicates from an Array

// With Method:

const arr = [1,2,3,4,5,3,1,2,4,4,5,6,2]
const newArr = [...new Set[i]]
console.log(newArr)

// Without Method:

let arr2 = [1,2,3,4,5,3,1,2,4,4,5,6,2]
let uniqueArr = [];
for(let i=0 ; i < arr2.length; i++){
    if(!uniqueArr.includes(arr2[i])){
        uniqueArr.push(arr2[i]);
    }
}
console.log(uniqueArr);
