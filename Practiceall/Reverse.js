// 2. Reverse a String

// With Method:

const str = "Hello";
const reverseStr = str.split('').reverse().join('');
console.log(reverseStr)

// Without Method:
let str2 = "Hello";
let reverseStr2 = "";
for (let i = str.length -1 ; i >0; i--) {
   reverseStr2 += str[i];
}

console.log(reverseStr2 );