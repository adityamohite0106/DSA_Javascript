// 3. Check if a Number is Prime

// Without Method:

function primeNum(num) {
  
  if (num <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(primeNum(7)); 


if (num<=1) return false;
for (let i = 2 ; i<=Math.sqrt(num);i++){
  if(num% i ===0) return false;
}
return true;
console.log(primeNum (8));
