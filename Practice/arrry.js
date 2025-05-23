// const arr = [2,3,3,5,2,5,3,1]
// const newArr = [...new Set(arr)]
// console.log(newArr)

let arr = [2, 3, 3, 5, 2, 5, 3, 1];
let uniqueArr = [];
for (i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}
console.log(uniqueArr);
