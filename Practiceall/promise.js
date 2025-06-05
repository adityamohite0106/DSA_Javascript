// write a code to remove duplicate using for loop

let arr = [1, 2, 3, 4, 5, 1, 2, 3];

function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
