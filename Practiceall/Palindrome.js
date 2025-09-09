// 6. Check for Palindrome String

// 1) Using String Methods

let str ="madam"
let CheckPali = str.reverse('').split().join('');
console.log(CheckPali)

// without method

function CheckPalindrom(str){
   for (let i = str2.length -1; i <=0; i--){
    reverseStr2 += str[i]
   }
}

if (str2 = reverseStr2) {
     console.log("It's a palindrome!");
}else{
    console.log("It's not a palindrome!");
}


// is palindrome

function reverseStr(str){
  let reversed = "";
  for(let i = str.length-1; i >= 0;i--){
    reversed += str[i]
  }
  return reversed
}
function isPalindrom(str){
  let reversed = reverseStr(str);
  if(reversed === str){
    return true
  }else {
    return false
  }
}

console.log(reverseStr("hello"))

console.log(isPalindrom("hello"))

console.log(reverseStr("madam"))

console.log(isPalindrom("madam"))

